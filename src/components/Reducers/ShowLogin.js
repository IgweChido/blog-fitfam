import {createSlice} from '@reduxjs/toolkit'

export const ShowLoginSlice = createSlice({
    name: 'showlogin',
    initialState:{
        showLog: false
    },

    reducers:{

        isShowing:(state)=>{
            state.showLog = true;
        },

        isNotShowing:(state)=>{
            state.showLog = false;
        }
    }

});

export const {isShowing, isNotShowing} = ShowLoginSlice.actions;
export default ShowLoginSlice.reducer;