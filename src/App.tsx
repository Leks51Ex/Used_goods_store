import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { CatalogPage } from './components/CatalogPage';
import { ProductModal } from './components/ProductModal';
import { products } from './data/products';
import type { Product } from './components/ProductCard';

type Page = 'home' | 'catalog';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page === 'home') {
      setSearchQuery('');
    }
  };

  const handleProductClick = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setModalOpen(true);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onProductClick={handleProductClick} />;
      case 'catalog':
        return <CatalogPage onNavigate={handleNavigate} searchQuery={searchQuery} onSearch={setSearchQuery} onProductClick={handleProductClick} />;
      default:
        return <HomePage onNavigate={handleNavigate} onProductClick={handleProductClick} />;
    }
  };

  return (
    <div className="flex flex-col bg-[#000000]">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {renderPage()}
      <Footer />
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
