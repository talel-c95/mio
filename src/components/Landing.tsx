import { motion } from "motion/react";
import { FloatingElements } from "./FloatingElements";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Heart, Award, ArrowRight } from "lucide-react";

interface LandingProps {
  onStartOrder: () => void;
  onViewMenu: () => void;
}

const galleryImages = [
  "https://images.unsplash.com/photo-1640794334523-b299f14d28db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiaXJ0aGRheSUyMGNha2V8ZW58MXx8fHwxNzYyOTcyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2VkZGluZyUyMGNha2V8ZW58MXx8fHwxNzYyOTcyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1555526148-0fa555bb2e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1cGNha2VzfGVufDF8fHx8MTc2Mjk0NjIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1647544301380-ce14771bd42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHRhcnQlMjBwYXN0cnl8ZW58MXx8fHwxNzYyODcxODM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzYyOTQyNzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1452130200010-cdd9424b1729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9ucyUyMHBhc3RyeXxlbnwxfHx8fDE3NjI5NDA0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1558234469-50fc184d1cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NjI5NzIxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1741244133042-970251e76066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFzdHJ5JTIwZGVzc2VydHxlbnwxfHx8fDE3NjI5NzIxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
];

export function Landing({ onStartOrder, onViewMenu }: LandingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <FloatingElements />
        
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[#5B3F2F] mb-6">
              Bienvenue chez Mio 🍰
            </h1>
            <p className="text-[#5B3F2F]/70 mb-12 max-w-2xl mx-auto">
              Créez votre gâteau de rêve en quelques clics. Personnalisez chaque détail pour un moment inoubliable.
            </p>

            {/* Central rotating cake emoji */}
            <motion.div
              className="text-9xl mb-12"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              🎂
            </motion.div>

            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                onClick={onStartOrder}
                className="bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Créez votre gâteau
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={onViewMenu}
                className="bg-white/50 backdrop-blur-sm text-[#5B3F2F] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-white/80"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir notre menu
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#5B3F2F] mb-4">L'art de la pâtisserie tunisienne</h2>
            <p className="text-[#5B3F2F]/70 max-w-2xl mx-auto">
              Chez Mio, chaque création est une œuvre d'art gourmande, confectionnée avec passion et des ingrédients premium pour célébrer vos moments précieux.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Artisanat local",
                description: "Fait main avec amour à Tunis",
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Ingrédients premium",
                description: "Sélection des meilleurs produits",
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Personnalisation sur mesure",
                description: "Créez votre gâteau unique",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md rounded-3xl p-8 text-center shadow-xl border border-white/50"
              >
                <div className="text-[#F8D78A] mb-4 flex justify-center">{card.icon}</div>
                <h3 className="text-[#5B3F2F] mb-3">{card.title}</h3>
                <p className="text-[#5B3F2F]/70">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#5B3F2F] mb-4">Comment ça marche ?</h2>
            <p className="text-[#5B3F2F]/70">6 étapes simples vers votre gâteau parfait</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: "🎂", step: "Type de gâteau" },
              { emoji: "📏", step: "Taille" },
              { emoji: "🍫", step: "Saveurs" },
              { emoji: "✨", step: "Décorations" },
              { emoji: "📅", step: "Retrait" },
              { emoji: "💳", step: "Paiement" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 text-center shadow-lg"
              >
                <div className="text-6xl mb-3">{item.emoji}</div>
                <p className="text-[#5B3F2F]">{item.step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[#5B3F2F] mb-4">Nos créations préférées 🎂</h2>
            <p className="text-[#5B3F2F]/70">Découvrez quelques-unes de nos plus belles réalisations</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                className="rounded-3xl overflow-hidden shadow-xl aspect-square"
                style={{ transformStyle: "preserve-3d" }}
              >
                <ImageWithFallback
                  src={image}
                  alt={`Création Mio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#5B3F2F] mb-6">Prêt à créer votre gâteau ?</h2>
            <p className="text-[#5B3F2F]/70 mb-12">
              Lancez-vous dans l'aventure et concevez le gâteau de vos rêves en quelques minutes.
            </p>
            <motion.button
              onClick={onStartOrder}
              className="bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer maintenant
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#5B3F2F] text-white/80">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <h3 className="text-white">Mio Pâtisserie</h3>
          <p>📍 Tunis, Tunisia</p>
          <p>📧 contact@mio-patisserie.tn</p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="https://instagram.com/mio_tunisie" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              @mio_tunisie
            </a>
          </div>
          <p className="text-sm pt-4">© 2025 Mio Pâtisserie. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
