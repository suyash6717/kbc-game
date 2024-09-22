import { configureStore } from "@reduxjs/toolkit";
import currentIndexReducer from "./slice/currentIndexSlice";

export const store = configureStore({
    reducer:{
        currentIndex: currentIndexReducer,
    }
})