import { createSlice } from '@reduxjs/toolkit'

export const backImgSlice = createSlice({
    name: 'backimage',

    initialState:{
        backImg: null
    },

    reducers:{
        isThere:(state, action)=>{
            state.backImg = action.payload.setImg;
            console.log(action.payload.setImg)
            console.log(state.backImg)
        }
    }
})

export const {isThere} = backImgSlice.actions;
export default backImgSlice.reducer 