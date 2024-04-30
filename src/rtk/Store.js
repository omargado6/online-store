import { configureStore } from "@reduxjs/toolkit";
import Productslice from "./slices/ProductSlice";

export const store = configureStore({
    reducer: {
        product: Productslice ,
    }
})