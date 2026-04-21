export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  images: string[];
  rating: number;
  reviewsCount: number;
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimited?: boolean;
  variants?: {
    name: string;
    options: string[];
  }[];
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}
