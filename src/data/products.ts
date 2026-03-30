export type Condition = 'excellent' | 'good' | 'satisfactory';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  manufacturer: string;
  type: string;

}

export const products: Product[] = [
  {
    id: '1',
    name: 'Панель оператора графическая СП307-Б',
    price: 4025,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/bb71b489-7ee2-4229-80de-5fcc37395df8',

    type: 'Навигация',
    manufacturer: 'Acme Corporation',

  },
  {
    id: '2',
    name: 'Потенциометр WDD35D4C1',
    price: 25920,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/6d9f1db6-f489-4666-a7a4-91da1ecea2a7',

    type: 'Автоматика',
    manufacturer: 'CIR',

  },
  
  {
    id: '15',
    name: 'Магнитный энкодер',
    price: 2875,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/d48e60be-5899-4d62-b246-51ae921f2bed',

    type: 'Автоматика',
    manufacturer: 'Acme Corporation',

  },
];





