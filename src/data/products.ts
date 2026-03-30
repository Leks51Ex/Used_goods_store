export type Condition = 'excellent' | 'good' | 'satisfactory';

export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  category: 'laptops' | 'phones' | 'tvs';
  condition: Condition;
  manufacturer: string;
  type: string;
  description: string;
  specs: {
    screen?: string;
    memory?: string;
    color?: string;
    warranty?: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Air 13',
    price: 79990,
    oldPrice: 99990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600',
      'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=600',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    ],
    category: 'laptops',
    type: 'Навигация',
    condition: 'excellent',
    manufacturer: 'apple',
    description: 'Отличный ноутбук для работы и учёбы. Минимальные следы использования, полностью исправен. В комплекте зарядное устройство.',
    specs: {
      screen: '13.3 дюйма Retina',
      memory: '256 ГБ SSD, 8 ГБ RAM',
      color: 'Серый космос',
      warranty: '6 месяцев',
    },
  },
  {
    id: '2',
    name: 'iPhone 12',
    price: 34990,
    oldPrice: 44990,
    image: 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=400',
    images: [
      'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=600',
      'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    ],
    category: 'phones',
    type: 'Радио',
    condition: 'good',
    manufacturer: 'apple',
    description: 'Бывший в употреблении iPhone 12 в хорошем состоянии. Имеются мелкие царапины на корпусе, экран в идеале.',
    specs: {
      screen: '6.1 дюйма OLED',
      memory: '128 ГБ',
      color: 'Чёрный',
      warranty: '3 месяца',
    },
  },
  {
    id: '3',
    name: 'Samsung UE55TU8500',
    price: 29990,
    oldPrice: 39990,
    type: 'Навигация',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600',
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600',
      'https://images.unsplash.com/photo-1573375148941-8c5f2d6c6c1d?w=600',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600',
      'https://images.unsplash.com/photo-1590837845506-9cdc5a3a4bbf?w=600',
    ],
    category: 'tvs',
    condition: 'excellent',
    manufacturer: 'samsung',
    description: '55-дюймовый 4K Smart TV с кристальным изображением и HDR. В отличном состоянии, использовался мало.',
    specs: {
      screen: '55 дюймов 4K UHD',
      memory: 'Smart TV, Wi-Fi',
      color: 'Чёрный',
      warranty: '12 месяцев',
    },
  },
  {
    id: '4',
    name: 'MacBook Pro 16',
    price: 149990,
    oldPrice: 179990,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600',
    ],
    category: 'laptops',
    condition: 'excellent',
    manufacturer: 'apple',
    type: 'Навигация',
    description: 'Профессиональный ноутбук для креаторов. M1 Pro, 16 ГБ RAM, 512 ГБ SSD. Состояние нового.',
    specs: {
      screen: '16.2 дюйма Liquid Retina XDR',
      memory: '512 ГБ SSD, 16 ГБ RAM',
      color: 'Серый космос',
      warranty: '6 месяцев',
    },
  },
  {
    id: '5',
    name: 'iPhone 13 Pro',
    price: 54990,
    oldPrice: 69990,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be59a8a34?w=400',
    images: [
      'https://images.unsplash.com/photo-1632661674596-df8be59a8a34?w=600',
      'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=600',
    ],
    category: 'phones',
    condition: 'good',
    manufacturer: 'apple',
    type: 'Навигация',
    description: 'Флагманский iPhone с продвинутой камерой. Мелкие потёртости по краям, полностью функционален.',
    specs: {
      screen: '6.1 дюйма Super Retina XDR, 120Hz',
      memory: '256 ГБ',
  
      color: 'Графитовый',
      warranty: '6 месяцев',
    },
  },
  {
    id: '6',
    name: 'Samsung Galaxy S21',
    price: 28990,
    type: 'Навигация',
    oldPrice: 34990,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400',
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
    ],
    category: 'phones',
    condition: 'satisfactory',
    manufacturer: 'samsung',
    description: 'Android флагман с отличной камерой. Есть следы использования, но всё работает идеально.',
    specs: {
      screen: '6.2 дюйма Dynamic AMOLED',
      memory: '128 ГБ',
      color: 'Фантомный фиолетовый',
      warranty: '1 месяц',
    },
  },
  {
    id: '7',
    name: 'LG OLED55C1',
    type: 'Навигация',
    price: 89990,
    oldPrice: 119990,
    image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400',
    images: [
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600',
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600',
    ],
    category: 'tvs',
    condition: 'good',
    manufacturer: 'lg',
    description: 'Премиальный OLED телевизор с идеальным чёрным цветом. Небольшие следы использования, полный комплект.',
    specs: {
      screen: '55 дюймов OLED 4K, 120Hz',
      memory: 'Smart TV, Wi-Fi, Bluetooth',
      color: 'Чёрный',
      warranty: '12 месяцев',
    },
  },
  {
    id: '8',
    name: 'Dell XPS 15',
    price: 89990,
    oldPrice: 109990,
    type: 'Навигация',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400',
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    ],
    category: 'laptops',
    condition: 'excellent',
    manufacturer: 'dell',
    description: 'Ультрабук премиум-класса с 4K дисплеем. Тонкий, лёгкий, мощный. Практически не использовался.',
    specs: {
      screen: '15.6 дюйма 4K UHD OLED',
      memory: '512 ГБ SSD, 16 ГБ RAM',
      color: 'Серебристый',
      warranty: '6 месяцев',
    },
  },
  {
    id: '9',
    name: 'Xiaomi Mi TV 4S',
    price: 19990,
    oldPrice: 24990,
    type: 'Навигация',
    image: 'https://images.unsplash.com/photo-1573375148941-8c5f2d6c6c1d?w=400',
    images: [
      'https://images.unsplash.com/photo-1573375148941-8c5f2d6c6c1d?w=600',
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600',
    ],
    category: 'tvs',
    condition: 'satisfactory',
    manufacturer: 'xiaomi',
    description: 'Доступный Smart TV с хорошим изображением. Имеются царапины на подставке, экран в норме.',
    specs: {
      screen: '43 дюйма 4K UHD',
      memory: 'Smart TV, Wi-Fi',
      color: 'Чёрный',
      warranty: '3 месяца',
    },
  },
  {
    id: '10',
    name: 'iPhone 11',
    price: 24990,
    oldPrice: 32990,
    type: 'Навигация',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600',
      'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=600',
    ],
    category: 'phones',
    condition: 'good',
    manufacturer: 'apple',
    description: 'Надёжный iPhone для повседневного использования. Хорошее состояние, все функции работают.',
    specs: {
      screen: '6.1 дюйма Liquid Retina',
      memory: '64 ГБ',
      color: 'Белый',
      warranty: '3 месяца',
    },
  },
  {
    id: '11',
    type: 'Навигация',
    name: 'Lenovo ThinkPad X1',
    price: 64990,
    oldPrice: 84990,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    ],
    category: 'laptops',
    condition: 'good',
    manufacturer: 'lenovo',
    description: 'Бизнес-ноутбук с отличной клавиатурой. Лёгкий, компактный, долго работает от батареи.',
    specs: {
      screen: '14 дюймов Full HD',
      memory: '256 ГБ SSD, 8 ГБ RAM',
      color: 'Чёрный',
      warranty: '6 месяцев',
    },
  },
  {
    id: '12',
    name: 'Sony KD-55X90J',
    type: 'Навигация',
    price: 59990,
    oldPrice: 79990,
    image: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400',
    images: [
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600',
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600',
    ],
    category: 'tvs',
    condition: 'excellent',
    manufacturer: 'sony',
    description: 'Телевизор Sony с превосходным качеством изображения. Cognitive Processor XR делает картинку живой.',
    specs: {
      screen: '55 дюймов 4K HDR, 120Hz',
      memory: 'Smart TV, Google TV',
      color: 'Чёрный',
      warranty: '12 месяцев',
    },
  },
  {
    id: '13',
    name: 'Huawei P40 Pro',
    price: 32990,
    type: 'Навигация',
    oldPrice: 44990,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600',
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600',
    ],
    category: 'phones',
    condition: 'good',
    manufacturer: 'huawei',
    description: 'Смартфон с лучшей камерой по мнению DXOMARK на момент выхода. Отличное состояние.',
    specs: {
      screen: '6.58 дюйма OLED, 90Hz',
      memory: '256 ГБ',
      color: 'Серебристый',
      warranty: '6 месяцев',
    },
  },
  {
    id: '14',
    name: 'ASUS ROG Zephyrus',
    price: 119990,
    type: 'Навигация',
    oldPrice: 149990,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600',
    ],
    category: 'laptops',
    condition: 'excellent',
    manufacturer: 'asus',
    description: 'Игровой ноутбук с RTX 3060. Тонкий корпус, мощное железо. Практически новый.',
    specs: {
      screen: '15.6 дюйма 144Hz Full HD',
      memory: '512 ГБ SSD, 16 ГБ RAM, RTX 3060',
      color: 'Чёрный',
      warranty: '6 месяцев',
    },
  },
  {
    id: '15',
    name: 'Samsung Galaxy Tab S7',
    price: 39990,
    oldPrice: 49990,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600',
      'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600',
    ],
    category: 'tvs',
    condition: 'good',
    type: 'Навигация',
    manufacturer: 'samsung',
    description: 'Планшет с S Pen в подарок. Отличный для рисования и заметок. В хорошем состоянии.',
    specs: {
      screen: '11 дюймов 120Hz TFT',
      memory: '128 ГБ, 6 ГБ RAM',
      color: 'Бронзовый',
      warranty: '3 месяца',
    },
  },
];

export const categories = [
  { id: 'laptops', name: 'Ноутбуки', count: products.filter(p => p.category === 'laptops').length },
  { id: 'phones', name: 'Смартфоны', count: products.filter(p => p.category === 'phones').length },
  { id: 'tvs', name: 'Телевизоры', count: products.filter(p => p.category === 'tvs').length },
];

export const conditions: { id: Condition; name: string }[] = [
  { id: 'excellent', name: 'Отличное' },
  { id: 'good', name: 'Хорошее' },
  { id: 'satisfactory', name: 'Удовлетворительное' },
];

export function getConditionLabel(condition: Condition): string {
  const found = conditions.find(c => c.id === condition);
  return found?.name || condition;
}
