import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import {apiSlice} from './slices/apiSlice';
import { listingApiSlice } from './slices/listingSlice';

const store = configureStore({
    reducer: {
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
      [listingApiSlice.reducerPath]: listingApiSlice.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, listingApiSlice.middleware),
    devTools : true,
});

export default store;

