import { createSlice } from "@reduxjs/toolkit";
import Images from "../Images";

const initialState=[
    // {id:'1', title:'testing', story:'how i met my mother', picture:`${Images.Hero1}`, date:'march 22, 2020'},
    // {id:'2', title:'Be gone', story:'how i met my mother', picture:`${Images.Hero1}`, date:'march 21, 4320'},
    // {id:'31', title:'Bomber', story:'how i met my mother', picture:`${Images.Hero1}`, date:'march 22, 1820'}
];

export const userPostSlice = createSlice({
    name:'userpost',

    initialState,

    reducers:{
        addPost:(state, action)=>{
            state.push(action.payload)
            console.log(action.payload)
        },

        deleteUser:(state, action)=>{

            const{id} = action.payload;
            const existingUser = state.find(user =>user.id === id)

            if(existingUser){
                return state.filter(user => user.id !== id)
            }

        }
    }
})


export const {addPost, deleteUser} = userPostSlice.actions;
export default userPostSlice.reducer;