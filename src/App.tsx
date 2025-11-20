import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { CategoriesScreen } from "./components/CategoriesScreen";
import { ProductsScreen } from "./components/ProductsScreen";
import { CheckoutScreen, CartItem } from "./components/CheckoutScreen";
import { TicketScreen } from "./components/TicketScreen";

type Screen = "welcome" | "categories" | "products" | "checkout" | "ticket";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleStart = () => {
    setCurrentScreen("categories");
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentScreen("products");
  };

  const handleAddToCart = (productId: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  };

  const handleGoToCheckout = () => {
    if (cart.length > 0) {
      setCurrentScreen("checkout");
    }
  };

  const handleConfirmOrder = () => {
    setCurrentScreen("ticket");
  };

  const handleRestart = () => {
    setCart([]);
    setSelectedCategory(null);
    setCurrentScreen("welcome");
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-screen h-screen overflow-auto">
      {currentScreen === "welcome" && <WelcomeScreen onStart={handleStart} />}

      {currentScreen === "categories" && (
        <div className="relative">
          <CategoriesScreen
            onCategorySelect={handleCategorySelect}
            onBack={() => setCurrentScreen("welcome")}
            cartItemCount={cartItemCount}
          />
          {cart.length > 0 && (
            <button
              onClick={handleGoToCheckout}
              className="fixed bottom-8 right-8 px-12 py-6 bg-gradient-to-r from-[#D4958C] to-[#E9B5AB] text-white text-2xl rounded-2xl shadow-2xl hover:shadow-[#D4958C]/50 hover:scale-105 transition-all z-50"
            >
              Voir le panier ({cartItemCount})
            </button>
          )}
        </div>
      )}

      {currentScreen === "products" && selectedCategory && (
        <div className="relative">
          <ProductsScreen
            categoryId={selectedCategory}
            onBack={() => setCurrentScreen("categories")}
            onAddToCart={handleAddToCart}
          />
          {cart.length > 0 && (
            <button
              onClick={handleGoToCheckout}
              className="fixed bottom-8 right-8 px-12 py-6 bg-gradient-to-r from-[#D4958C] to-[#E9B5AB] text-white text-2xl rounded-2xl shadow-2xl hover:shadow-[#D4958C]/50 hover:scale-105 transition-all z-50"
            >
              Voir le panier ({cartItemCount})
            </button>
          )}
        </div>
      )}

      {currentScreen === "checkout" && (
        <CheckoutScreen
          cart={cart}
          onBack={() => setCurrentScreen("categories")}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onConfirm={handleConfirmOrder}
        />
      )}

      {currentScreen === "ticket" && (
        <TicketScreen cart={cart} onRestart={handleRestart} />
      )}
    </div>
  );
}
