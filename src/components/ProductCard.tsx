import { ShoppingCart } from 'lucide-react';
import { getConditionLabel, type Product } from '../data/products';
import { useCart } from '../context/CartContext';

export type { Product };

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
    onClick={onClick}
    className="bg-bg-subcolor rounded-xl overflow-hidden cursor-pointer group hover:ring-2 hover:ring-accent transition-all"
  >
    <div className="aspect-square overflow-hidden p-4 pt-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
      />
    </div>
  
    <div className="p-4">
      <h3 className="text-left text-black font-medium mb-1 line-clamp-2">{product.name}</h3>
    </div>
  
    <button
      className="px-20 py-3 bg-accent text-white rounded-4xl hover:bg-accent-hover transition-colors mb-5"
    >
      Подробнее
    </button>
  </div>
  );
}
