import { createSlice } from "@reduxjs/toolkit";

export const userComSlice = createSlice({
    name: 'userlike',

    initialState:{
        userComs: Math.floor(Math.random() * 10) + 1
    },

    reducers:{
        isAdded:(state)=>{
            state.userComs = state.userComs + 1
        },



    }
});

export const {isAdded}= userComSlice.actions;
export default userComSlice.reducer;