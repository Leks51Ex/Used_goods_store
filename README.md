# Магазин электроники связи и навигации

Учебный проект на React для изучения основ фреймворка.

## Структура проекта

```
src/
├── main.tsx          # Точка входа React-приложения
├── App.tsx           # Главный компонент приложения
├── index.css         # Глобальные стили (CSS + переменные)
├── App.css           # Стили App (не используются)
├── assets/           # Статические файлы
└── components/       # React-компоненты
    ├── ProductCard.tsx    # Карточка товара
    ├── ProductModal.tsx   # Модальное окно товара
    ├── figma/
    │   └── ImageWithFallback.tsx  # Изображение с fallback
    └── ui/
        ├── dialog.tsx     # UI-компонент диалога (из Radix UI)
        └── utils.ts      # Утилиты (cn() для классов)
```

## Ключевые концепции React в этом проекте

### 1. JSX - синтаксис шаблонов React
Файлы `.tsx` содержат JSX - HTML-подобный синтаксис в JavaScript:

```tsx
// src/App.tsx:119-125
{products.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
    onClick={() => handleProductClick(product)}
  />
))}
```

### 2. Компоненты
Компонент — это функция, возвращающая JSX:

```tsx
// src/components/ProductCard.tsx:16
export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <button onClick={onClick} className="...">
      {/* JSX разметка */}
    </button>
  );
}
```

### 3. Props (свойства)
Данные передаются в компоненты через props:

```tsx
// Определение пропсов
interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

// Использование пропсов в компоненте
export function ProductCard({ product, onClick }: ProductCardProps) {
  return <button onClick={onClick}>{product.name}</button>;
}
```

### 4. useState - управление состоянием
Хук для хранения состояния компонента:

```tsx
// src/App.tsx:93-95
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const [isModalOpen, setIsModalOpen] = useState(false);

// Обновление состояния
const handleProductClick = (product: Product) => {
  setSelectedProduct(product);
  setIsModalOpen(true);
};
```

### 5. Типизация с TypeScript
TypeScript добавляет типы к данным:

```tsx
// src/components/ProductCard.tsx:3-9
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  condition?: string;  // необязательное поле
}
```

### 6. Списки и ключи (map + key)
Рендер списка элементов:

```tsx
// src/App.tsx:119
{products.map((product) => (
  <ProductCard
    key={product.id}  // key нужен для оптимизации React
    product={product}
    onClick={() => handleProductClick(product)}
  />
))}
```

### 7. Обработка событий
Клик по элементу:

```tsx
<button onClick={onClick}>
  Нажми меня
</button>
```

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Продакшн сборка
npm run build

# Проверка линтером
npm run lint
```

## Стек технологий

| Технология | Назначение |
|------------|------------|
| **React 19** | Фреймворк для UI |
| **TypeScript** | Типизация JavaScript |
| **Vite** | Сборщик и dev-сервер |
| **TailwindCSS 4** | CSS-фреймворк для стилей |
| **Radix UI** | Готовые UI-компоненты (Dialog) |
| **lucide-react** | Иконки |
| **clsx + tailwind-merge** | Утилиты для работы с классами |

## Порядок изучения файлов

1. **`src/main.tsx`** — точка входа, где React монтируется в DOM
2. **`src/App.tsx`** — главная логика: состояние и рендер списка товаров
3. **`src/components/ProductCard.tsx`** — простой компонент с пропсами
4. **`src/components/ProductModal.tsx`** — модальное окно с условным рендером
5. **`src/components/ui/dialog.tsx`** — пример обёртки над библиотечным компонентом
6. **`src/components/ui/utils.ts`** — утилита `cn()` для объединения классов

## Полезные паттерны для изучения

### Условный рендер
```tsx
{product.condition && <p>{product.condition}</p>}
```

### Обработка ошибок изображения
```tsx
// src/components/figma/ImageWithFallback.tsx
const [didError, setDidError] = useState(false);
return didError ? <FallbackImage /> : <img onError={handleError} />;
```

### Props drilling vs Composition
Компоненты получают данные через props и передают колбэки для действий.
