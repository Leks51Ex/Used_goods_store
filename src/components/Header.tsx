import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

type Page = 'home' | 'catalog' | 'product' | 'cart';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Header({ currentPage, onNavigate, onSearch, searchQuery }: HeaderProps) {
  const { totalItems } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'О нас' },
    { id: 'catalog' as Page, label: 'Каталог оборудования' },
    { id: 'delivery' as Page, label: 'Доставка и оплата' },
    { id: 'contacts' as Page, label: 'Контакты' },
  ];

  return (
    <header className="bg-bg-card text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold">Б</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Ищете что-то конкретное?"
                value={searchQuery}
                onChange={e => onSearch(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-bg-element rounded-lg text-sm text-white placeholder-text-secondary outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-bg-element rounded-lg transition-colors"
            >
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full text-xs flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <div className="hidden md:block text-right">
            <a href="tel:+77777777777" className="text-sm text-text-secondary hover:text-white transition-colors">
              +7 (777) 777-77-77
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-bg-element">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Поиск..."
                value={searchQuery}
                onChange={e => onSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-bg-element rounded-lg text-sm text-white placeholder-text-secondary outline-none"
              />
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-left ${
                    currentPage === item.id
                      ? 'bg-accent text-white'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-bg-element">
              <a href="tel:+77777777777" className="text-sm text-text-secondary">
                +7 (777) 777-77-77
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
