import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('Productslice/fetchproduct',
    async () => {
        const res = await fetch(`https://amzone-colne.onrender.com/products`);
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
        })
    }
})

// export const { } = Productslice.actions;
export default Productslice.reducer

