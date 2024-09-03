import { CartItem } from '@/domain/models/CartItem.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DownloadState } from '@/domain/models/DownloadState.model';

const initialState: DownloadState = {
  downloadItems: []
};

const downloadSlice = createSlice({
  name: 'download',
  initialState,
  reducers: {
    proceedToDownload: (state, action: PayloadAction<CartItem[]>) => {
      action.payload.forEach(cartItem => {
        const exists = state.downloadItems.find(
          item => item.id === cartItem.id
        );
        if (!exists) {
          state.downloadItems.push(cartItem);
        }
      });
    }
  }
});

export const { proceedToDownload } = downloadSlice.actions;

export default downloadSlice.reducer;
