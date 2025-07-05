import  {createSlice} from '@reduxjs/toolkit';

const initialState ={
     mcq: ''
}

const mcqSlice = createSlice({
        name: 'mcq',
        initialState,
        reducers:{
            setMcq:()=>{
                state.user_id = action.payload.user_id
            }
        }
})

export const {setMcq} = mcqSlice.actions
export default mcqSlice.reducer