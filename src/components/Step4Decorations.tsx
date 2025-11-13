import { motion } from "motion/react";
import { CakePreview } from "./CakePreview";
import { useState } from "react";

interface Step4Props {
  cakeType: string;
  size: number;
  flavors: string[];
  cakeText: string;
  decorations: string[];
  onTextChange: (text: string) => void;
  onDecorationsChange: (decorations: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const decorationOptions = [
  { name: "Fruits frais", emoji: "🍓", description: "Fraises, framboises, myrtilles" },
  { name: "Macarons", emoji: "🧁", description: "Macarons assortis" },
  { name: "Fleurs", emoji: "🌸", description: "Fleurs comestibles" },
  { name: "Design spécial", emoji: "✨", description: "Personnalisé sur demande" },
];

export function Step4Decorations({
  cakeType,
  size,
  flavors,
  cakeText,
  decorations,
  onTextChange,
  onDecorationsChange,
  onNext,
  onBack,
}: Step4Props) {
  const toggleDecoration = (decoration: string) => {
    if (decorations.includes(decoration)) {
      onDecorationsChange(decorations.filter((d) => d !== decoration));
    } else {
      onDecorationsChange([...decorations, decoration]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <span className="text-[#5B3F2F]/60">Étape 4 / 6</span>
          </div>
          <h1 className="text-[#5B3F2F] mb-4">Personnalisez les décorations</h1>
          <p className="text-[#5B3F2F]/70">Ajoutez un message et choisissez vos décorations préférées</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Decorations Selection */}
          <div className="space-y-8">
            {/* Text Input */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-[#5B3F2F] mb-4">Texte sur le gâteau</h3>
              <input
                type="text"
                value={cakeText}
                onChange={(e) => onTextChange(e.target.value)}
                placeholder="Ex: Joyeux Anniversaire Marie !"
                maxLength={30}
                className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-[#F9E6E8] focus:border-[#F8D78A] outline-none text-[#5B3F2F] transition-all"
              />
              <p className="text-[#5B3F2F]/50 mt-2">{cakeText.length}/30 caractères</p>
            </motion.div>

            {/* Decoration Options */}
            <div>
              <h3 className="text-[#5B3F2F] mb-4">Décorations</h3>
              <div className="grid grid-cols-2 gap-4">
                {decorationOptions.map((decoration, index) => {
                  const isSelected = decorations.includes(decoration.name);

                  return (
                    <motion.div
                      key={decoration.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleDecoration(decoration.name)}
                      className={`relative cursor-pointer rounded-3xl p-6 text-center transition-all ${
                        isSelected
                          ? "bg-gradient-to-br from-[#F9E6E8] to-[#E6F7F2] shadow-2xl ring-4 ring-[#F8D78A]"
                          : "bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl"
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId={`deco-selected-${decoration.name}`}
                          className="absolute inset-0 bg-gradient-to-br from-[#F9E6E8]/30 to-[#E6F7F2]/30 rounded-3xl"
                        />
                      )}

                      <motion.div
                        className="relative"
                        animate={{
                          rotate: isSelected ? [0, -10, 10, 0] : 0,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                      >
                        <div className="text-5xl mb-2">{decoration.emoji}</div>
                        <h4 className="text-[#5B3F2F] mb-1">{decoration.name}</h4>
                        <p className="text-[#5B3F2F]/60">{decoration.description}</p>
                      </motion.div>

                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 bg-[#F8D78A] rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10"
                        >
                          <span>✓</span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Photo Upload Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center"
            >
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-[#5B3F2F] mb-2">Design personnalisé ?</h3>
              <p className="text-[#5B3F2F]/70 mb-4">
                Envoyez-nous votre image par WhatsApp ou email
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] rounded-2xl text-[#5B3F2F] hover:shadow-lg transition-all">
                Contactez-nous
              </button>
            </motion.div>
          </div>

          {/* Cake Preview */}
          <div className="flex justify-center items-start">
            <CakePreview
              cakeType={cakeType}
              size={size}
              flavors={flavors}
              text={cakeText}
              decorations={decorations}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mt-12"
        >
          <motion.button
            onClick={onBack}
            className="px-12 py-4 rounded-full bg-white/60 backdrop-blur-md text-[#5B3F2F] shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Retour
          </motion.button>
          <motion.button
            onClick={onNext}
            className="px-12 py-4 rounded-full bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continuer →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
