import { RootState } from '@/store';

export const selectDownloadItems = (state: RootState) =>
  state.download.downloadItems;
