import { configureStore } from "@reduxjs/toolkit";
import  backImgSlice  from "./Reducers/backImgReducer";
import loginSlice  from "./Reducers/LoginReducer";
import  userComSlice  from "./Reducers/NumberComments";
import userLikeSlice  from "./Reducers/NumberLikes";
import ShowLoginSlice  from "./Reducers/ShowLogin";
import  userNameSlice  from "./Reducers/UserName";
import  userPostSlice  from "./Reducers/UserPostReducer";


const Store = configureStore({
    reducer:{
        userloggedin : loginSlice,
        showLogin : ShowLoginSlice,
        usernames: userNameSlice,
        backimages: backImgSlice,
        userLike: userLikeSlice,
        userComm: userComSlice,
        userP: userPostSlice,

    }
})

export default Store