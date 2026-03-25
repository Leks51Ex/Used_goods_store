# Документация по стилям

## Как работают стили в проекте

В проекте используется **TailwindCSS** — CSS-фреймворк, где стили задаются через классы прямо в HTML/JSX.

## Файл глобальных стилей

**`src/index.css`** — базовые стили и CSS-переменные.

### CSS-переменные (кастомные свойства)

```css
:root {
  --text: #6b6375;           /* основной цвет текста */
  --text-h: #08060d;         /* цвет заголовков */
  --bg: #fff;                /* фон страницы */
  --border: #e5e4e7;         /* цвет границ */
  --accent: #aa3bff;         /* акцентный цвет (фиолетовый) */
  --shadow: ...;             /* тени */
}
```

Эти переменные позволяют менять тему (светлая/тёмная) в одном месте.

## Справочник классов TailwindCSS

### 1. Размеры и отступы

| Класс | Значение | Пример |
|-------|----------|--------|
| `p-4` | padding 16px | внутренний отступ |
| `px-4` | padding-left/right 16px | горизонтальные отступы |
| `py-12` | padding-top/bottom 48px | вертикальные отступы |
| `m-4` | margin 16px | внешний отступ |
| `mt-4` | margin-top 16px | отступ сверху |
| `mb-6` | margin-bottom 24px | отступ снизу |
| `gap-6` | gap 24px | расстояние между элементами |
| `w-full` | width: 100% | ширина на всю ширину |
| `max-w-7xl` | max-width: 80rem (1280px) | максимальная ширина |
| `max-w-2xl` | max-width: 42rem (672px) | максимальная ширина модалки |
| `aspect-square` | aspect-ratio: 1/1 | квадратная пропорция |

### 2. Фоны и цвета

| Класс | Значение | Пример |
|-------|----------|--------|
| `bg-white` | background: #fff | белый фон |
| `bg-gray-50` | background: #f9fafb | светло-серый фон |
| `bg-gray-100` | background: #f3f4f6 | фон карточки |
| `bg-gray-900` | background: #111827 | тёмный текст |
| `bg-blue-600` | background: #2563eb | синяя кнопка |
| `bg-black/50` | background: rgba(0,0,0,0.5) | полупрозрачный фон |

### 3. Текст

| Класс | Значение | Пример |
|-------|----------|--------|
| `text-sm` | font-size: 14px | мелкий текст |
| `text-lg` | font-size: 18px | крупный текст |
| `text-3xl` | font-size: 30px | цена |
| `text-4xl` | font-size: 36px | заголовок |
| `text-5xl` | font-size: 48px | большой заголовок |
| `text-gray-500` | color: #6b7280 | дополнительный текст |
| `text-gray-900` | color: #111827 | основной текст |
| `text-white` | color: #fff | белый текст |
| `font-semibold` | font-weight: 600 | полужирный |
| `font-bold` | font-weight: 700 | жирный |
| `text-center` | text-align: center | центрирование |
| `line-clamp-2` | ограничение 2 строки | обрезка текста |

### 4. Границы и тени

| Класс | Значение | Пример |
|-------|----------|--------|
| `border` | border: 1px solid | тонкая линия |
| `border-b` | border-bottom | линия снизу |
| `border-gray-200` | border-color: #e5e7eb | цвет границы |
| `rounded-lg` | border-radius: 8px | скруглённые углы |
| `rounded-sm` | border-radius: 4px | небольшое скругление |
| `shadow-sm` | small shadow | лёгкая тень |
| `shadow-md` | medium shadow | тень при наведении |

### 5. Flexbox (раскладка)

| Класс | Значение | Пример |
|-------|----------|--------|
| `flex` | display: flex | flex-контейнер |
| `flex-col` | flex-direction: column | колонка |
| `flex-row` | flex-direction: row | строка |
| `items-center` | align-items: center | центрирование по вертикали |
| `justify-center` | justify-content: center | центрирование по горизонтали |
| `justify-between` | justify-content: space-between | по краям |
| `gap-6` | gap: 24px | отступ между элементами |

### 6. Сетка (Grid)

```tsx
// src/App.tsx:118
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

| Класс | Значение |
|-------|----------|
| `grid` | display: grid |
| `grid-cols-1` | 1 колонка на мобильных |
| `sm:grid-cols-2` | 2 колонки на планшетах (640px+) |
| `lg:grid-cols-4` | 4 колонки на десктопе (1024px+) |

### 7. Адаптивность (breakpoints)

| Префикс | Ширина экрана |
|---------|---------------|
| `sm:` | ≥ 640px |
| `md:` | ≥ 768px |
| `lg:` | ≥ 1024px |
| `xl:` | ≥ 1280px |

```tsx
// Пример: адаптивная типографика
className="text-4xl sm:text-5xl"
// На телефоне: 36px, на десктопе: 48px
```

### 8. Hover и переходы

| Класс | Значение | Пример |
|-------|----------|--------|
| `hover:shadow-md` | тень при наведении | эффект карточки |
| `hover:bg-blue-700` | цвет при наведении | кнопка |
| `hover:scale-105` | увеличение при наведении | эффект зума |
| `transition-shadow` | плавный переход тени | |
| `transition-colors` | плавная смена цвета | |
| `transition-transform` | плавное масштабирование | |
| `duration-200` | transition: 200ms | скорость |
| `duration-300` | transition: 300ms | скорость |

### 9. Positioning (позиционирование)

| Класс | Значение | Пример |
|-------|----------|--------|
| `absolute` | position: absolute | внутри relative |
| `fixed` | position: fixed | поверх всего |
| `relative` | position: relative | для абсолютных детей |
| `top-4` | top: 16px | отступ сверху |
| `right-4` | right: 16px | отступ справа |
| `inset-0` | top/right/bottom/left: 0 | на весь родитель |
| `z-50` | z-index: 50 | поверх модалки |

### 10. Анимации (Radix UI)

Классы для анимации диалога (`dialog.tsx`):

```css
data-[state=open]:animate-in      /* появление */
data-[state=closed]:animate-out   /* исчезновение */
fade-in-0 / fade-out-0            /* прозрачность */
zoom-in-95 / zoom-out-95          /* масштаб */
```

## Примеры из кода

### Карточка товара (`ProductCard.tsx`)

```tsx
<button className="
  bg-white               /* белый фон */
  rounded-lg             /* скруглённые углы */
  overflow-hidden        /* скрыть выходящее за границы */
  shadow-sm              /* лёгкая тень */
  hover:shadow-md        /* тень при наведении */
  transition-shadow      /* плавный переход тени */
  duration-200           /* 200ms */
  text-left              /* текст слева */
  w-full                 /* ширина 100% */
">
```

### Сетка товаров (`App.tsx`)

```tsx
<div className="
  grid                               /* CSS Grid */
  grid-cols-1                        /* 1 колонка на телефоне */
  sm:grid-cols-2                     /* 2 колонки на планшете */
  lg:grid-cols-4                     /* 4 колонки на десктопе */
  gap-6                              /* 24px между карточками */
">
```

### Модальное окно (`ProductModal.tsx`)

```tsx
<DialogContent className="
  max-w-2xl          /* максимальная ширина 672px */
  rounded-lg         /* скруглённые углы */
  border             /* граница */
  p-6                /* внутренние отступы 24px */
  shadow-lg          /* большая тень */
">
```

### Кнопка (`ProductModal.tsx`)

```tsx
<button className="
  px-6                /* отступы по бокам 24px */
  py-3                /* отступы сверху/снизу 12px */
  bg-blue-600         /* синий фон */
  text-white          /* белый текст */
  rounded-lg          /* скруглённые углы */
  hover:bg-blue-700   /* тёмнее при наведении */
  transition-colors   /* плавная смена цвета */
">
```

### Адаптивный header (`App.tsx`)

```tsx
<h1 className="
  text-4xl             /* 36px на телефоне */
  sm:text-5xl         /* 48px на планшете */
  font-bold           /* жирный */
  text-center         /* по центру */
">
```

## Утилита `cn()` (classnames)

**`src/components/ui/utils.ts`**

```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Объединяет классы и убирает конфликты:

```tsx
// Без cn(): оба цвета применены (конфликт)
className="bg-red-500 bg-blue-500"

// С cn(): остаётся только последний
className={cn("bg-red-500", "bg-blue-500")} // → "bg-blue-500"
```

## Как добавить новый стиль

1. Найдите нужный класс в [Tailwind docs](https://tailwindcss.com/docs)
2. Добавьте его в `className`:

```tsx
<div className="p-4 bg-blue-500 text-white">
  Синий блок с белым текстом
</div>
```

3. Если нужен нестандартный стиль, добавьте в `index.css`:

```css
.my-custom-class {
  custom-property: value;
}
```
