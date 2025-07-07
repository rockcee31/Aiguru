import { configureStore } from "@reduxjs/toolkit";
import personaReducer from './slices/personaSlice';
import mcqReducer from './slices/mcqSlice'
import quesReducer from './slices/quesSlice'
export const store = configureStore({
    reducer:{
        persona:personaReducer,
        mcq:mcqReducer,
        ques:quesReducer
    }
})