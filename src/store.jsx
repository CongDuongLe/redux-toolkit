import { configureStore } from '@reduxjs/toolkit';
import  cartReducer from './features/cart/cartSlice';
import modalReducer from './features/layout/modalSlice';

// Create a store
export const store = configureStore({ 
    reducer: {
        cart : cartReducer, // cartReducer is the reducer from cartSlice.reducer
        modal : modalReducer, // modalReducer is the reducer from modalSlice.reducer
     },
    
 });