import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMainProdAsync = createAsyncThunk("prod", async () => {
    const response = await axios.get(
        `https://fakestoreapi.com/products
        `
    )

    return response.data
})

const initialState = {

    mainProd: []

}

const mainProductSlice = createSlice({
    initialState,
    name: "mainProd",
    reducers: {
        setmainProd: (state,actions) => {
            state.mainProd.splice(actions.payload, 3)
        }
    },
    extraReducers: {
        [getMainProdAsync.pending]: (state) => {
            state.mainProd = null
        },
        [getMainProdAsync.fulfilled]: (state, action) => {
            state.mainProd = action.payload

        },
    }
})

export const selectProd = (state) => state.mainProd.mainProd

export const {setmainProd}= mainProductSlice.actions



export default mainProductSlice.reducer