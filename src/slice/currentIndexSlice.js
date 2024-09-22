import { createSlice } from "@reduxjs/toolkit";

export const currentIndexSlice = createSlice({
    name:'currentIndex',
    initialState:{
        value: 0,
        isGameOver: false,
    },
    reducers:{
        setIndex: (state,action) => {
            state.value = action.payload;
        },
        setGameStatus: (state,action) => {
            state.isGameOver = action.payload;
        },
    }
})

export const { setIndex, setGameStatus } = currentIndexSlice.actions;
export default currentIndexSlice.reducer;