import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import downloadReducer from './features/download/downloadSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    download: downloadReducer
  }
});

// Tipos para o RootState e AppDispatch
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
