export interface Language {
  code: string;
  name:string;
  nativeName: string;
  flag: string;
}

export interface QuizQuestion {
  id: keyof QuizAnswers;
  questionText: Record<string, string>;
  options: {
    id: string;
    text: Record<string, string>;
  }[];
}

export interface QuizAnswers {
  food: string;
  place: string;
  how: string;
  with: string;
  vibe: string;
}

export interface Location {
  name: Record<string, string>;
  activity: Record<string, string>;
  address: Record<string, string>;
  time?: Record<string, string>;
  link?: string;
  icon: string;
  description: Record<string, string>;
  category: Record<string, string>;
  tip: Record<string, string>;
  website?: string;
  travelInfoToHere?: {
    mode: Record<string, string>;
    duration: Record<string, string>;
  };
  imageUrl?: string;
  naverMapLink?: string;
  hideGoogleMap?: boolean;
}

export interface ItineraryDay {
  day: number;
  theme: Record<string, string>;
  locations: Location[];
}

export interface Recommendation {
    name: string;
    description: string;
    address: string;
    reason: string;
    link?: string;
    category: string;
    tip: string;
    icon: string;
}