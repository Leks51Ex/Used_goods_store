import { Menu, X } from "lucide-react";
import { useState } from "react";

type Page = 'home' | 'catalog';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Footer({ currentPage, onNavigate }: FooterProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as Page, label: 'О нас' },
    { id: 'catalog' as Page, label: 'Каталог оборудования' },
  ];

  return (
    <footer className="bg-bg-secondary text-white mt-auto">
      <div className="max-w-[1740px] mx-auto px-6 py-12">
        <h1 className="text-left text-white!">Контакты</h1>
        <div className="flex flex-col gap-6 text-left">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
     
          <button
            className="md:hidden p-2 self-start"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="flex flex-col gap-2">
            <a href="tel:+77777777777" className="text-text-secondary hover:text-white transition-colors">
              +7 (777) 777-77-77
            </a>
            <a href="mailto:sobaka_mail@mail.ru" className="text-text-secondary hover:text-white transition-colors">
              sobaka_mail@mail.ru
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20">
    <div className="max-w-[1740px] mx-auto px-6 py-4 text-sm text-text-secondary flex flex-col md:flex-row justify-between gap-2">
      <span>ИНН 7826155530</span>
      <span>КПП 783801001</span>
      <span>Политика конфиденциальности</span>
      <span>©2026 Все права защищены</span>

    </div>
  </div>
    </footer>
  );
}
