import { motion } from "motion/react";
import { CakePreview } from "./CakePreview";

interface Step3Props {
  cakeType: string;
  size: number;
  selectedFlavors: string[];
  onSelect: (flavors: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

const flavors = [
  { name: "Chocolate", emoji: "🍫", color: "#5B3F2F" },
  { name: "Vanilla", emoji: "🤍", color: "#FFF8F0" },
  { name: "Framboise", emoji: "🍓", color: "#FF6B9D" },
  { name: "Pistachio", emoji: "🥜", color: "#A8D5BA" },
  { name: "Caramel", emoji: "🍯", color: "#F8D78A" },
  { name: "Mix", emoji: "🌈", color: "linear-gradient(135deg, #5B3F2F, #FF6B9D, #A8D5BA)" },
];

export function Step3Flavors({ cakeType, size, selectedFlavors, onSelect, onNext, onBack }: Step3Props) {
  const toggleFlavor = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      onSelect(selectedFlavors.filter((f) => f !== flavor));
    } else {
      if (selectedFlavors.length < 3) {
        onSelect([...selectedFlavors, flavor]);
      }
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
            <span className="text-[#5B3F2F]/60">Étape 3 / 6</span>
          </div>
          <h1 className="text-[#5B3F2F] mb-4">Choisissez vos saveurs</h1>
          <p className="text-[#5B3F2F]/70">
            Sélectionnez jusqu'à 3 saveurs pour créer vos couches de gâteau
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Flavor Selection */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {flavors.map((flavor, index) => {
                const isSelected = selectedFlavors.includes(flavor.name);
                const selectionOrder = selectedFlavors.indexOf(flavor.name) + 1;

                return (
                  <motion.div
                    key={flavor.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleFlavor(flavor.name)}
                    className={`relative cursor-pointer rounded-3xl p-6 text-center transition-all ${
                      isSelected
                        ? "bg-gradient-to-br from-[#F9E6E8] to-[#E6F7F2] shadow-2xl ring-4 ring-[#F8D78A]"
                        : "bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId={`selected-${flavor.name}`}
                        className="absolute inset-0 bg-gradient-to-br from-[#F9E6E8]/30 to-[#E6F7F2]/30 rounded-3xl"
                      />
                    )}

                    <motion.div
                      className="relative"
                      animate={{
                        y: isSelected ? [-10, 0, -10] : 0,
                        rotate: isSelected ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="text-6xl mb-3">{flavor.emoji}</div>
                      <h3 className="text-[#5B3F2F]">{flavor.name}</h3>
                    </motion.div>

                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-3 -right-3 bg-[#F8D78A] rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10"
                      >
                        <span className="text-xl">{selectionOrder}</span>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {selectedFlavors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 text-center"
              >
                <p className="text-[#5B3F2F]/70">
                  {selectedFlavors.length === 1 && "Ajoutez une ou deux saveurs supplémentaires"}
                  {selectedFlavors.length === 2 && "Vous pouvez ajouter une saveur de plus"}
                  {selectedFlavors.length === 3 && "Parfait ! Vos 3 couches sont sélectionnées"}
                </p>
              </motion.div>
            )}
          </div>

          {/* Cake Preview */}
          <div className="flex justify-center items-start">
            <CakePreview
              cakeType={cakeType}
              size={size}
              flavors={selectedFlavors}
              text=""
              decorations={[]}
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
            disabled={selectedFlavors.length === 0}
            className={`px-12 py-4 rounded-full shadow-xl transition-all ${
              selectedFlavors.length > 0
                ? "bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] hover:shadow-2xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={selectedFlavors.length > 0 ? { scale: 1.05 } : {}}
            whileTap={selectedFlavors.length > 0 ? { scale: 0.95 } : {}}
          >
            Continuer →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
