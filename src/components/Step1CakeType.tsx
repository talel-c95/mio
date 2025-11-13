import { motion } from "motion/react";
import { useState } from "react";

interface Step1Props {
  selectedType: string;
  onSelect: (type: string) => void;
  onNext: () => void;
}

const cakeTypes = [
  {
    type: "Gâteau d'anniversaire",
    emoji: "🎉",
    description: "Parfait pour célébrer un anniversaire",
  },
  {
    type: "Gâteau de mariage",
    emoji: "💍",
    description: "Élégant pour votre grand jour",
  },
  {
    type: "Cupcakes",
    emoji: "🧁",
    description: "Délicieux cupcakes assortis",
  },
  {
    type: "Tarte",
    emoji: "🥧",
    description: "Tarte aux fruits frais",
  },
];

export function Step1CakeType({ selectedType, onSelect, onNext }: Step1Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <span className="text-[#5B3F2F]/60">Étape 1 / 6</span>
          </div>
          <h1 className="text-[#5B3F2F] mb-4">Choisissez votre type de gâteau</h1>
          <p className="text-[#5B3F2F]/70">Sélectionnez le type de création qui correspond à votre événement</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {cakeTypes.map((cake, index) => (
            <motion.div
              key={cake.type}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => onSelect(cake.type)}
              className={`relative cursor-pointer rounded-3xl p-8 text-center transition-all ${
                selectedType === cake.type
                  ? "bg-gradient-to-br from-[#F9E6E8] to-[#E6F7F2] shadow-2xl ring-4 ring-[#F8D78A]"
                  : "bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl"
              }`}
            >
              {selectedType === cake.type && (
                <motion.div
                  layoutId="selected"
                  className="absolute inset-0 bg-gradient-to-br from-[#F9E6E8]/30 to-[#E6F7F2]/30 rounded-3xl"
                />
              )}
              
              <motion.div
                className="relative text-8xl mb-4"
                animate={{
                  rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                  scale: selectedType === cake.type ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                {cake.emoji}
              </motion.div>
              
              <h3 className="text-[#5B3F2F] mb-2 relative">{cake.type}</h3>
              <p className="text-[#5B3F2F]/60 relative">{cake.description}</p>
              
              {selectedType === cake.type && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-3 -right-3 bg-[#F8D78A] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">✓</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={onNext}
            disabled={!selectedType}
            className={`px-12 py-4 rounded-full shadow-xl transition-all ${
              selectedType
                ? "bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] hover:shadow-2xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={selectedType ? { scale: 1.05 } : {}}
            whileTap={selectedType ? { scale: 0.95 } : {}}
          >
            Continuer →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
