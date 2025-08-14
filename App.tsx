
import React, { useState, useCallback } from 'react';
import LanguageSelector from './components/LanguageSelector';
import TravelQuiz from './components/TravelQuiz';
import ItineraryDisplay from './components/ItineraryDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import { generateAllDayRecommendations } from './services/geminiService';
import type { QuizAnswers, Language, Recommendation } from './types';
import { LANGUAGES } from './constants';

type AppState = 'language' | 'quiz' | 'loading' | 'results';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('language');
  const [language, setLanguage] = useState<Language | null>(null);
  const [recommendations, setRecommendations] = useState<{ [key: number]: Recommendation[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const transitionTo = (newState: AppState) => {
    setAppState(newState);
  };

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    transitionTo('quiz');
  };

  const handleQuizComplete = useCallback(async (answers: QuizAnswers) => {
    if (!language) return;
    transitionTo('loading');
    setError(null);
    try {
      const generatedRecs = await generateAllDayRecommendations(answers, language.name);
      setRecommendations(generatedRecs);
      transitionTo('results');
    } catch (e) {
      console.error(e);
      setError(LANGUAGES[language.code]?.errorText || 'An error occurred. Please try again.');
      setRecommendations({}); // Set to empty object on failure
      transitionTo('results');
    }
  }, [language]);
  
  const handleRestart = () => {
    transitionTo('language');
    setLanguage(null);
    setRecommendations(null);
    setError(null);
  }

  const renderContent = () => {
    return (
        <div className="relative">
            <div className={appState === 'language' ? 'animate-fade-in' : 'hidden'}>
                <LanguageSelector onSelect={handleLanguageSelect} />
            </div>
            {appState !== 'language' && (
            <div className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${appState === 'quiz' ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
                {language && <TravelQuiz language={language} onComplete={handleQuizComplete} error={error} />}
            </div>
            )}
             {appState !== 'language' && appState !== 'quiz' && (
                <div className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${appState === 'loading' ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}>
                    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-700">
                        <LoadingSpinner />
                        <p className="mt-4 text-lg animate-pulse">{language ? (LANGUAGES[language.code]?.loadingText || 'Generating your trip...') : 'Loading...'}</p>
                    </div>
                </div>
             )}
            {appState === 'results' && (
                 <div className={`transition-opacity duration-500 ${appState === 'results' ? 'opacity-100' : 'opacity-0'}`}>
                    {language && <ItineraryDisplay recommendations={recommendations} language={language} onRestart={handleRestart} />}
                 </div>
            )}
        </div>
    )
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.7s ease-out forwards;
          }
           @keyframes fade-out {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fade-out {
            animation: fade-out 0.5s ease-in forwards;
          }
        `}</style>
      <main>{renderContent()}</main>
    </div>
  );
};

export default App;
