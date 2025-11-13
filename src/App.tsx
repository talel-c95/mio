import { useState } from "react";
import { Landing } from "./components/Landing";
import { Step1CakeType } from "./components/Step1CakeType";
import { Step2Size } from "./components/Step2Size";
import { Step3Flavors } from "./components/Step3Flavors";
import { Step4Decorations } from "./components/Step4Decorations";
import { Step5Pickup } from "./components/Step5Pickup";
import { Step6Payment } from "./components/Step6Payment";
import { Step7Confirmation } from "./components/Step7Confirmation";
import { Menu } from "./components/Menu";
import { MenuCheckout } from "./components/MenuCheckout";
import { MenuInvoice } from "./components/MenuInvoice";

type View = "landing" | "step1" | "step2" | "step3" | "step4" | "step5" | "step6" | "step7" | "menu" | "menu-checkout" | "menu-invoice";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function App() {
  // Navigation state
  const [currentView, setCurrentView] = useState<View>("landing");

  // Custom cake order state
  const [cakeType, setCakeType] = useState("");
  const [size, setSize] = useState(0);
  const [flavors, setFlavors] = useState<string[]>([]);
  const [cakeText, setCakeText] = useState("");
  const [decorations, setDecorations] = useState<string[]>([]);
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Menu order state
  const [menuCart, setMenuCart] = useState<CartItem[]>([]);
  const [menuPaymentMethod, setMenuPaymentMethod] = useState("");

  // Navigation handlers
  const startOrder = () => setCurrentView("step1");
  const viewMenu = () => setCurrentView("menu");
  
  const resetOrder = () => {
    setCakeType("");
    setSize(0);
    setFlavors([]);
    setCakeText("");
    setDecorations([]);
    setPickupDate("");
    setPickupTime("");
    setCustomerName("");
    setCustomerPhone("");
    setCustomerEmail("");
    setPaymentMethod("");
    setCurrentView("step1");
  };

  const resetMenuOrder = () => {
    setMenuCart([]);
    setMenuPaymentMethod("");
    setCurrentView("menu");
  };

  const backToHome = () => setCurrentView("landing");

  const handleMenuCheckout = (cart: CartItem[]) => {
    setMenuCart(cart);
    setCurrentView("menu-checkout");
  };

  const handleMenuPayment = (method: string) => {
    setMenuPaymentMethod(method);
    setCurrentView("menu-invoice");
  };

  return (
    <div className="min-h-screen">
      {currentView === "landing" && (
        <Landing onStartOrder={startOrder} onViewMenu={viewMenu} />
      )}

      {currentView === "menu" && (
        <Menu onBack={backToHome} onCheckout={handleMenuCheckout} />
      )}

      {currentView === "menu-checkout" && (
        <MenuCheckout
          cart={menuCart}
          onBack={() => setCurrentView("menu")}
          onConfirm={handleMenuPayment}
        />
      )}

      {currentView === "menu-invoice" && (
        <MenuInvoice
          cart={menuCart}
          paymentMethod={menuPaymentMethod}
          onNewOrder={resetMenuOrder}
          onBackToHome={backToHome}
        />
      )}

      {currentView === "step1" && (
        <Step1CakeType
          selectedType={cakeType}
          onSelect={setCakeType}
          onNext={() => setCurrentView("step2")}
        />
      )}

      {currentView === "step2" && (
        <Step2Size
          selectedSize={size}
          onSelect={setSize}
          onNext={() => setCurrentView("step3")}
          onBack={() => setCurrentView("step1")}
        />
      )}

      {currentView === "step3" && (
        <Step3Flavors
          cakeType={cakeType}
          size={size}
          selectedFlavors={flavors}
          onSelect={setFlavors}
          onNext={() => setCurrentView("step4")}
          onBack={() => setCurrentView("step2")}
        />
      )}

      {currentView === "step4" && (
        <Step4Decorations
          cakeType={cakeType}
          size={size}
          flavors={flavors}
          cakeText={cakeText}
          decorations={decorations}
          onTextChange={setCakeText}
          onDecorationsChange={setDecorations}
          onNext={() => setCurrentView("step5")}
          onBack={() => setCurrentView("step3")}
        />
      )}

      {currentView === "step5" && (
        <Step5Pickup
          pickupDate={pickupDate}
          pickupTime={pickupTime}
          customerName={customerName}
          customerPhone={customerPhone}
          customerEmail={customerEmail}
          onPickupDateChange={setPickupDate}
          onPickupTimeChange={setPickupTime}
          onCustomerNameChange={setCustomerName}
          onCustomerPhoneChange={setCustomerPhone}
          onCustomerEmailChange={setCustomerEmail}
          onNext={() => setCurrentView("step6")}
          onBack={() => setCurrentView("step4")}
        />
      )}

      {currentView === "step6" && (
        <Step6Payment
          paymentMethod={paymentMethod}
          onSelect={setPaymentMethod}
          onNext={() => setCurrentView("step7")}
          onBack={() => setCurrentView("step5")}
        />
      )}

      {currentView === "step7" && (
        <Step7Confirmation
          orderDetails={{
            cakeType,
            size,
            flavors,
            text: cakeText,
            decorations,
            pickupDate,
            pickupTime,
            customerName,
            paymentMethod,
          }}
          onNewOrder={resetOrder}
          onBackToHome={backToHome}
        />
      )}
    </div>
  );
}
