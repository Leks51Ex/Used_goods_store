import { useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';

type Page = 'home' | 'catalog';

interface CatalogPageProps {
  onNavigate: (page: Page) => void;
  onProductClick: (productId: string) => void;
  searchQuery: string;
}

export function CatalogPage({ searchQuery, onProductClick }: CatalogPageProps) {
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <main className="flex-1 bg-bg-primary">
         
        <div className="max-w-[1740px] mx-auto px-6 py-12">
          
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            
            <h1 className="text-left text-2xl font-bold text-white mb-6">Каталог поддержанного оборудования</h1>
            <div className="flex items-center gap-4">
  <div className="flex items-center">
    <input
      type="radio"
      id="default-radio-1"
      name="filter"
      className="text-black border-black accent-black w-4 h-4"
    />
    <label htmlFor="default-radio-1" className="ml-2 text-bg-secondary font-bold">
      Сначала новые
    </label>
  </div>

  <div className="flex items-center">
    <input
      type="radio"
      id="default-radio-2"
      name="filter"
         className="text-black border-black accent-black w-4 h-4"
    />
    <label htmlFor="default-radio-2" className="ml-2 text-black font-bold">
      Показать все
    </label>
  </div>


  
</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-10">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onProductClick(product.id)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-text-secondary">Товары не найдены</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
