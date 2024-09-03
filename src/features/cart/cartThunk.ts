import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@/domain/models/Product.model';

export const fetchProducts = createAsyncThunk<Product[]>(
  'cart/fetchProducts',
  async () => {
    try {
      const response = await axios.get('src/data/books.json');
      return response.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);
