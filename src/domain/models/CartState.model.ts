import { Product } from './Product.model';
import { CartItem } from './CartItem.model';

export interface CartState {
  products: Product[];
  error: string | null;
  cartItems: CartItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}
