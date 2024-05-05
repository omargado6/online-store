import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk('Productslice/fetchproduct',
    async () => {
        const res = await fetch(`https://amzone-colne.onrender.com/products`);
        const data = await res.json();
        return data;
    }
)

export const fetchProductId = createAsyncThunk('Productslice/fetchproductId',
    async (productId) => {
        const res = await fetch(`https://amzone-colne.onrender.com/products/${productId}`);
        const data = await res.json();
        return data;
    }
)
export const fetchProductCategory = createAsyncThunk('Productslice/fetchproductCategory',
    async (category) => {
        const res = await fetch(`https://amzone-colne.onrender.com/products/${category}`);
        const data = await res.json();
        return data;
    }
)


const Productslice = createSlice({
    initialState: [],
    name: "Productslice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchProductCategory.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(fetchProductId.fulfilled, (state, action) => {
            return action.payload;
        });
    }
})

export default Productslice.reducer

