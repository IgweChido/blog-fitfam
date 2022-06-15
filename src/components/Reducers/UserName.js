import { createSlice } from "@reduxjs/toolkit";


export const userNameSlice = createSlice({
    name:'user',

    initialState:{
        username: ''
    },

    reducers:{
        isNamed:(state, action)=>{
           
           
            state.username = action.payload.username;
            
        }
    }
});

export const {isNamed} = userNameSlice.actions;
export default userNameSlice.reducer;