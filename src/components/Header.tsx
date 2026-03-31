import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'catalog';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'О нас' },
    { id: 'catalog' as Page, label: 'Каталог оборудования' },

  ];

  return (
    <header className="bg-bg-primary text-white ">
      <div className="max-w-[1840px] mx-auto px-6">
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
