import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProdAsync = createAsyncThunk("prod", async () => {
    const response = await axios.get(
        `https://fakestoreapi.com/products
        `
    )

    return response.data
})

const initialState = {

    prod: []

}

const productSlice = createSlice({
    initialState,
    name: "products",
    extraReducers: {
        [getProdAsync.pending]: (state) => {
            state.prod = null
        },
        [getProdAsync.fulfilled]: (state, action) => {
            state.prod = action.payload
        },
    },
})

export const selectProd = (state) => state.products.prod




export default productSlice.reducer
