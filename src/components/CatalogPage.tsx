import { useState, useEffect, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { fetchProducts, fetchTypes, fetchManufacturers, type Product } from '../api/products';
import { Search } from 'lucide-react';

type Page = 'home' | 'catalog';

interface CatalogPageProps {
  onNavigate: (page: Page) => void;
  onProductClick: (productId: string) => void;
  searchQuery: string;
  onSearch: (query: string) => void;
}

export function CatalogPage({ searchQuery, onSearch, onProductClick }: CatalogPageProps) {
  const [manufacturer, setManufacturer] = useState('');
  const [type, setType] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    Promise.all([
      fetchTypes(),
      fetchManufacturers()
    ]).then(([typesData, manufacturersData]) => {
      setTypes(typesData);
      setManufacturers(manufacturersData);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setCurrentPage(1);
    fetchProducts({ type, manufacturer, page: 1, limit: 12 })
      .then(response => {
        setProducts(response.data);
        setTotalPages(response.totalPages);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [type, manufacturer]);

  const typeOptions = useMemo(() => {
    return [{ id: '', name: 'Все типы' }, ...types.map(t => ({ id: t, name: t }))];
  }, [types]);

  const manufacturerOptions = useMemo(() => {
    return [{ id: '', name: 'Все производители' }, ...manufacturers.map(m => ({ id: m, name: m }))];
  }, [manufacturers]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesManufacturer = !manufacturer || product.manufacturer === manufacturer;
      const matchesType = !type || product.type === type;
      return matchesSearch && matchesManufacturer && matchesType;
    });
  }, [products, searchQuery, manufacturer, type]);

  useEffect(() => {
    setLoading(true);
    fetchProducts({ type, manufacturer, page: currentPage, limit: 12 })
      .then(response => {
        setProducts(response.data);
        setTotalPages(response.totalPages);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [type, manufacturer, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex-1 bg-bg-primary">
      <div className="max-w-[1740px] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-left text-2xl font-bold text-white mb-6">Каталог подержанного оборудования</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
                <input
                  type="text"
                  placeholder="Ищете что-то конкретное?"
                  value={searchQuery}
                  onChange={e => onSearch(e.target.value)}
                  className="w-110 pl-10 pr-4 py-2 bg-bg-subcolor rounded-2xl text-sm text-black placeholder-text-secondary outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative w-54">
                <select
                  id="manufacturer-select"
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                  className="bg-white border border-black text-black text-sm rounded-4xl block w-full p-2 appearance-none pr-1-"
                >
                  {manufacturerOptions.map(m => (
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
                  {typeOptions.map(t => (
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

            {loading ? (
              <div className="text-center py-12">
                <p className="text-text-secondary">Загрузка...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-10">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onClick={() => onProductClick(product.id)}
                  />
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-text-secondary">Товары не найдены</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded bg-bg-subcolor text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ←
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? 'bg-accent text-white'
                        : 'bg-bg-subcolor text-black'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded bg-bg-subcolor text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
