import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    initialState: [],
    name: 'Cartslice',
    reducers: {
        addProduct: (state, action) => { 
            const findproduct = state.find((el) => el.id === action.payload.id);
            if (findproduct) {
                findproduct.quantity += 1;
            } else {
                const productclone = { ...action.payload, quantity: 1 }
                state.push(productclone);
            }
        },
        deleteProduct: (state, action) => {
            return state.filter((product)=> product.id !== action.payload.id)
         },
        clear: () => {
            return []
         }
    }
})

export const { addProduct, deleteProduct , clear} = Cartslice.actions;
export default Cartslice.reducer;
