import { ArrowLeft, Plus } from "lucide-react";
import { products, categories } from "../data/products";

interface ProductsScreenProps {
  categoryId: string;
  onBack: () => void;
  onAddToCart: (productId: string) => void;
}

export function ProductsScreen({ categoryId, onBack, onAddToCart }: ProductsScreenProps) {
  const category = categories.find((c) => c.id === categoryId);
  const categoryProducts = products.filter((p) => p.category === categoryId);

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
          {category?.name}
        </h1>

        <div className="w-40" /> {/* Spacer for centering */}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-[#8B6F5C] text-xl mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-[#D4958C] text-2xl">
                  {product.price.toFixed(3)} DT
                </p>
              </div>

              {/* Add Button */}
              <button
                onClick={() => onAddToCart(product.id)}
                className="mt-4 w-full py-4 bg-gradient-to-r from-[#D4958C] to-[#E9B5AB] text-white rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                <span className="text-lg">Ajouter</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
