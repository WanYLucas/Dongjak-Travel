import React, { useState } from 'react';
import type { Language, QuizAnswers } from '../types';
import { QUIZ_QUESTIONS, LANGUAGES } from '../constants';

interface TravelQuizProps {
  language: Language;
  onComplete: (answers: QuizAnswers) => void;
  error: string | null;
}

type AnimationState = 'entering' | 'exiting' | 'idle';

const TravelQuiz: React.FC<TravelQuizProps> = ({ language, onComplete, error }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [animationState, setAnimationState] = useState<AnimationState>('idle');

  const langStrings = LANGUAGES[language.code];
  
  const getText = (field: Record<string, string>) => {
    return field[language.code] || field['en'];
  };

  const handleAnswerSelect = (questionId: keyof QuizAnswers, optionId: string) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    setAnimationState('exiting');
    
    setTimeout(() => {
        if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnimationState('entering');
        } else {
            onComplete(newAnswers as QuizAnswers);
        }
    }, 400); // Match animation duration
  };

  const getAnimationClass = () => {
    if (animationState === 'entering') return 'animate-slide-in';
    if (animationState === 'exiting') return 'animate-slide-out';
    return 'animate-fade-in-initial';
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 overflow-x-hidden">
      <div className="w-full max-w-2xl">
         <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{langStrings.quizTitle}</h1>
          <p className="text-md text-gray-500 mt-2">{langStrings.quizSubtitle}</p>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div
            className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className={`relative ${getAnimationClass()}`}>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8" style={{minHeight: '4rem'}}>
                    {getText(currentQuestion.questionText)}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => handleAnswerSelect(currentQuestion.id, option.id)}
                        className="w-full text-left p-5 bg-gray-100 rounded-xl hover:bg-indigo-100 hover:shadow-md transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <span className="text-lg font-medium text-gray-800">
                        {getText(option.text)}
                        </span>
                    </button>
                    ))}
                </div>
            </div>
        </div>
        
         {error && (
            <div className="mt-4 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-md">
                <p>{error}</p>
            </div>
        )}
      </div>
       <style>{`
          @keyframes slide-in {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-in {
            animation: slide-in 0.4s ease-out forwards;
          }
           @keyframes slide-out {
            from { opacity: 1; transform: translateX(0); }
            to { opacity: 0; transform: translateX(-100%); }
          }
          .animate-slide-out {
            animation: slide-out 0.4s ease-in forwards;
          }
          @keyframes fade-in-initial {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in-initial {
            animation: fade-in-initial 0.5s ease-out forwards;
          }
        `}</style>
    </div>
  );
};

export default TravelQuiz;