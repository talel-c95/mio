import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import { products } from "../data/products";

export interface CartItem {
  productId: string;
  quantity: number;
}

interface CheckoutScreenProps {
  cart: CartItem[];
  onBack: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onConfirm: () => void;
}

export function CheckoutScreen({
  cart,
  onBack,
  onUpdateQuantity,
  onRemoveItem,
  onConfirm,
}: CheckoutScreenProps) {
  const cartWithDetails = cart.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  const total = cartWithDetails.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFE8E0] to-[#F5E8DD] p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-3 px-8 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-[#D4958C]"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-xl">Retour</span>
        </button>

        <h1 className="text-5xl text-[#8B6F5C] tracking-wide">
          Votre Commande
        </h1>

        <div className="w-40" />
      </div>

      <div className="max-w-5xl mx-auto">
        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-xl p-16 text-center">
            <p className="text-[#8B6F5C] text-2xl">
              Votre panier est vide
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <div className="space-y-6">
                {cartWithDetails.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center gap-6 pb-6 border-b border-[#F5E8DD] last:border-0"
                  >
                    {/* Image */}
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-32 h-32 object-cover rounded-xl"
                    />

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="text-[#8B6F5C] text-2xl mb-2">
                        {item.product.name}
                      </h3>
                      <p className="text-[#D4958C] text-xl">
                        {item.product.price.toFixed(3)} DT
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.quantity - 1)
                        }
                        className="w-12 h-12 bg-[#F5E8DD] rounded-xl flex items-center justify-center hover:bg-[#E9B5AB] transition-colors"
                      >
                        <Minus className="w-5 h-5 text-[#8B6F5C]" />
                      </button>
                      <span className="text-[#8B6F5C] text-2xl w-12 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.productId, item.quantity + 1)
                        }
                        className="w-12 h-12 bg-[#F5E8DD] rounded-xl flex items-center justify-center hover:bg-[#E9B5AB] transition-colors"
                      >
                        <Plus className="w-5 h-5 text-[#8B6F5C]" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-[#8B6F5C] text-2xl w-32 text-right">
                      {(item.product.price * item.quantity).toFixed(3)} DT
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => onRemoveItem(item.productId)}
                      className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Total & Confirm */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[#8B6F5C] text-3xl">Total</span>
                <span className="text-[#D4958C] text-5xl">
                  {total.toFixed(3)} DT
                </span>
              </div>

              <button
                onClick={onConfirm}
                className="w-full py-8 bg-gradient-to-r from-[#D4958C] to-[#E9B5AB] text-white text-3xl rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Confirmer la commande
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
