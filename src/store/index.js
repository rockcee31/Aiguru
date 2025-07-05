import { configureStore } from "@reduxjs/toolkit";
import personaReducer from './slices/personaSlice';
import mcqReducer from './slices/mcqSlice'
export const store = configureStore({
    reducer:{
        persona:personaReducer,
        mcq:mcqReducer
    }
})