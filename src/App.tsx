import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { CatalogPage } from './components/CatalogPage';
import { ProductPage } from './components/ProductPage';
import { CartPage } from './components/CartPage';

type Page = 'home' | 'catalog' | 'product' | 'cart';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (page: Page, productId?: string) => {
    setCurrentPage(page);
    if (page === 'product' && productId) {
      setSelectedProductId(productId);
    }
    if (page === 'home') {
      setSearchQuery('');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'catalog':
        return <CatalogPage onNavigate={handleNavigate} searchQuery={searchQuery} />;
      case 'product':
        return <ProductPage productId={selectedProductId!} onNavigate={handleNavigate} />;
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className=" flex flex-col bg-[#000000]">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
