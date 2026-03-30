import { useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Search } from 'lucide-react';

type Page = 'home' | 'catalog';

interface CatalogPageProps {
  onNavigate: (page: Page) => void;
  onProductClick: (productId: string) => void;
  searchQuery: string;
  onSearch: (query: string) => void;
}

const manufacturers = [
  { id: '', name: 'Все производители' },
  { id: 'apple', name: 'Apple' },
  { id: 'samsung', name: 'Samsung' },
  { id: 'lg', name: 'LG' },
  { id: 'dell', name: 'Dell' },
  { id: 'xiaomi', name: 'Xiaomi' },
  { id: 'lenovo', name: 'Lenovo' },
  { id: 'sony', name: 'Sony' },
  { id: 'huawei', name: 'Huawei' },
  { id: 'asus', name: 'ASUS' },
];

const types = [
  { id: '', name: 'Все типы' },
  { id: 'Навигация', name: 'Навигация' },
  { id: 'Радио', name: 'Радио' },
]

export function CatalogPage({ searchQuery, onSearch, onProductClick }: CatalogPageProps) {
  const [manufacturer, setManufacturer] = useState('');
 const [type, setType] = useState('');
  
 
 
 
 const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesManufacturer = !manufacturer || product.manufacturer === manufacturer;
      const matchesType = !type || product.type == type;
      return matchesSearch && matchesManufacturer && matchesType;
    });
  }, [searchQuery, manufacturer, type]);

  return (
    <main className="flex-1 bg-bg-primary">

        <div className="max-w-[1740px] mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">

            <h1 className="text-left text-2xl font-bold text-white mb-6">Каталог поддержанного оборудования</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Ищете что-то конкретное?"
                  value={searchQuery}
                  onChange={e => onSearch(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-bg-subcolor rounded-2xl text-sm text-white placeholder-text-secondary outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

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

  <div className="relative w-54">
  <select
    id="manufacturer-select"
    value={manufacturer}
    onChange={(e) => setManufacturer(e.target.value)}
    className="bg-white border border-black text-black text-sm rounded-4xl block w-full p-2 appearance-none pr-1-"
  >
    {manufacturers.map(m => (
      <option key={m.id} value={m.id}>
        {m.name}
      </option>
    ))}
  </select>
  
  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black">
    ▼
  </span>
</div>

<div className="relative w-54">
  <select
    id="type-select"
    value={type}
    onChange={(e) => setType(e.target.value)}
    className="bg-white border border-black text-black text-sm rounded-4xl block w-full p-2 appearance-none pr-1-"
  >
    {types.map(t => (
      <option key={t.id} value={t.id}>
        {t.name}
      </option>
    ))}
  </select>
  
  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-black">
    ▼
  </span>
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
