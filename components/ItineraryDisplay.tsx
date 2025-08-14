
import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { Language, Recommendation, Location } from '../types';
import { FIXED_ITINERARY, LANGUAGES, DONGJAK_LOCATIONS } from '../constants';
import LocationModal from './LocationModal';

interface ItineraryDisplayProps {
  recommendations: { [key: number]: Recommendation[] } | null;
  language: Language;
  onRestart: () => void;
}


// A custom illustrative SVG map of Dongjak-gu's neighborhoods
const DongjakMapSVG = () => (
  <svg viewBox="0 0 800 600" className="w-full h-full animate-fade-in">
    <defs>
        <style>{`
            .dong-path {
                stroke: #fff;
                stroke-width: 2;
                transition: fill 0.3s ease-in-out;
            }
            .dong-label {
                font-family: 'Arial', sans-serif;
                font-size: 16px;
                font-weight: bold;
                fill: rgba(0, 0, 0, 0.5);
                pointer-events: none;
                text-anchor: middle;
            }
        `}</style>
    </defs>
    <g>
      {/* Noryangjin-dong */}
      <path className="dong-path" fill="#a5f3fc" d="M300,10 L550,10 L550,180 L450,200 L300,150 Z" />
      <text x="425" y="95" className="dong-label">Noryangjin</text>
      {/* Daebang-dong */}
      <path className="dong-path" fill="#bae6fd" d="M50,10 L300,10 L300,150 L200,220 L50,180 Z" />
      <text x="175" y="95" className="dong-label">Daebang</text>
      {/* Sindaebang-dong */}
      <path className="dong-path" fill="#c4b5fd" d="M50,180 L200,220 L250,450 L50,480 Z" />
      <text x="150" y="330" className="dong-label">Sindaebang</text>
      {/* Sangdo-dong */}
      <path className="dong-path" fill="#a78bfa" d="M250,450 L450,200 L580,350 L550,550 L250,500 Z" />
      <text x="400" y="400" className="dong-label">Sangdo</text>
      {/* Bon-dong */}
      <path className="dong-path" fill="#93c5fd" d="M450,200 L550,180 L650,200 L580,350 Z" />
      <text x="550" y="250" className="dong-label">Bon-dong</text>
      {/* Heukseok-dong */}
      <path className="dong-path" fill="#7dd3fc" d="M550,10 L780,10 L780,250 L650,200 Z" />
      <text x="665" y="130" className="dong-label">Heukseok</text>
      {/* Dongjak-dong */}
      <path className="dong-path" fill="#67e8f9" d="M580,350 L780,250 L780,450 L650,500 Z" />
      <text x="680" y="380" className="dong-label">Dongjak</text>
      {/* Sadang-dong */}
      <path className="dong-path" fill="#818cf8" d="M550,550 L650,500 L780,450 L780,580 L550,580 Z" />
      <text x="665" y="530" className="dong-label">Sadang</text>
    </g>
  </svg>
);


const findLocationData = (locationName: string) => {
    const lowerCaseName = locationName.toLowerCase();
    
    const key = Object.keys(DONGJAK_LOCATIONS).find(locKey => 
        DONGJAK_LOCATIONS[locKey].keywords.some(kw => lowerCaseName.includes(kw.toLowerCase()))
    );

    if (key) {
        return { 
            x: DONGJAK_LOCATIONS[key].x * 8, 
            y: DONGJAK_LOCATIONS[key].y * 6 
        };
    }

    const fallbackKey = Object.keys(DONGJAK_LOCATIONS).find(locKey => lowerCaseName.includes(locKey.toLowerCase()));

    return fallbackKey ? { 
        x: DONGJAK_LOCATIONS[fallbackKey].x * 8, 
        y: DONGJAK_LOCATIONS[fallbackKey].y * 6 
    } : null;
};

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ recommendations, language, onRestart }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  
  const langStrings = LANGUAGES[language.code];
  const activeDayData = FIXED_ITINERARY.find(day => day.day === selectedDay);
  const dailyRecommendations = recommendations ? recommendations[selectedDay] : null;
  const routeLineRef = useRef<SVGPolylineElement>(null);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };
  
  const handleCloseModal = () => {
    setSelectedLocation(null);
  };
  
  const handleRecommendationClick = (rec: Recommendation) => {
    const createLangRecord = (text: string) => ({ [language.code]: text, en: text });

    const getKeywordsFromCategory = (category: string) => {
        const categoryMap: { [key: string]: string } = {
            '음식점': 'korean,food,restaurant,dining',
            '카페': 'korea,cafe,aesthetic,latte-art,interior',
            '보드게임': 'board-game,friends,tabletop,dice',
            '방탈출': 'escape-room,puzzle,door,clue',
            '탁구장': 'table-tennis,ping-pong,active',
            '당구장': 'billiards,pool-table,game,focus',
            '노래방': 'karaoke,singing,microphone,neon',
            '볼링장': 'bowling-alley,pins,strike,fun',
            '바': 'lounge,bar,cocktail,nightlife,dark-moody',
            '공원': 'seoul,park,nature,green,trees',
            '박물관': 'korea,museum,exhibit,history,art',
            '먹자거리': 'korean-food-street,market,vibrant,night',
            '문화유적': 'korea,history,palace,traditional,heritage',
        };
        const normalizedCategory = Object.keys(categoryMap).find(key => category.includes(key)) || category;
        return categoryMap[normalizedCategory] || 'seoul,place,korea';
    };

    const locationForModal: Location = {
        name: createLangRecord(rec.name),
        activity: createLangRecord(rec.category),
        address: createLangRecord(rec.address),
        description: createLangRecord(rec.description),
        category: createLangRecord(rec.category),
        tip: createLangRecord(rec.reason), 
        website: rec.link,
        icon: rec.icon,
        imageUrl: `https://source.unsplash.com/800x600/?${getKeywordsFromCategory(rec.category)}`,
    };
    setSelectedLocation(locationForModal);
  };

  const getText = (field: Record<string, string> | undefined) => {
    if (!field) return '';
    return field[language.code] || field['en'] || '';
  }

  const routePoints = useMemo(() => {
    if (!activeDayData) return [];
    return activeDayData.locations
      .map(loc => {
        const data = findLocationData(getText(loc.name));
        return data ? { x: data.x, y: data.y } : null;
      })
      .filter((p): p is { x: number; y: number } => p !== null);
  }, [activeDayData, language.code]);

  useEffect(() => {
    if (routeLineRef.current) {
        const line = routeLineRef.current;
        line.style.animation = 'none';
        setTimeout(() => {
            const length = line.getTotalLength();
            line.style.strokeDasharray = `${length}`;
            line.style.strokeDashoffset = `${length}`;
            line.style.animation = 'draw-line 2s ease-out forwards';
        }, 50);
    }
  }, [routePoints]);


  const renderLocationCard = (location: Location, index: number) => (
    <div style={{ animationDelay: `${index * 100}ms` }} className="animate-fade-in-up">
        <button 
          onClick={() => handleLocationClick(location)}
          className="w-full text-left bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          <div className="p-5">
            <div className="flex justify-between items-start">
                <div className="flex-grow pr-4">
                    <p className="text-sm font-bold text-indigo-600">{getText(location.activity)}</p>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{getText(location.name)}</h3>
                    <p className="text-sm text-gray-500 mt-2">📍 {getText(location.address)}</p>
                </div>
                <div className="text-4xl md:text-5xl ml-4 select-none p-3 bg-gray-100 rounded-xl">{location.icon}</div>
            </div>
             {location.time &&
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-sm text-gray-600">
                     <span className="bg-gray-100 rounded-full px-3 py-1 font-medium">⏱️ {getText(location.time)}</span>
                </div>
            }
          </div>
        </button>
    </div>
  );
  
  const renderRecommendationCard = (rec: Recommendation, index: number) => (
     <button 
          key={index} 
          onClick={() => handleRecommendationClick(rec)}
          aria-label={`Open details for ${rec.name}`}
          className="w-full text-left bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border-2 border-transparent bg-gradient-to-br from-purple-50 to-indigo-50 animate-fade-in-up focus:outline-none focus:ring-4 focus:ring-purple-300"
          style={{ animationDelay: `${index * 150}ms` }}>
         <div className="p-6">
            <div className="flex justify-between items-start">
                <div className="flex-grow pr-4">
                    <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">{rec.name}</h4>
                    <p className="mt-4 text-gray-700">{rec.description}</p>
                    <p className="text-sm text-gray-500 mt-3">📍 {rec.address}</p>
                </div>
                <div className="text-4xl md:text-5xl ml-4 select-none p-3 bg-white rounded-xl">{rec.icon}</div>
            </div>
             <div className="mt-4 text-sm italic bg-white/60 border-l-4 border-purple-300 text-purple-800 p-3 rounded-r-lg">
                <span className="font-semibold">✨ For you:</span> "{rec.reason}"
            </div>
            {rec.link && (
                 <a href={rec.link} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-bold group">
                    <span>Learn More</span>
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                </a>
            )}
        </div>
    </button>
  );

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center my-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-700">
            {langStrings.itineraryTitle}
          </h1>
          <p className="text-lg text-gray-600 mt-3">{activeDayData ? getText(activeDayData.theme) : ''}</p>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-4 my-8 sticky top-4 bg-white/80 backdrop-blur-sm p-2 rounded-full z-10 shadow-md">
          {FIXED_ITINERARY.map(day => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                selectedDay === day.day
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-transparent text-indigo-600 hover:bg-indigo-100'
              }`}
            >
              {langStrings.dayButton(day.day)}
            </button>
          ))}
        </div>
        
        <div className="relative w-full bg-blue-50 rounded-2xl shadow-2xl overflow-hidden aspect-[4/3] my-12">
            <DongjakMapSVG />
            
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet" style={{ pointerEvents: 'none' }}>
                {routePoints.length > 1 && (
                    <polyline 
                        ref={routeLineRef}
                        points={routePoints.map(p => `${p.x},${p.y}`).join(' ')}
                        fill="none"
                        stroke="rgba(239, 68, 68, 0.8)"
                        strokeWidth="4"
                        strokeDasharray="1"
                        strokeDashoffset="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                )}
            </svg>

            {activeDayData?.locations.map((location, index) => {
            const locationData = findLocationData(getText(location.name));
            if (!locationData) return null;

            return (
                <button
                key={`${selectedDay}-${index}`}
                onClick={() => handleLocationClick(location)}
                className="absolute group map-marker"
                style={{ 
                    top: `${(locationData.y / 600) * 100}%`, 
                    left: `${(locationData.x / 800) * 100}%`,
                    animationDelay: `${index * 150}ms`,
                }}
                aria-label={`Open details for ${getText(location.name)}`}
                >
                <div className="w-7 h-7 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-125">
                    {index + 1}
                </div>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-black bg-opacity-70 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {getText(location.name)}
                </span>
                </button>
            );
            })}
        </div>

        <div className="space-y-6">
            {activeDayData?.locations.map(renderLocationCard)}
        </div>
        
        {dailyRecommendations && dailyRecommendations.length > 0 && (
          <div className="mt-20 pt-10 border-t-2 border-dashed border-gray-300">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">{langStrings.recommendationsTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {dailyRecommendations.map(renderRecommendationCard)}
              </div>
          </div>
        )}
        
        {(recommendations && (!dailyRecommendations || dailyRecommendations.length === 0)) && (
           <div className="mt-12 text-center p-4 bg-yellow-100 text-yellow-800 rounded-lg animate-fade-in-up">
              {langStrings.recommendationsError}
           </div>
        )}
        
        <div className="text-center mt-16">
          <button
            onClick={onRestart}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
          >
            {langStrings.restartButton}
          </button>
        </div>
        <style>{`
            @keyframes fade-in-up {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
              opacity: 0; 
            }
            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fade-in 0.6s ease-out forwards;
            }
            @keyframes draw-line {
                to {
                    stroke-dashoffset: 0;
                }
            }
            @keyframes pop-in {
                0% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.3);
                }
                70% {
                    transform: translate(-50%, -50%) scale(1.1);
                }
                100% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            .map-marker {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.3);
                animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            }
          `}</style>
      </div>
      {selectedLocation && (
        <LocationModal 
          location={selectedLocation}
          onClose={handleCloseModal}
          language={language}
        />
      )}
    </>
  );
};

export default ItineraryDisplay;
