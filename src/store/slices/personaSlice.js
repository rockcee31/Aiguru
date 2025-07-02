import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name:'',
    about:'',
    image:'',
    started:false,
}

const personaSlice = createSlice({
    name:'persona',
    initialState,
    reducers:{
        setPersona:(state,action) =>{
            state.name=action.payload.name;
            state.about = action.payload.about;
            state.image = action.payload.image

        },
        setStarted:(state,action)=>{
                state.started = action.payload;
        }
    }
})

export const{setPersona,setStarted} = personaSlice.actions;
export default personaSlice.reducer;