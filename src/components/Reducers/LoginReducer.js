import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState:{
        userLogged: false
    },

    reducers:{
        isLogged:(state)=>{
            state.userLogged = true;
        },

        isNotLogged:(state)=>{
            state.userLogged = false;
        }

    }
});

export const {isLogged, isNotLogged }= loginSlice.actions;

export default loginSlice.reducer;