// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '../store/cartslice';

export default configureStore({
    reducer: {
        cart: CartSlice,
    }
})
