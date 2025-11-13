import { motion } from "motion/react";

interface Step2Props {
  selectedSize: number;
  onSelect: (size: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const sizes = [
  { size: 20, people: "6-8 personnes", emoji: "🧁" },
  { size: 25, people: "10-12 personnes", emoji: "🎂" },
  { size: 30, people: "15-20 personnes", emoji: "🍰" },
  { size: 40, people: "30-40 personnes", emoji: "🎊" },
];

export function Step2Size({ selectedSize, onSelect, onNext, onBack }: Step2Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <span className="text-[#5B3F2F]/60">Étape 2 / 6</span>
          </div>
          <h1 className="text-[#5B3F2F] mb-4">Choisissez la taille</h1>
          <p className="text-[#5B3F2F]/70">Sélectionnez la taille qui convient à votre nombre d'invités</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sizes.map((item, index) => {
            const scale = item.size / 25; // Relative to base size

            return (
              <motion.div
                key={item.size}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSelect(item.size)}
                className={`relative cursor-pointer rounded-3xl p-8 text-center transition-all ${
                  selectedSize === item.size
                    ? "bg-gradient-to-br from-[#F9E6E8] to-[#E6F7F2] shadow-2xl ring-4 ring-[#F8D78A]"
                    : "bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl"
                }`}
              >
                {selectedSize === item.size && (
                  <motion.div
                    layoutId="selected"
                    className="absolute inset-0 bg-gradient-to-br from-[#F9E6E8]/30 to-[#E6F7F2]/30 rounded-3xl"
                  />
                )}

                <motion.div
                  className="relative mb-6 flex justify-center items-end"
                  style={{ height: 140 }}
                  animate={{
                    scale: selectedSize === item.size ? 1.1 : 1,
                  }}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    style={{
                      fontSize: `${scale * 80}px`,
                    }}
                    animate={{
                      y: selectedSize === item.size ? [-5, 0, -5] : 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                </motion.div>

                <h3 className="text-[#5B3F2F] mb-2 relative">{item.size} cm</h3>
                <p className="text-[#5B3F2F]/60 relative">{item.people}</p>

                {selectedSize === item.size && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-3 -right-3 bg-[#F8D78A] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-xl">✓</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4"
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
            disabled={!selectedSize}
            className={`px-12 py-4 rounded-full shadow-xl transition-all ${
              selectedSize
                ? "bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] hover:shadow-2xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={selectedSize ? { scale: 1.05 } : {}}
            whileTap={selectedSize ? { scale: 0.95 } : {}}
          >
            Continuer →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
