import { Minus, Plus, Trash2, Tag, Truck, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

type Page = 'home' | 'catalog' | 'product' | 'cart';

interface CartPageProps {
  onNavigate: (page: Page, productId?: string) => void;
}

export function CartPage({ onNavigate }: CartPageProps) {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'скидка10') {
      setPromoApplied(true);
      setPromoDiscount(totalPrice * 0.1);
    }
  };

  const deliveryPrice = totalPrice >= 10000 ? 0 : 500;
  const finalPrice = totalPrice - promoDiscount + deliveryPrice;

  if (items.length === 0) {
    return (
      <main className="flex-1 bg-bg-primary">
        <div className="max-w-[1440px] mx-auto px-6 py-12">
          <button
            onClick={() => onNavigate('catalog')}
            className="flex items-center gap-2 text-text-secondary hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Вернуться в каталог</span>
          </button>
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-white mb-4">Корзина пуста</h2>
            <p className="text-text-secondary mb-6">Добавьте товары в корзину</p>
            <button
              onClick={() => onNavigate('catalog')}
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
            >
              Перейти в каталог
            </button>
          </div>
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
          <span>Вернуться в каталог</span>
        </button>

        <h1 className="text-2xl font-bold text-white mb-8">Корзина</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.product.id}
                className="flex gap-4 bg-bg-card rounded-xl p-4"
              >
                <div
                  className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => onNavigate('product', item.product.id)}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium mb-1 truncate">
                    {item.product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-2">
                    {item.product.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-bg-element rounded-lg hover:bg-bg-hover transition-colors"
                      >
                        <Minus className="w-4 h-4 text-white" />
                      </button>
                      <span className="w-8 text-center text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-bg-element rounded-lg hover:bg-bg-hover transition-colors"
                      >
                        <Plus className="w-4 h-4 text-white" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-text-secondary hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold">
                    {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-bg-card rounded-xl p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-white mb-4">Итого</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Товары ({items.length})</span>
                  <span className="text-white">
                    {totalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm text-green-500">
                    <span>Промокод</span>
                    <span>-{promoDiscount.toLocaleString('ru-RU')} ₽</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Доставка</span>
                  <span className="text-white">
                    {deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice} ₽`}
                  </span>
                </div>
                <div className="pt-3 border-t border-bg-element flex justify-between">
                  <span className="text-white font-semibold">Итого</span>
                  <span className="text-white font-bold text-xl">
                    {finalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Промокод"
                    value={promoCode}
                    onChange={e => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-3 bg-bg-element rounded-lg text-white text-sm placeholder-text-secondary outline-none"
                  />
                  <button
                    onClick={handleApplyPromo}
                    className="px-4 py-3 bg-bg-element rounded-lg text-white hover:bg-bg-hover transition-colors"
                  >
                    <Tag className="w-5 h-5" />
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-green-500 text-sm mt-2">Промокод применён!</p>
                )}
              </div>

              <button className="w-full py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors mb-4">
                Оформить заказ
              </button>

              <div className="flex items-start gap-3 text-sm text-text-secondary">
                <Truck className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p>Доставка: 1-3 рабочих дня. Бесплатно при заказе от 10 000 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
