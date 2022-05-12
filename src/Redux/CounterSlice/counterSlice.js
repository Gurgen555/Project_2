import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 1,
}

const counterSlice = createSlice({
    initialState,
    name: "counter",
    reducers:{
        setCount:(state) => {
            state.count = state.count + 1
        },
        minusCount:(state) => {
            state.count = state.count - 1
        }
    }
})
export const {setCount, minusCount} = counterSlice.actions
export const selectCount = (state) => state.counter.count
export default counterSlice.reducer