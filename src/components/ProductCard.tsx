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
      className="bg-bg-element rounded-xl overflow-hidden cursor-pointer group hover:ring-2 hover:ring-accent transition-all"
    >
      <div className="aspect-square overflow-hidden bg-bg-hover">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-medium mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-text-secondary text-sm mb-2">
          {getConditionLabel(product.condition)}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg">{product.price.toLocaleString('ru-RU')} ₽</p>
            {product.oldPrice && (
              <p className="text-text-secondary text-sm line-through">
                {product.oldPrice.toLocaleString('ru-RU')} ₽
              </p>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="p-2 bg-accent rounded-lg hover:bg-accent-hover transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
