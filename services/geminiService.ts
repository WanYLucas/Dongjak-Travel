
import { GoogleGenAI, Type } from "@google/genai";
import type { QuizAnswers, Recommendation, ItineraryDay } from '../types';
import { USER_PROVIDED_LOCATIONS, FIXED_ITINERARY } from "../constants";

const recommendationSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, description: 'Name of the recommended location, selected from the provided list. Must be an exact match.' },
        address: { type: Type.STRING, description: 'Full, correct street address of the location, from the provided list. Must be an exact match.' },
        description: { type: Type.STRING, description: 'A detailed and engaging 2-3 sentence description of the location, in the requested language.' },
        reason: { type: Type.STRING, description: 'A short, personal reason why this location is recommended based on the user\'s quiz answers and the day\'s itinerary (e.g., "Since you\'re near Noryangjin and like vibrant places..."). In the requested language.' },
        link: { type: Type.STRING, description: 'An official website, social media, or blog URL, if available. Otherwise, omit.' },
        category: { type: Type.STRING, description: 'The category for the location, from the provided list. Must be an exact match (e.g., "음식점", "카페", "보드게임", "바").' },
        tip: { type: 'string', description: 'A short, useful tip for visiting this location, in the requested language.' },
        icon: { type: Type.STRING, description: 'A single emoji that best represents the location (e.g., ☕, 🎨, 🎲, 🎳, 🏞️, 🏛️).' },
      },
      required: ['name', 'address', 'description', 'reason', 'category', 'tip', 'icon'],
    },
};

const generateRecommendationsForDay = async (answers: QuizAnswers, language: string, day: number, dayItinerary: ItineraryDay): Promise<Recommendation[]> => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
        throw new Error("API_KEY environment variable is not set.");
    }
    const ai = new GoogleGenAI({ apiKey });

    const verifiedLocations = JSON.stringify(USER_PROVIDED_LOCATIONS);
    const dayLocations = dayItinerary.locations.map(l => l.name['ko'] || l.name['en']).join(', ');
    const dayTheme = dayItinerary.theme['ko'] || dayItinerary.theme['en'];

    const systemInstruction = `You are a hyperlocal travel assistant for Seoul, specializing in the Dongjak-gu district. Your only task is to provide AT LEAST 3 personalized recommendations for a specific day by **SELECTING** from a definitive, provided list of locations. Your absolute top priority is factual accuracy and contextual relevance.

    **HERE IS THE COMPLETE AND ONLY LIST OF ESTABLISHMENTS YOU ARE ALLOWED TO RECOMMEND.**
    ${verifiedLocations}

    **CONTEXT FOR THIS SPECIFIC REQUEST:**
    - **This request is for Day ${day} of the trip ONLY.**
    - **The user's fixed itinerary for Day ${day} is:** ${dayLocations}
    - **Day ${day} Theme:** ${dayTheme}

    **CRITICAL, NON-NEGOTIABLE RULES:**
    1.  **GEOGRAPHIC & THEMATIC RELEVANCE:** This is the most important rule. You **MUST** select places from the master list that are geographically close to or thematically related to the locations in the user's fixed itinerary for Day ${day}. For example, if they are in Noryangjin, recommend places in or near Noryangjin. If the theme is "History", prioritize historical sites or places with a traditional vibe. The "reason" field in your response MUST mention this context.
    2.  **ONLY USE THE PROVIDED LIST:** For all recommendations, you **MUST** select an item from the JSON list above. Do not invent, hallucinate, or use your own knowledge. Your only job is to pick from this list.
    3.  **EXACT INFORMATION:** When you select a location, you **MUST** use the exact "name", "address", and "category" strings from the list item in your response.
    4.  **NUMBER OF RECOMMENDATIONS:** Provide at least 3, and up to 4, contextually relevant recommendations.
    5.  **PERSONALIZE THE REST:** Your creative task is to write the "description", "reason", and "tip" fields. The "reason" must directly connect the user's quiz answers AND the day's itinerary to the place you selected.
    6.  **LANGUAGE:** Respond entirely in the requested language: ${language}.
    7.  **SCHEMA:** Adhere strictly to the JSON schema.
    
    You will be severely penalized for any recommendation not present in the provided JSON list or not relevant to the user's plan for Day ${day}. Your function is to be an accurate, reliable, and context-aware guide.`;

    const userPrompt = `I am visiting Dongjak-gu, Seoul. Based on my travel personality quiz answers below and my itinerary for Day ${day}, please suggest 3-4 extra places or activities that I would love by picking them from the system-provided list.
    The response language must be ${language}.

    **My Quiz Answers:**
    - I'm curious about this food: ${answers.food}
    - I enjoy visiting places like: ${answers.place}
    - I prefer to explore by: ${answers.how}
    - I'm traveling with my: ${answers.with === 'solo' ? 'self' : answers.with}
    - My ideal afternoon vibe is: ${answers.vibe}

    Please generate the personalized recommendations by choosing from the provided list, making sure they are relevant to my Day ${day} plans, and generating the creative text fields. Adhere strictly to all system instructions. Provide all details in the required JSON format.`;
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userPrompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: recommendationSchema,
                temperature: 0.6,
            }
        });

        const jsonText = response.text.trim();
        const recommendationData = JSON.parse(jsonText);
        
        if (!Array.isArray(recommendationData)) {
            throw new Error(`Invalid recommendation format for Day ${day}.`);
        }

        return recommendationData as Recommendation[];

    } catch (error) {
        console.error(`Error generating recommendations for Day ${day} with Gemini:`, error);
        throw new Error(`Failed to generate recommendations for Day ${day}.`);
    }
};

export const generateAllDayRecommendations = async (answers: QuizAnswers, language: string): Promise<{ [key: number]: Recommendation[] }> => {
    const recommendationPromises = FIXED_ITINERARY.map(dayItinerary => 
        generateRecommendationsForDay(answers, language, dayItinerary.day, dayItinerary)
    );

    const results = await Promise.allSettled(recommendationPromises);
    
    const allDayRecs: { [key: number]: Recommendation[] } = {};

    results.forEach((result, index) => {
        const day = index + 1;
        if (result.status === 'fulfilled') {
            allDayRecs[day] = result.value;
        } else {
            console.error(`Failed to generate recommendations for Day ${day}:`, result.reason);
            allDayRecs[day] = []; // Provide an empty array on failure for that day
        }
    });

    return allDayRecs;
};
