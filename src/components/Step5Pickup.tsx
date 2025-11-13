import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, Mail } from "lucide-react";

interface Step5Props {
  pickupDate: string;
  pickupTime: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  onPickupDateChange: (date: string) => void;
  onPickupTimeChange: (time: string) => void;
  onCustomerNameChange: (name: string) => void;
  onCustomerPhoneChange: (phone: string) => void;
  onCustomerEmailChange: (email: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step5Pickup({
  pickupDate,
  pickupTime,
  customerName,
  customerPhone,
  customerEmail,
  onPickupDateChange,
  onPickupTimeChange,
  onCustomerNameChange,
  onCustomerPhoneChange,
  onCustomerEmailChange,
  onNext,
  onBack,
}: Step5Props) {
  const isFormValid = pickupDate && pickupTime && customerName && customerPhone;

  // Generate time slots
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full mb-4">
            <span className="text-[#5B3F2F]/60">Étape 5 / 6</span>
          </div>
          <h1 className="text-[#5B3F2F] mb-4">Détails de retrait</h1>
          <p className="text-[#5B3F2F]/70">Quand souhaitez-vous récupérer votre gâteau ?</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl space-y-6"
        >
          {/* Date Picker */}
          <div>
            <label className="flex items-center gap-2 text-[#5B3F2F] mb-3">
              <Calendar className="w-5 h-5 text-[#F8D78A]" />
              Date de retrait *
            </label>
            <input
              type="date"
              value={pickupDate}
              onChange={(e) => onPickupDateChange(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-[#F9E6E8] focus:border-[#F8D78A] outline-none text-[#5B3F2F] transition-all"
            />
          </div>

          {/* Time Picker */}
          <div>
            <label className="flex items-center gap-2 text-[#5B3F2F] mb-3">
              <Clock className="w-5 h-5 text-[#F8D78A]" />
              Heure de retrait *
            </label>
            <select
              value={pickupTime}
              onChange={(e) => onPickupTimeChange(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-[#F9E6E8] focus:border-[#F8D78A] outline-none text-[#5B3F2F] transition-all"
            >
              <option value="">Sélectionnez une heure</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <div className="border-t-2 border-[#F9E6E8]/50 pt-6">
            <h3 className="text-[#5B3F2F] mb-4">Vos coordonnées</h3>

            {/* Customer Name */}
            <div className="mb-4">
              <label className="flex items-center gap-2 text-[#5B3F2F] mb-3">
                <User className="w-5 h-5 text-[#F8D78A]" />
                Nom complet *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => onCustomerNameChange(e.target.value)}
                placeholder="Ex: Marie Dupont"
                className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-[#F9E6E8] focus:border-[#F8D78A] outline-none text-[#5B3F2F] transition-all"
              />
            </div>

            {/* Customer Phone */}
            <div className="mb-4">
              <label className="flex items-center gap-2 text-[#5B3F2F] mb-3">
                <Phone className="w-5 h-5 text-[#F8D78A]" />
                Téléphone *
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => onCustomerPhoneChange(e.target.value)}
                placeholder="Ex: +216 12 345 678"
                className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-[#F9E6E8] focus:border-[#F8D78A] outline-none text-[#5B3F2F] transition-all"
              />
            </div>

            {/* Customer Email */}
            <div>
              <label className="flex items-center gap-2 text-[#5B3F2F] mb-3">
                <Mail className="w-5 h-5 text-[#F8D78A]" />
                Email (optionnel)
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => onCustomerEmailChange(e.target.value)}
                placeholder="Ex: marie@exemple.com"
                className="w-full px-6 py-4 rounded-2xl bg-white/80 border-2 border-[#F9E6E8] focus:border-[#F8D78A] outline-none text-[#5B3F2F] transition-all"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-[#E6F7F2]/50 to-[#F9E6E8]/50 rounded-2xl p-4 text-center"
          >
            <p className="text-[#5B3F2F]/70">
              📍 Adresse de retrait: Mio Pâtisserie, Tunis
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mt-8"
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
            disabled={!isFormValid}
            className={`px-12 py-4 rounded-full shadow-xl transition-all ${
              isFormValid
                ? "bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] hover:shadow-2xl"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            whileHover={isFormValid ? { scale: 1.05 } : {}}
            whileTap={isFormValid ? { scale: 0.95 } : {}}
          >
            Continuer →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
