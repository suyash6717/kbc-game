import { createSlice } from "@reduxjs/toolkit";

export const currentIndexSlice = createSlice({
    name:'currentIndex',
    initialState:{
        value: 0,
        prizeAmount: 0,
    },
    reducers:{
        setIndex: (state,action) => {
            state.value = action.payload;
        },
        setAmount: (state,action) => {
            state.prizeAmount = action.payload;
        }
    }
})

export const { setIndex, setAmount } = currentIndexSlice.actions;
export default currentIndexSlice.reducer;