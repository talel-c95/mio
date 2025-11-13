import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Check, Home, RefreshCw } from "lucide-react";

interface Step7Props {
  orderDetails: {
    cakeType: string;
    size: number;
    flavors: string[];
    text: string;
    decorations: string[];
    pickupDate: string;
    pickupTime: string;
    customerName: string;
    paymentMethod: string;
  };
  onNewOrder: () => void;
  onBackToHome: () => void;
}

export function Step7Confirmation({ orderDetails, onNewOrder, onBackToHome }: Step7Props) {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; color: string }>>([]);
  const orderNumber = Math.floor(100 + Math.random() * 900);

  useEffect(() => {
    // Generate confetti
    const confettiColors = ["#F9E6E8", "#E6F7F2", "#F8D78A", "#FF6B9D", "#A8D5BA"];
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6 relative overflow-hidden">
      {/* Confetti Animation */}
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

      {/* Balloons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`balloon-${i}`}
          className="absolute text-6xl"
          style={{
            left: `${10 + i * 15}%`,
            bottom: -100,
          }}
          animate={{
            y: [-100, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 100],
            rotate: [0, (Math.random() - 0.5) * 20],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        >
          🎈
        </motion.div>
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
            <motion.div
              className="absolute inset-0 bg-[#F8D78A] rounded-full"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
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
            Merci {orderDetails.customerName} ! Votre gâteau sera prêt à l'heure prévue.
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

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl mb-8"
        >
          <h2 className="text-[#5B3F2F] mb-6 text-center">Récapitulatif de votre commande</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[#F9E6E8]">
              <span className="text-[#5B3F2F]/70">Type de gâteau</span>
              <span className="text-[#5B3F2F]">{orderDetails.cakeType}</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-[#F9E6E8]">
              <span className="text-[#5B3F2F]/70">Taille</span>
              <span className="text-[#5B3F2F]">{orderDetails.size} cm</span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-[#F9E6E8]">
              <span className="text-[#5B3F2F]/70">Saveurs</span>
              <span className="text-[#5B3F2F]">{orderDetails.flavors.join(", ")}</span>
            </div>
            
            {orderDetails.text && (
              <div className="flex justify-between items-center pb-4 border-b border-[#F9E6E8]">
                <span className="text-[#5B3F2F]/70">Texte</span>
                <span className="text-[#5B3F2F] italic">"{orderDetails.text}"</span>
              </div>
            )}
            
            {orderDetails.decorations.length > 0 && (
              <div className="flex justify-between items-center pb-4 border-b border-[#F9E6E8]">
                <span className="text-[#5B3F2F]/70">Décorations</span>
                <span className="text-[#5B3F2F]">{orderDetails.decorations.join(", ")}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center pb-4 border-b border-[#F9E6E8]">
              <span className="text-[#5B3F2F]/70">Date de retrait</span>
              <span className="text-[#5B3F2F]">
                {new Date(orderDetails.pickupDate).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            
            <div className="flex justify-between items-center pb-4 border-b border-[#F9E6E8]">
              <span className="text-[#5B3F2F]/70">Heure de retrait</span>
              <span className="text-[#5B3F2F]">{orderDetails.pickupTime}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[#5B3F2F]/70">Paiement</span>
              <span className="text-[#5B3F2F]">
                {orderDetails.paymentMethod === "online" ? "En ligne 💳" : "Au retrait 💵"}
              </span>
            </div>
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
            <p>📧 Vous recevrez une confirmation par email (si fourni)</p>
            <p>📱 Nous vous enverrons un SMS de rappel la veille</p>
            <p>📍 Adresse: Mio Pâtisserie, Tunis</p>
            <p>🎂 Votre gâteau sera prêt à l'heure indiquée</p>
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

        {/* Sparkles */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-6xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-6xl"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🌟
        </motion.div>
      </div>
    </div>
  );
}
