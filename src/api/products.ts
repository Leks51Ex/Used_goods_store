const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface Product {
  id: string;
  title: string;
  manufacturer: string;
  type: string;
  price: number;
  image: string;
}

export interface ProductsResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export async function fetchProducts(params: {
  type?: string;
  subtype?: string;
  manufacturer?: string;
  page?: number;
  limit?: number;
} = {}): Promise<ProductsResponse> {
  const queryParams = new URLSearchParams();
  
  if (params.type) queryParams.set('type', params.type);
  if (params.subtype) queryParams.set('subtype', params.subtype);
  if (params.manufacturer) queryParams.set('manufacturer', params.manufacturer);
  if (params.page) queryParams.set('page', String(params.page));
  if (params.limit) queryParams.set('limit', String(params.limit));

  const url = `${API_URL}/products${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export async function fetchTypes(): Promise<string[]> {
  const response = await fetch(`${API_URL}/products/types`);
  if (!response.ok) {
    throw new Error('Failed to fetch types');
  }
  return response.json();
}

export async function fetchManufacturers(): Promise<string[]> {
  const response = await fetch(`${API_URL}/products/manufacturers`);
  if (!response.ok) {
    throw new Error('Failed to fetch manufacturers');
  }
  return response.json();
}
