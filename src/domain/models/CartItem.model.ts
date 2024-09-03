import { Product } from './Product.model';

export type CartItem = Product & {
  quantity: number;
};
