import { productsSlice } from './slices/productsSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: productsSlice.reducer,
});

export default store;
