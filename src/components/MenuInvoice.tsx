import { motion } from "motion/react";
import { Check, Download, Home, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface MenuInvoiceProps {
  cart: CartItem[];
  paymentMethod: string;
  onNewOrder: () => void;
  onBackToHome: () => void;
}

export function MenuInvoice({ cart, paymentMethod, onNewOrder, onBackToHome }: MenuInvoiceProps) {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string }>>([]);
  const orderNumber = Math.floor(100 + Math.random() * 900);

  useEffect(() => {
    const confettiColors = ["#F9E6E8", "#E6F7F2", "#F8D78A", "#FF6B9D", "#A8D5BA"];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    }));
    setConfetti(newConfetti);
  }, []);

  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const currentDate = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
          }}
          initial={{ y: -100, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: [1, 1, 0],
            rotate: 360 * 3,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 0.5,
            ease: "easeIn",
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 bg-gradient-to-br from-[#F9E6E8] to-[#E6F7F2] rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                boxShadow: [
                  "0 20px 60px rgba(248, 215, 138, 0.3)",
                  "0 20px 60px rgba(248, 215, 138, 0.6)",
                  "0 20px 60px rgba(248, 215, 138, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Check className="w-16 h-16 text-[#F8D78A]" strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-[#5B3F2F] mb-4">✅ Commande confirmée !</h1>
          <p className="text-[#5B3F2F]/70 mb-8">
            Merci pour votre commande ! Voici votre facture.
          </p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block bg-white/60 backdrop-blur-md px-8 py-4 rounded-full shadow-xl"
          >
            <span className="text-[#5B3F2F]">Commande N° </span>
            <span className="text-[#F8D78A]">#{orderNumber}</span>
          </motion.div>
        </motion.div>

        {/* Invoice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-2xl mb-8"
        >
          {/* Invoice Header */}
          <div className="border-b-2 border-[#F9E6E8] pb-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-[#5B3F2F] mb-2">Mio Pâtisserie</h2>
                <p className="text-[#5B3F2F]/70">Tunis, Tunisia</p>
                <p className="text-[#5B3F2F]/70">contact@mio-patisserie.tn</p>
              </div>
              <div className="text-right">
                <p className="text-[#5B3F2F]">Facture N° #{orderNumber}</p>
                <p className="text-[#5B3F2F]/70">{currentDate}</p>
                <p className="text-[#5B3F2F]/70">{currentTime}</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mb-6">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#F9E6E8]">
                  <th className="text-left text-[#5B3F2F] pb-3">Article</th>
                  <th className="text-center text-[#5B3F2F] pb-3">Qté</th>
                  <th className="text-right text-[#5B3F2F] pb-3">Prix unitaire</th>
                  <th className="text-right text-[#5B3F2F] pb-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-[#F9E6E8]">
                    <td className="text-[#5B3F2F] py-3">{item.name}</td>
                    <td className="text-center text-[#5B3F2F] py-3">{item.quantity}</td>
                    <td className="text-right text-[#5B3F2F] py-3">{item.price} TND</td>
                    <td className="text-right text-[#5B3F2F] py-3">
                      {item.price * item.quantity} TND
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="border-t-2 border-[#F9E6E8] pt-4 space-y-2">
            <div className="flex justify-between text-[#5B3F2F]">
              <span>Sous-total ({getTotalItems()} articles)</span>
              <span>{getTotalPrice()} TND</span>
            </div>
            <div className="flex justify-between text-[#5B3F2F]">
              <span>TVA (0%)</span>
              <span>0.00 TND</span>
            </div>
            <div className="flex justify-between text-[#5B3F2F] pt-2 border-t border-[#F9E6E8]">
              <span>Total</span>
              <span className="text-[#F8D78A]">{getTotalPrice()} TND</span>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6 pt-6 border-t-2 border-[#F9E6E8]">
            <div className="flex justify-between items-center">
              <span className="text-[#5B3F2F]/70">Mode de paiement:</span>
              <span className="text-[#5B3F2F]">
                {paymentMethod === "online" ? "Paiement en ligne 💳" : "Paiement au retrait 💵"}
              </span>
            </div>
            {paymentMethod === "online" && (
              <div className="mt-2 text-[#5B3F2F]/70">
                <span className="text-green-600">✓</span> Payé
              </div>
            )}
            {paymentMethod === "onpickup" && (
              <div className="mt-2 text-[#5B3F2F]/70">
                ⏳ À payer au retrait
              </div>
            )}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-[#E6F7F2]/50 to-[#F9E6E8]/50 rounded-3xl p-6 mb-8 text-center"
        >
          <h3 className="text-[#5B3F2F] mb-4">Prochaines étapes</h3>
          <div className="space-y-2 text-[#5B3F2F]/70">
            <p>📧 Vous recevrez une confirmation par email</p>
            <p>📱 Nous vous contacterons pour confirmer la date de retrait</p>
            <p>📍 Adresse: Mio Pâtisserie, Tunis</p>
            <p>🎂 Votre commande sera préparée fraîche</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <motion.button
            onClick={() => window.print()}
            className="px-8 py-4 rounded-full bg-white/60 backdrop-blur-md text-[#5B3F2F] shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Télécharger la facture
          </motion.button>
          <motion.button
            onClick={onBackToHome}
            className="px-8 py-4 rounded-full bg-white/60 backdrop-blur-md text-[#5B3F2F] shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="w-5 h-5" />
            Retour à l'accueil
          </motion.button>
          <motion.button
            onClick={onNewOrder}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-5 h-5" />
            Nouvelle commande
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
