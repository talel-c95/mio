import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface MenuProps {
  onBack: () => void;
  onCheckout: (items: CartItem[]) => void;
}

const menuItems: MenuItem[] = [
  // Cakes
  { id: "cake1", name: "Strawberry Shortcake", description: "Gâteau moelleux aux fraises fraîches avec crème légère", price: 45, image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc2hvcnRjYWtlfGVufDF8fHx8MTc2MzAyOTU0NHww&ixlib=rb-4.1.0&q=80&w=1080", category: "Cakes" },
  { id: "cake2", name: "Chocolate Truffle Cake", description: "Riche gâteau au chocolat avec ganache crémeuse", price: 50, image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlJTIwY2FrZXxlbnwxfHx8fDE3NjMwMjk1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080", category: "Cakes" },
  { id: "cake3", name: "Red Velvet Cake", description: "Gâteau rouge velouté avec glaçage cream cheese", price: 48, image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB2ZWx2ZXQlMjBjYWtlfGVufDF8fHx8MTc2Mjk3NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080", category: "Cakes" },
  { id: "cake4", name: "Lemon Drizzle Cake", description: "Gâteau citronné avec glaçage au citron", price: 42, image: "https://images.unsplash.com/photo-1543508185-225c92847541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRhcnR8ZW58MXx8fHwxNzYzMDA1MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080", category: "Cakes" },
  { id: "cake5", name: "Black Forest Cake", description: "Gâteau au chocolat avec cerises et crème fouettée", price: 52, image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlJTIwY2FrZXxlbnwxfHx8fDE3NjMwMjk1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080", category: "Cakes" },
  { id: "cake6", name: "Tiramisu", description: "Classique italien au café et mascarpone", price: 46, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400", category: "Cakes" },
  { id: "cake7", name: "Carrot Cake", description: "Gâteau aux carottes avec noix et cream cheese", price: 44, image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400", category: "Cakes" },
  { id: "cake8", name: "Cheesecake", description: "Cheesecake crémeux sur base biscuit", price: 48, image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400", category: "Cakes" },
  { id: "cake9", name: "Opera Cake", description: "Gâteau français au café et chocolat", price: 55, image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?w=400", category: "Cakes" },
  { id: "cake10", name: "Matcha Mousse Cake", description: "Mousse légère au thé vert japonais", price: 49, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400", category: "Cakes" },

  // Pastries
  { id: "pastry1", name: "Croissant", description: "Croissant au beurre feuilleté croustillant", price: 8, image: "https://images.unsplash.com/photo-1712723247648-64a03ba7c333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnQlMjBwYXN0cnl8ZW58MXx8fHwxNzYzMDI5NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080", category: "Pastries" },
  { id: "pastry2", name: "Pain au Chocolat", description: "Viennoiserie feuilletée au chocolat", price: 9, image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=400", category: "Pastries" },
  { id: "pastry3", name: "Almond Croissant", description: "Croissant fourré à la crème d'amandes", price: 10, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400", category: "Pastries" },
  { id: "pastry4", name: "Apple Turnover", description: "Chausson feuilleté aux pommes caramélisées", price: 9, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", category: "Pastries" },
  { id: "pastry5", name: "Danish Pastry", description: "Pâtisserie danoise garnie aux fruits", price: 10, image: "https://images.unsplash.com/photo-1612518919969-54ba21eeb35a?w=400", category: "Pastries" },
  { id: "pastry6", name: "Éclair", description: "Éclair au chocolat avec crème pâtissière", price: 12, image: "https://images.unsplash.com/photo-1616534900864-45d0da88d9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBlY2xhaXJ8ZW58MXx8fHwxNzYzMDI5NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080", category: "Pastries" },
  { id: "pastry7", name: "Mille-feuille", description: "Feuilleté classique à la crème vanille", price: 13, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400", category: "Pastries" },
  { id: "pastry8", name: "Chausson aux Pommes", description: "Chausson traditionnel aux pommes", price: 9, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400", category: "Pastries" },
  { id: "pastry9", name: "Cinnamon Roll", description: "Roulé à la cannelle avec glaçage", price: 10, image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400", category: "Pastries" },
  { id: "pastry10", name: "Kouign-Amann", description: "Pâtisserie bretonne au beurre caramélisé", price: 11, image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400", category: "Pastries" },

  // Cookies & Biscuits
  { id: "cookie1", name: "Butter Cookies", description: "Biscuits au beurre fondants", price: 15, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400", category: "Cookies" },
  { id: "cookie2", name: "Chocolate Chip Cookies", description: "Cookies aux pépites de chocolat", price: 16, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400", category: "Cookies" },
  { id: "cookie3", name: "Macarons", description: "Macarons français aux saveurs variées (boîte de 6)", price: 25, image: "https://images.unsplash.com/photo-1732393157398-daaf2efd2f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYWNhcm9uc3xlbnwxfHx8fDE3NjMwMjk1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080", category: "Cookies" },
  { id: "cookie4", name: "Madeleines", description: "Petites madeleines moelleuses", price: 18, image: "https://images.unsplash.com/photo-1624288723235-34c5f1bcb0ec?w=400", category: "Cookies" },
  { id: "cookie5", name: "Sablés Bretons", description: "Biscuits bretons au beurre salé", price: 17, image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400", category: "Cookies" },
  { id: "cookie6", name: "Biscotti", description: "Biscuits italiens croquants", price: 16, image: "https://images.unsplash.com/photo-1626200692775-b59f620be0c6?w=400", category: "Cookies" },
  { id: "cookie7", name: "Oatmeal Raisin Cookies", description: "Cookies à l'avoine et raisins secs", price: 15, image: "https://images.unsplash.com/photo-1603741283089-43fa50c86f06?w=400", category: "Cookies" },
  { id: "cookie8", name: "Shortbread", description: "Sablés écossais pur beurre", price: 16, image: "https://images.unsplash.com/photo-1595584464049-84b6a23e2194?w=400", category: "Cookies" },
  { id: "cookie9", name: "Financiers", description: "Petits gâteaux aux amandes", price: 20, image: "https://images.unsplash.com/photo-1634751267073-37f37e7ff7ec?w=400", category: "Cookies" },
  { id: "cookie10", name: "Florentines", description: "Biscuits aux amandes et chocolat", price: 22, image: "https://images.unsplash.com/photo-1606313564110-5d1bbb3c6e2e?w=400", category: "Cookies" },

  // Tarts
  { id: "tart1", name: "Lemon Tart", description: "Tarte au citron meringuée", price: 38, image: "https://images.unsplash.com/photo-1543508185-225c92847541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRhcnR8ZW58MXx8fHwxNzYzMDA1MDgxfDA&ixlib=rb-4.1.0&q=80&w=1080", category: "Tarts" },
  { id: "tart2", name: "Fruit Tart", description: "Tarte aux fruits frais de saison", price: 42, image: "https://images.unsplash.com/photo-1647544301380-ce14771bd42f?w=400", category: "Tarts" },
  { id: "tart3", name: "Chocolate Tart", description: "Tarte au chocolat noir intense", price: 40, image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?w=400", category: "Tarts" },
  { id: "tart4", name: "Raspberry Tart", description: "Tarte aux framboises et crème pâtissière", price: 44, image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400", category: "Tarts" },
  { id: "tart5", name: "Caramel Tart", description: "Tarte au caramel beurre salé", price: 40, image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400", category: "Tarts" },
  { id: "tart6", name: "Pistachio Tart", description: "Tarte à la crème de pistache", price: 45, image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400", category: "Tarts" },

  // Others / Specials
  { id: "other1", name: "Profiteroles", description: "Choux à la crème glacée et sauce chocolat", price: 28, image: "https://images.unsplash.com/photo-1761637588199-ecd32fea8325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maXRlcm9sZXMlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzAyOTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080", category: "Others" },
  { id: "other2", name: "Cream Puffs", description: "Choux à la crème pâtissière", price: 25, image: "https://images.unsplash.com/photo-1612201142855-969b29ba035e?w=400", category: "Others" },
  { id: "other3", name: "Mousse au Chocolat", description: "Mousse onctueuse au chocolat noir", price: 22, image: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400", category: "Others" },
  { id: "other4", name: "Crème Brûlée", description: "Crème vanille avec croûte caramélisée", price: 24, image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400", category: "Others" },
  { id: "other5", name: "Choux à la Crème", description: "Choux garni de crème fouettée", price: 20, image: "https://images.unsplash.com/photo-1612201142855-969b29ba035e?w=400", category: "Others" },
  { id: "other6", name: "Parfait", description: "Parfait glacé multicouche", price: 26, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400", category: "Others" },
  { id: "other7", name: "Panna Cotta", description: "Panna cotta vanille avec coulis de fruits", price: 23, image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400", category: "Others" },
];

export function Menu({ onBack, onCheckout }: MenuProps) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const categories = ["Cakes", "Pastries", "Cookies", "Tarts", "Others"];
  const categoryEmojis: Record<string, string> = {
    Cakes: "🧁",
    Pastries: "🥐",
    Cookies: "🍪",
    Tarts: "🥧",
    Others: "🍫",
  };

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== itemId);
    });
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  const getTotalPrice = () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getItemQuantity = (itemId: string) => {
    const item = cart.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F9E6E8] to-[#E6F7F2]">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b-2 border-[#F9E6E8]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-[#5B3F2F] hover:text-[#F8D78A] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </motion.button>

          <h1 className="text-[#5B3F2F]">Notre Menu</h1>

          <motion.button
            onClick={() => cart.length > 0 && onCheckout(cart)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              cart.length > 0
                ? "bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            whileHover={cart.length > 0 ? { scale: 1.05 } : {}}
            whileTap={cart.length > 0 ? { scale: 0.95 } : {}}
            disabled={cart.length === 0}
          >
            <ShoppingCart className="w-5 h-5" />
            {cart.length > 0 && (
              <span className="bg-[#F8D78A] text-[#5B3F2F] rounded-full w-6 h-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </motion.button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((category) => {
          const items = menuItems.filter((item) => item.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="text-6xl">{categoryEmojis[category]}</span>
                <h2 className="text-[#5B3F2F]">{category}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => {
                  const quantity = getItemQuantity(item.id);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-[#5B3F2F] mb-2">{item.name}</h3>
                        <p className="text-[#5B3F2F]/70 mb-4 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-[#F8D78A]">{item.price} TND</span>

                          {quantity === 0 ? (
                            <motion.button
                              onClick={() => addToCart(item)}
                              className="bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Plus className="w-4 h-4" />
                              Ajouter
                            </motion.button>
                          ) : (
                            <div className="flex items-center gap-3 bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] rounded-full px-4 py-2 shadow-md">
                              <motion.button
                                onClick={() => removeFromCart(item.id)}
                                className="text-[#5B3F2F] hover:text-[#F8D78A]"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Minus className="w-4 h-4" />
                              </motion.button>
                              <span className="text-[#5B3F2F] min-w-[20px] text-center">
                                {quantity}
                              </span>
                              <motion.button
                                onClick={() => addToCart(item)}
                                className="text-[#5B3F2F] hover:text-[#F8D78A]"
                                whileTap={{ scale: 0.9 }}
                              >
                                <Plus className="w-4 h-4" />
                              </motion.button>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Cart Summary */}
      {cart.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl px-8 py-4 flex items-center gap-6"
        >
          <div className="text-[#5B3F2F]">
            <span className="opacity-70">Total: </span>
            <span className="text-[#F8D78A]">{getTotalPrice()} TND</span>
          </div>
          <motion.button
            onClick={() => onCheckout(cart)}
            className="bg-gradient-to-r from-[#F9E6E8] to-[#E6F7F2] text-[#5B3F2F] px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commander ({getTotalItems()})
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
