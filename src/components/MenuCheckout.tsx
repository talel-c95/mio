import { motion } from "motion/react";
import { CreditCard, Wallet, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface MenuCheckoutProps {
  cart: CartItem[];
  onBack: () => void;
  onConfirm: (paymentMethod: string) => void;
}

export function MenuCheckout({ cart, onBack, onConfirm }: MenuCheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState("");

  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  const paymentOptions = [
    {
      method: "online",
      title: "Payez maintenant",
      icon: <CreditCard className="w-12 h-12" />,
      emoji: "💳",
      description: "Paiement en ligne sécurisé",
    },
    {
      method: "onpickup",
      title: "Payer au retrait",
      icon: <Wallet className="w-12 h-12" />,
      emoji: "💵",
      description: "Cash ou carte au retrait",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-[#5B3F2F] hover:text-[#F8D78A] mb-8 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          Retour au menu
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-[#5B3F2F] mb-4">Finaliser la commande</h1>
          <p className="text-[#5B3F2F]/70">Vérifiez votre commande et choisissez votre mode de paiement</p>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl mb-8"
        >
          <h2 className="text-[#5B3F2F] mb-6">Votre commande</h2>

          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center pb-4 border-b border-[#F9E6E8] last:border-0"
              >
                <div>
                  <p className="text-[#5B3F2F]">{item.name}</p>
                  <p className="text-[#5B3F2F]/60">Quantité: {item.quantity}</p>
                </div>
                <p className="text-[#5B3F2F]">{item.price * item.quantity} TND</p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-[#F9E6E8] pt-4 flex justify-between items-center">
            <div>
              <p className="text-[#5B3F2F]/70">Total ({getTotalItems()} articles)</p>
            </div>
            <p className="text-[#F8D78A]">{getTotalPrice()} TND</p>
          </div>
        </motion.div>

        {/* Payment Method */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-[#5B3F2F] mb-6 text-center">Mode de paiement</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {paymentOptions.map((option, index) => {
              const isSelected = paymentMethod === option.method;

              return (
                <motion.div
                  key={option.method}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPaymentMethod(option.method)}
                  className={`relative cursor-pointer rounded-3xl p-8 transition-all ${
                    isSelected
                      ? "bg-gradient-to-br from-[#F9E6E8] to-[#E6F7F2] shadow-2xl ring-4 ring-[#F8D78A]"
                      : "bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl"
                  }`}
                >
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
        </motion.div>

        {/* Confirm Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => paymentMethod && onConfirm(paymentMethod)}
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
