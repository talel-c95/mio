import React, { useEffect, useState } from "react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { categories } from "../data/products";

interface CategoriesScreenProps {
  onCategorySelect: (categoryId: string) => void;
  onBack: () => void;
  cartItemCount: number;
}

export function CategoriesScreen({ onCategorySelect, onBack, cartItemCount }: CategoriesScreenProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFE8E0] to-[#F5E8DD] p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={onBack}
          className={`flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-[#D4958C] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
          style={{ transitionDelay: '0.1s', transitionDuration: '0.5s' }}
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-xl">Retour</span>
        </button>

        <h1 
          className={`text-5xl text-[#8B6F5C] tracking-wide transition-all ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          style={{ transitionDelay: '0.2s', transitionDuration: '0.6s' }}
        >
          Nos Catégories
        </h1>

        {/* Cart Indicator */}
        <div 
          className={`relative transition-all ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
          style={{ transitionDelay: '0.3s', transitionDuration: '0.5s' }}
        >
          <div className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg">
            <ShoppingCart className="w-6 h-6 text-[#D4958C]" />
            <span className="text-xl text-[#8B6F5C]">{cartItemCount}</span>
          </div>
          {cartItemCount > 0 && (
            <div 
              className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4958C] rounded-full flex items-center justify-center text-white"
              style={{ animation: 'bounce 0.6s ease-in-out' }}
            >
              {cartItemCount}
            </div>
          )}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              transitionDelay: `${0.4 + index * 0.1}s`,
              transitionDuration: '0.6s',
              animation: isVisible ? `slideUp 0.6s ease-out forwards` : 'none',
              animationDelay: `${0.4 + index * 0.1}s`
            }}
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Category Name */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-white text-3xl text-center tracking-wide">
                {category.name}
              </h2>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-[#D4958C]/0 group-hover:bg-[#D4958C]/10 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}
