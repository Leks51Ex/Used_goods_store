import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products, categories, conditions, type Condition } from '../data/products';

type Page = 'home' | 'catalog' | 'product' | 'cart';

interface CatalogPageProps {
  onNavigate: (page: Page, productId?: string) => void;
  searchQuery: string;
}

export function CatalogPage({ onNavigate, searchQuery }: CatalogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<Condition | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [conditionDropdownOpen, setConditionDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesCondition = !selectedCondition || product.condition === selectedCondition;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesCondition && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedCondition, priceRange]);

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setCategoryDropdownOpen(false);
  };

  const handleConditionSelect = (condition: Condition | null) => {
    setSelectedCondition(condition);
    setConditionDropdownOpen(false);
  };

  return (
    <main className="flex-1 bg-bg-primary">
        <div className="max-w-[1440px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-bg-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Фильтры</h3>

              <div className="space-y-4">
                <div className="relative">
                  <button
                    onClick={() => {
                      setCategoryDropdownOpen(!categoryDropdownOpen);
                      setConditionDropdownOpen(false);
                      setPriceDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 bg-bg-element rounded-lg text-white text-sm"
                  >
                    <span>Категория</span>
                    <div className="flex items-center gap-2">
                      <span className="text-text-secondary">
                        {selectedCategory
                          ? categories.find(c => c.id === selectedCategory)?.name
                          : 'Все'}
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {categoryDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-bg-element rounded-lg overflow-hidden">
                      <button
                        onClick={() => handleCategorySelect(null)}
                        className="w-full px-4 py-2 text-left text-white text-sm hover:bg-bg-hover"
                      >
                        Все
                      </button>
                      {categories.map(category => (
                        <button
                          key={category.id}
                          onClick={() => handleCategorySelect(category.id)}
                          className="w-full px-4 py-2 text-left text-white text-sm hover:bg-bg-hover"
                        >
                          {category.name} ({category.count})
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      setConditionDropdownOpen(!conditionDropdownOpen);
                      setCategoryDropdownOpen(false);
                      setPriceDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 bg-bg-element rounded-lg text-white text-sm"
                  >
                    <span>Состояние</span>
                    <div className="flex items-center gap-2">
                      <span className="text-text-secondary">
                        {selectedCondition
                          ? conditions.find(c => c.id === selectedCondition)?.name
                          : 'Любое'}
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {conditionDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-bg-element rounded-lg overflow-hidden">
                      <button
                        onClick={() => handleConditionSelect(null)}
                        className="w-full px-4 py-2 text-left text-white text-sm hover:bg-bg-hover"
                      >
                        Любое
                      </button>
                      {conditions.map(condition => (
                        <button
                          key={condition.id}
                          onClick={() => handleConditionSelect(condition.id)}
                          className="w-full px-4 py-2 text-left text-white text-sm hover:bg-bg-hover"
                        >
                          {condition.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => {
                      setPriceDropdownOpen(!priceDropdownOpen);
                      setCategoryDropdownOpen(false);
                      setConditionDropdownOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 bg-bg-element rounded-lg text-white text-sm"
                  >
                    <span>Цена</span>
                    <div className="flex items-center gap-2">
                      <span className="text-text-secondary">
                        {priceRange[0]} - {priceRange[1]} ₽
                      </span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  {priceDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-bg-element rounded-lg p-4">
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs text-text-secondary mb-1 block">От</label>
                          <input
                            type="number"
                            value={priceRange[0]}
                            onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                            className="w-full px-3 py-2 bg-bg-hover rounded-lg text-white text-sm outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-text-secondary mb-1 block">До</label>
                          <input
                            type="number"
                            value={priceRange[1]}
                            onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="w-full px-3 py-2 bg-bg-hover rounded-lg text-white text-sm outline-none"
                          />
                        </div>
                        <button
                          onClick={() => {
                            setPriceRange([0, 200000]);
                            setPriceDropdownOpen(false);
                          }}
                          className="w-full py-2 bg-accent rounded-lg text-white text-sm hover:bg-accent-hover"
                        >
                          Сбросить
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white mb-6">Каталог товаров</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onNavigate('product', product.id)}
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
