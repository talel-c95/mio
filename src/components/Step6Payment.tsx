import { motion } from "motion/react";
import { CreditCard, Wallet } from "lucide-react";

interface Step6Props {
  paymentMethod: string;
  onSelect: (method: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step6Payment({ paymentMethod, onSelect, onNext, onBack }: Step6Props) {
  const paymentOptions = [
    {
      method: "online",
      title: "Payez maintenant",
      icon: <CreditCard className="w-12 h-12" />,
      emoji: "💳",
      description: "Paiement en ligne sécurisé par carte bancaire",
      badge: "Recommandé",
    },
    {
      method: "onpickup",
      title: "Payer au retrait",
      icon: <Wallet className="w-12 h-12" />,
      emoji: "💵",
      description: "Cash ou carte au moment du retrait",
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <span className="text-[#5B3F2F]/60">Étape 6 / 6</span>
          </div>
          <h1 className="text-[#5B3F2F] mb-4">Méthode de paiement</h1>
          <p className="text-[#5B3F2F]/70">Comment souhaitez-vous régler votre commande ?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {paymentOptions.map((option, index) => {
            const isSelected = paymentMethod === option.method;

            return (
              <motion.div
                key={option.method}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelect(option.method)}
                className={`relative cursor-pointer rounded-3xl p-8 transition-all ${
                  isSelected
                    ? "bg-gradient-to-br from-[#F9E6E8] to-[#E6F7F2] shadow-2xl ring-4 ring-[#F8D78A]"
                    : "bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl"
                }`}
              >
                {option.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-[#F8D78A] text-[#5B3F2F] px-4 py-1 rounded-full shadow-lg">
                      {option.badge}
                    </div>
                  </div>
                )}

                {isSelected && (
                  <motion.div
                    layoutId="payment-selected"
                    className="absolute inset-0 bg-gradient-to-br from-[#F9E6E8]/30 to-[#E6F7F2]/30 rounded-3xl"
                  />
                )}

                <div className="relative text-center">
                  <motion.div
                    className="text-7xl mb-4"
                    animate={{
                      scale: isSelected ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: isSelected ? Infinity : 0,
                      repeatDelay: 1,
                    }}
                  >
                    {option.emoji}
                  </motion.div>

                  <div className="text-[#F8D78A] mb-4 flex justify-center">
                    {option.icon}
                  </div>

                  <h3 className="text-[#5B3F2F] mb-3">{option.title}</h3>
                  <p className="text-[#5B3F2F]/70">{option.description}</p>

                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-4 -right-4 bg-[#F8D78A] rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                    >
                      <span className="text-2xl">✓</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {paymentMethod === "online" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/60 backdrop-blur-md rounded-3xl p-6 mb-8 text-center"
          >
            <p className="text-[#5B3F2F]/70">
              💡 Vous serez redirigé vers notre page de paiement sécurisée après confirmation
            </p>
          </motion.div>
        )}

        {paymentMethod === "onpickup" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/60 backdrop-blur-md rounded-3xl p-6 mb-8 text-center"
          >
            <p className="text-[#5B3F2F]/70">
              💡 Vous pourrez payer en espèces ou par carte au moment du retrait
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
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
            disabled={!paymentMethod}
            className={`px-12 py-4 rounded-full shadow-xl transition-all ${
              paymentMethod
                ? "bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] hover:shadow-2xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={paymentMethod ? { scale: 1.05 } : {}}
            whileTap={paymentMethod ? { scale: 0.95 } : {}}
          >
            Confirmer la commande
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
