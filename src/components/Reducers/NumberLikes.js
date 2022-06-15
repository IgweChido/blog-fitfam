import { createSlice } from "@reduxjs/toolkit";

export const userLikeSlice = createSlice({
    name: 'userlike',

    initialState:{
        userLikes: Math.floor(Math.random() * 1000) + 1
    },

    reducers:{
        isPlus:(state)=>{
            state.userLikes = state.userLikes + 1
        },

        isMinus:(state)=>{
            state.userLikes = state.userLikes - 1
        },


    }
});

export const {isPlus, isMinus}= userLikeSlice.actions;
export default userLikeSlice.reducer;