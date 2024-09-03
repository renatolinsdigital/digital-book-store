import { RootState } from '@/store';

export const selectCartTotal = (state: RootState) => {
  return state.cart.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const selectTotalItemsInCart = (state: RootState) => {
  return state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
};

export const selectItemQuantityById = (state: RootState, itemId: string) => {
  const item = state.cart.cartItems.find(cartItem => cartItem.id === itemId);
  return item ? item.quantity : 0;
};
