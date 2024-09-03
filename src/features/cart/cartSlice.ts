import { fetchProducts } from './cartThunk';
import { Product } from '@/domain/models/Product.model';
import { CartState } from '@/domain/models/CartState.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  error: null,
  products: [],
  cartItems: [],
  status: 'idle'
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const product = state.products.find(prod => prod.id === action.payload);
      if (product) {
        const existingItemIndex = state.cartItems.findIndex(
          item => item.id === action.payload
        );

        if (existingItemIndex !== -1) {
          state.cartItems[existingItemIndex] = {
            ...state.cartItems[existingItemIndex],
            quantity: state.cartItems[existingItemIndex].quantity + 1
          };
        } else {
          state.cartItems = [...state.cartItems, { ...product, quantity: 1 }];
        }
      }
    },
    subtractFromCart: (state, action: PayloadAction<string>) => {
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload
      );

      if (existingItemIndex !== -1) {
        if (state.cartItems[existingItemIndex].quantity > 1) {
          state.cartItems[existingItemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(existingItemIndex, 1);
        }
      }
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },
    emptyCart: state => {
      state.cartItems = [];
    },
    setItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;

      const itemIndex = state.cartItems.findIndex(item => item.id === id);

      if (itemIndex !== -1) {
        if (quantity > 0) {
          state.cartItems[itemIndex].quantity = quantity;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      } else if (quantity > 0) {
        const product = state.products.find(prod => prod.id === id);
        if (product) {
          state.cartItems.push({ ...product, quantity });
        }
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.status = 'succeeded';
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to load products';
      });
  }
});

export const {
  emptyCart,
  addToCart,
  setItemQuantity,
  subtractFromCart,
  removeItemFromCart
} = cartSlice.actions;

export default cartSlice.reducer;
