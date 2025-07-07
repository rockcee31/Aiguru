import { createSlice } from "@reduxjs/toolkit";
// this  slice is for storing user selected answer
const initialState = {
        ques:[]
    }

const quesSlice = createSlice({
    name:'ques',
    initialState,
    reducers:{
        setQues:(state,action)=>{
            state.ques = action.payload.selectedoptions
        }

    }
})
export const {setQues} = quesSlice.actions
export default  quesSlice.reducer