import { configureStore } from "@reduxjs/toolkit";
import personaReducer from './slices/personaSlice';

export const store = configureStore({
    reducer:{
        persona:personaReducer,
    }
})