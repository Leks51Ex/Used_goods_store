import { CheckCircle, Truck, Shield } from 'lucide-react';
import { ProductCard } from './ProductCard';
import type { Product } from '../data/products';
import { products } from '../data/products';

type Page = 'home' | 'catalog' | 'product' | 'cart';

interface HomePageProps {
  onNavigate: (page: Page, productId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const newArrivals = products.slice(0, 3);

  const features = [
    {
      icon: CheckCircle,
      title: 'Проверка товара',
      description: 'Каждый товар проходит тщательную проверку перед продажей',
    },
    {
      icon: Truck,
      title: 'Быстрая доставка',
      description: 'Доставим товар в течение 1-3 дней по всей России',
    },
    {
      icon: Shield,
      title: 'Гарантия',
      description: 'Предоставляем гарантию на все товары от 1 до 12 месяцев',
    },
  ];

  return (
    <main className="flex-1 bg-bg-primary">
      <section className="relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Продажа Б/У оборудования для коммерческого судоходства
              </h1>
              <p className="text-text-secondary text-lg mb-8 max-w-xl">
              тут будет какой то небольшой текстик где мы напишем, что хоть оборудование и бушное, оно все равно очень хорошее полностью рабочее и с ценой приятной
              </p>
              <button
                onClick={() => onNavigate('catalog')}
                className="px-8 py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-hover transition-colors"
              >
                Перейти в каталог
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-full" />
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600"
                  alt="Laptop"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 lg:w-80 rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 border-t border-bg-card">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-bg-card rounded-xl"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}



      <section className="py-16 border-t border-bg-card">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Каталог поддерживаемого оборудования</h2>
            </div>
            <button
              onClick={() => onNavigate('catalog')}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              Смотреть все →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(3, 7).map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onNavigate('product', product.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
