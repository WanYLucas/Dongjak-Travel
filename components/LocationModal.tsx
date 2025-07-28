
import React, { useEffect, useState, useMemo } from 'react';
import type { Location, Language } from '../types';
import { LANGUAGES } from '../constants';

interface LocationModalProps {
  location: Location;
  onClose: () => void;
  language: Language;
}

const generatePastelColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = hash % 360;
    return `hsl(${h}, 70%, 85%)`;
};


const LocationModal: React.FC<LocationModalProps> = ({ location, onClose, language }) => {
  const [imageError, setImageError] = useState(false);
  
  const getText = (field: Record<string, string> | undefined) => {
    if (!field) return '';
    return field[language.code] || field['en'] || '';
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Reset image error state when location changes
    setImageError(false);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose, location]);

  const fallbackColor = useMemo(() => generatePastelColor(getText(location.name)), [location.name, language.code]);

  // Use category and name to generate relevant image keywords for a high-quality fallback image.
  const keywords = (getText(location.category) + ',' + getText(location.name) + ',seoul,korea').toLowerCase().replace(/\s+/g, ',');
  const locationImage = location.imageUrl || `https://source.unsplash.com/800x600/?${keywords}`;
  
  const langStrings = LANGUAGES[language.code];
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getText(location.name) || location.address.en)}`;
  const naverMapsUrl = location.naverMapLink || `https://map.naver.com/v5/search/${encodeURIComponent(getText(location.name))}`;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 animate-fade-in-fast"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto flex flex-col animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
            {imageError ? (
                 <div className="w-full h-64 rounded-t-2xl flex items-center justify-center" style={{ backgroundColor: fallbackColor }}>
                     <span className="text-6xl opacity-70 select-none">{location.icon}</span>
                 </div>
            ) : (
                 <img src={locationImage} onError={() => setImageError(true)} alt={getText(location.name)} className="w-full h-64 object-cover rounded-t-2xl bg-gray-200" />
            )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
           <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block bg-indigo-500 text-white text-sm font-semibold mr-2 px-3 py-1 rounded-full mb-2">{getText(location.category)}</span>
                <h2 className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>{getText(location.name)}</h2>
           </div>
        </div>
        <div className="p-6 flex-grow">
          <p className="text-sm text-gray-600 mb-4">{getText(location.address)}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{getText(location.description)}</p>
          
          <div className="bg-amber-50 border-l-4 border-amber-400 text-amber-900 p-4 rounded-r-lg">
            <h3 className="font-bold">{langStrings.tipsTitle}</h3>
            <p className="mt-1 text-sm">{getText(location.tip)}</p>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-b-2xl flex flex-wrap gap-3">
            {location.website && (
              <a href={location.website} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[150px] flex items-center justify-center px-4 py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  {langStrings.websiteLink}
              </a>
            )}
            {!location.hideGoogleMap && (
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[150px] flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {langStrings.googleMapsLink}
                </a>
            )}
            <a href={naverMapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[150px] flex items-center justify-center px-4 py-3 bg-[#03C75A] text-white font-semibold rounded-lg shadow-md hover:bg-[#02B350] transition-all duration-300 transform hover:scale-105">
                <span className="font-bold text-lg leading-none mr-2">N</span>
                {langStrings.naverMapsLink}
            </a>
        </div>
      </div>
       <style>{`
          @keyframes fade-in-fast {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in-fast {
            animation: fade-in-fast 0.3s ease-out forwards;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          }
        `}</style>
    </div>
  );
};

export default LocationModal;
