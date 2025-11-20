import { products } from "../data/products";
import { CartItem } from "./CheckoutScreen";
import mioLogo from "figma:asset/e95f8812b22c4b87802eaba1828ecb1c4c09194b.png";

interface TicketScreenProps {
  cart: CartItem[];
  onRestart: () => void;
}

export function TicketScreen({ cart, onRestart }: TicketScreenProps) {
  const cartWithDetails = cart.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  const total = cartWithDetails.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const now = new Date();
  const dateStr = now.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFE8E0] to-[#F5E8DD] p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full">
        {/* Ticket Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={mioLogo} alt="Mio Pâtisserie" className="w-48 h-48 object-contain" />
          </div>

          {/* Header */}
          <div className="text-center mb-8 pb-8 border-b-2 border-dashed border-[#F5E8DD]">
            <h2 className="text-[#8B6F5C] text-3xl mb-4">Ticket de Caisse</h2>
            <div className="text-[#D4958C] text-lg space-y-1">
              <p>Date: {dateStr}</p>
              <p>Heure: {timeStr}</p>
            </div>
          </div>

          {/* Items */}
          <div className="mb-8 space-y-4">
            {cartWithDetails.map((item) => (
              <div key={item.productId} className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-[#8B6F5C] text-lg">{item.product.name}</p>
                  <p className="text-[#D4958C] text-sm">
                    {item.quantity} x {item.product.price.toFixed(3)} DT
                  </p>
                </div>
                <p className="text-[#8B6F5C] text-lg">
                  {(item.product.price * item.quantity).toFixed(3)} DT
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="pt-8 border-t-2 border-dashed border-[#F5E8DD]">
            <div className="flex justify-between items-center mb-8">
              <span className="text-[#8B6F5C] text-3xl">TOTAL</span>
              <span className="text-[#D4958C] text-4xl">
                {total.toFixed(3)} DT
              </span>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center pt-8 border-t-2 border-dashed border-[#F5E8DD]">
            <p className="text-[#D4958C] text-xl">
              Merci pour votre commande ❤️
            </p>
            <p className="text-[#8B6F5C] text-sm mt-2">
              À très bientôt chez Mio Pâtisserie
            </p>
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="w-full py-8 bg-gradient-to-r from-[#D4958C] to-[#E9B5AB] text-white text-3xl rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
        >
          Recommencer une commande
        </button>
      </div>
    </div>
  );
}
