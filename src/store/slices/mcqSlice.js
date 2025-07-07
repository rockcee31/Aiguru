import  {createSlice} from '@reduxjs/toolkit';

const initialState ={
     mcq: []
}

const mcqSlice = createSlice({
        name: 'mcq',
        initialState,
        reducers:{
            setMcq:(state,action)=>{
                state.mcq = action.payload.mcq
            }
        }
})

export const {setMcq} = mcqSlice.actions
export default mcqSlice.reducer