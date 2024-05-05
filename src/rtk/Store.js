import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
    reducer: {
        product: Productslice,
        cart: CartSlice
    }
})