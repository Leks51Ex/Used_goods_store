import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

interface Product {
  id: string;
  title: string;
  manufacturer: string;
  type: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Панель оператора графическая СП307-Б',
    manufacturer: 'Acme Corporation',
    type: 'navigation',
    price: 4025,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/bb71b489-7ee2-4229-80de-5fcc37395df8',
  },
  {
    id: '2',
    title: 'Потенциометр WDD35D4C1',
    manufacturer: 'CIR',
    type: 'automation',
    price: 25920,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/6d9f1db6-f489-4666-a7a4-91da1ecea2a7',
  },
  {
    id: '3',
    title: 'Магнитный энкодер',
    manufacturer: 'Acme Corporation',
    type: 'automation',
    price: 2875,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/d48e60be-5899-4d62-b246-51ae921f2bed',
  },
  {
    id: '4',
    title: 'Эхолот Samyung SES-2000',
    manufacturer: 'CIR',
    type: 'gyrocompass',
    price: 3000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },
  {
    id: '5',
    title: 'Гирокомпас Tokyo Keiki TG-6000',
    manufacturer: 'Tokyo Keiki',
    type: 'gyrocompass',
    price: 15000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },
  {
    id: '6',
    title: 'Навигационная система NS-2000',
    manufacturer: 'Tokyo Keiki',
    type: 'navigation',
    price: 25000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/bb71b489-7ee2-4229-80de-5fcc37395df8',
  },
  {
    id: '7',
    title: 'Автоматический регулятор AR-100',
    manufacturer: 'Acme Corporation',
    type: 'automation',
    price: 8500,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/d48e60be-5899-4d62-b246-51ae921f2bed',
  },
  {
    id: '8',
    title: 'Радар RC-1800',
    manufacturer: 'CIR',
    type: 'navigation',
    price: 45000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },
  {
    id: '9',
    title: 'ТЕСТ',
    manufacturer: 'new company!',
    type: 'test type!',
    price: 45000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },

  {
    id: '10',
    title: 'ТЕСТ2',
    manufacturer: 'new company!',
    type: 'test type!',
    price: 45000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },
  {
    id: '11',
    title: 'ТЕСТ3',
    manufacturer: 'new company!',
    type: 'test type!',
    price: 45000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },
  {
    id: '12',
    title: 'ТЕСТ4',
    manufacturer: 'new company!',
    type: 'test type!',
    price: 45000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },
  {
    id: '13',
    title: 'ТЕСТ5',
    manufacturer: 'test!!!!',
    type: 'test type!',
    price: 45000,
    image: 'https://miniature-prod.moysklad.ru/miniature/47c7802d-75ff-11e9-9109-f8fc0000086a/documentminiature/8e52e943-7d05-412b-98d8-41433a18ffe4',
  },

];

app.get('/api/products', (req, res) => {
  const { type, subtype, manufacturer, page = '1', limit = '10' } = req.query;
  
  let filtered = [...products];

  if (type) {
    filtered = filtered.filter(p => p.type === type);
  }
  if (subtype) {
    filtered = filtered.filter(p => p.type === subtype);
  }
  if (manufacturer) {
    filtered = filtered.filter(p => p.manufacturer === manufacturer);
  }

  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const start = (pageNum - 1) * limitNum;
  const end = start + limitNum;

  const paginated = filtered.slice(start, end);

  res.json({
    data: paginated,
    total: filtered.length,
    page: pageNum,
    limit: limitNum,
    totalPages: Math.ceil(filtered.length / limitNum),
  });
});

app.get('/api/products/types', (req, res) => {
  const types = [...new Set(products.map(p => p.type))];
  res.json(types);
});

app.get('/api/products/manufacturers', (req, res) => {
  const manufacturers = [...new Set(products.map(p => p.manufacturer))];
  res.json(manufacturers);
});

app.listen(PORT, () => {
  console.log(`Mock API server running at http://localhost:${PORT}`);
});
