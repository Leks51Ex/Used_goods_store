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
        <div className="max-w-[1740px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-left text-2xl font-bold text-white mb-6">Каталог поддержанного оборудования</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
