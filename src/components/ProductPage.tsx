import { useState } from 'react';
import { ChevronLeft, ShoppingCart, Zap } from 'lucide-react';
import { products, getConditionLabel } from '../data/products';
import { useCart } from '../context/CartContext';

type Page = 'home' | 'catalog' | 'product' | 'cart';

interface ProductPageProps {
  productId: string;
  onNavigate: (page: Page, productId?: string) => void;
}

export function ProductPage({ productId, onNavigate }: ProductPageProps) {
  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

  if (!product) {
    return (
      <main className="flex-1 bg-bg-primary">
        <div className="max-w-[1440px] mx-auto px-6 py-12">
          <p className="text-white">Товар не найден</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-bg-primary">
      <div className="max-w-container mx-auto px-6 py-12">
        <button
          onClick={() => onNavigate('catalog')}
          className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Назад в каталог</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square bg-bg-card rounded-xl overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? 'border-accent'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <p className="text-4xl font-bold text-white">
                {product.price.toLocaleString('ru-RU')} ₽
              </p>
              {product.oldPrice && (
                <p className="text-xl text-text-secondary line-through">
                  {product.oldPrice.toLocaleString('ru-RU')} ₽
                </p>
              )}
            </div>

            <div className="flex gap-4 mb-8">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                В корзину
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-bg-element text-white rounded-xl font-semibold hover:bg-bg-hover transition-colors">
                <Zap className="w-5 h-5" />
                Купить в 1 клик
              </button>
            </div>

            <div className="bg-bg-card rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Характеристики</h3>
              <div className="space-y-3">
                {product.specs.screen && (
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Экран</span>
                    <span className="text-white">{product.specs.screen}</span>
                  </div>
                )}
                {product.specs.memory && (
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Память</span>
                    <span className="text-white">{product.specs.memory}</span>
                  </div>
                )}
                {product.specs.color && (
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Цвет</span>
                    <span className="text-white">{product.specs.color}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Состояние</span>
                  <span className="text-white">{getConditionLabel(product.condition)}</span>
                </div>
                {product.specs.warranty && (
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Гарантия</span>
                    <span className="text-white">{product.specs.warranty}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-bg-card rounded-xl overflow-hidden">
              <div className="flex border-b border-bg-element">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'description'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-text-secondary'
                  }`}
                >
                  Описание
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'specs'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-text-secondary'
                  }`}
                >
                  Характеристики
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'reviews'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-text-secondary'
                  }`}
                >
                  Отзывы
                </button>
              </div>
              <div className="p-6">
                {activeTab === 'description' && (
                  <p className="text-text-secondary leading-relaxed">
                    {product.description}
                  </p>
                )}
                {activeTab === 'specs' && (
                  <div className="space-y-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-text-secondary capitalize">{key}</span>
                        <span className="text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <p className="text-text-secondary text-center py-8">
                    Пока нет отзывов
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
