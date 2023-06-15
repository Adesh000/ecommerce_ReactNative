import { configureStore } from "@reduxjs/toolkit";
import WishListReducer from "./slices/WishListSlice";
import ProductReducer from './slices/ProductSlice'
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    wishlist: WishListReducer
  }
  
})