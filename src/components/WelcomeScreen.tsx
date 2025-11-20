import React, { useEffect, useState } from "react";
import mioLogo from "figma:asset/e95f8812b22c4b87802eaba1828ecb1c4c09194b.png";
import heroVideo from "../assets/invideo-ai-1080 Desserts in Slow Motion_ A Cinematic Dri 2025-11-19.mp4";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1711513335836-d6a138f7a340?auto=format&fit=crop&w=1200&q=80"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF9F0]/95 via-[#FFE8E0]/90 to-[#F5E8DD]/95" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 px-8">
        {/* Logo with floating animation */}
        <div 
          className={`w-80 h-80 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{
            animation: 'float 3s ease-in-out infinite',
            animationDelay: '0.5s'
          }}
        >
          <img 
            src={mioLogo} 
            alt="Mio Pâtisserie" 
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Subtitle with fade-in */}
        <p 
          className={`text-[#D4958C] text-2xl tracking-wide text-center max-w-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '0.3s' }}
        >
          Commandez vos douceurs artisanales
        </p>

        {/* Start Button with pulse animation */}
        <button
          onClick={onStart}
          className={`px-20 py-8 bg-gradient-to-r from-[#D4958C] to-[#E9B5AB] text-white text-2xl rounded-3xl shadow-2xl hover:shadow-[#D4958C]/50 hover:scale-105 active:scale-95 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ 
            transitionDelay: '0.5s',
            animation: 'pulse 2s ease-in-out infinite',
            animationDelay: '1s'
          }}
        >
          Commencer la commande
        </button>

        {/* Decorative element with fade-in */}
        <div 
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-[#D4958C]/30 text-sm tracking-widest transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          ✦ PÂTISSERIE ARTISANALE ✦
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 149, 140, 0.7);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(212, 149, 140, 0);
          }
        }
      `}</style>
    </div>
  );
}
