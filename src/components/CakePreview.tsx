import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface CakePreviewProps {
  cakeType: string;
  size: number;
  flavors: string[];
  text: string;
  decorations: string[];
}

export function CakePreview({ cakeType, size, flavors, text, decorations }: CakePreviewProps) {
  const sizeMultiplier = size / 25; // Base size is 25cm
  const baseSize = 200 * sizeMultiplier;

  const flavorColors: Record<string, string> = {
    Chocolate: "#5B3F2F",
    Vanilla: "#FFF8F0",
    Framboise: "#FF6B9D",
    Pistachio: "#A8D5BA",
    Caramel: "#F8D78A",
    Mix: "linear-gradient(135deg, #5B3F2F, #FF6B9D, #A8D5BA)",
  };

  const getDecorationEmoji = (decoration: string) => {
    const map: Record<string, string> = {
      "Fruits frais": "🍓",
      "Macarons": "🧁",
      "Fleurs": "🌸",
      "Design spécial": "✨",
    };
    return map[decoration] || "✨";
  };

  return (
    <div className="sticky top-8 flex flex-col items-center">
      <motion.div
        className="relative"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        {/* Cake base */}
        <motion.div
          className="relative rounded-full shadow-2xl"
          style={{
            width: baseSize,
            height: baseSize * 0.6,
            background: flavors.length > 0
              ? flavorColors[flavors[0]] || "#FFF8F0"
              : "#FFF8F0",
            transformStyle: "preserve-3d",
          }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Layers */}
          {flavors.slice(1).map((flavor, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              style={{
                width: "90%",
                height: 40,
                left: "5%",
                top: -(index + 1) * 40,
                background: flavorColors[flavor] || "#FFF8F0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          ))}

          {/* Text on cake */}
          {text && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                color: "#5B3F2F",
                fontSize: baseSize * 0.12,
                fontFamily: "cursive",
                textShadow: "0 2px 4px rgba(255,255,255,0.8)",
              }}
            >
              {text}
            </motion.div>
          )}

          {/* Decorations */}
          {decorations.map((decoration, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 200,
              }}
              style={{
                fontSize: baseSize * 0.15,
                left: `${15 + index * 25}%`,
                top: -30,
              }}
            >
              {getDecorationEmoji(decoration)}
            </motion.div>
          ))}
        </motion.div>

        {/* Cake plate */}
        <div
          className="mt-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200"
          style={{
            width: baseSize * 1.2,
            height: 20,
            marginLeft: -(baseSize * 0.1),
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          }}
        />
      </motion.div>

      {/* Cake info */}
      <div className="mt-6 text-center space-y-2">
        <p className="text-[#5B3F2F] opacity-70">{cakeType || "Sélectionnez un type"}</p>
        <p className="text-[#5B3F2F] opacity-70">{size ? `${size} cm` : ""}</p>
      </div>
    </div>
  );
}
