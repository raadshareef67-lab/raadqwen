export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'men' | 'women' | 'boys' | 'girls';
  rating: number;
  reviews: number;
  colors: string[];
  description: string;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
