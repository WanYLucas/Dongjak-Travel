import React, { useEffect, useRef } from 'react';
import type { Language } from '../types';
import { LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  onSelect: (language: Language) => void;
}

const ParticleCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        const particles: Particle[] = [];
        const particleCount = 50;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.2) this.size -= 0.01;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                if(ctx) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }

        const init = () => {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if(ctx) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        init();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};


const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  const langInfo = LANGUAGES['en']; 
  const displayOrder = ['ko', 'en', 'es', 'zh', 'de', 'ja', 'ru', 'th'];
  const sortedLanguageOptions = displayOrder.map(code => LANGUAGES[code]).filter(Boolean);


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 p-4 overflow-hidden">
      <ParticleCanvas />
      <div className="text-center mb-12 z-10 animate-fade-in-down">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-3 tracking-tight" style={{textShadow: '0 4px 15px rgba(0,0,0,0.2)'}}>
          {langInfo.title}
        </h1>
        <p className="text-xl md:text-2xl text-indigo-100">
          {langInfo.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-4xl w-full z-10">
        {sortedLanguageOptions.map((lang, index) => (
          <button
            key={lang.code}
            onClick={() => onSelect(lang)}
            className="group flex flex-col items-center justify-center p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-white/30 hover:bg-white/30 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            style={{ animation: `fade-in-up 0.5s ${index * 0.05}s ease-out backwards` }}
          >
            <span className="text-5xl md:text-6xl mb-3 transition-transform duration-300 group-hover:scale-110">{lang.flag}</span>
            <span className="text-lg font-semibold text-white tracking-wide">{lang.nativeName}</span>
          </button>
        ))}
      </div>
       <style>{`
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
          }
           @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
    </div>
  );
};

export default LanguageSelector;