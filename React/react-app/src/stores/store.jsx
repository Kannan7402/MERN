import { configureStore } from "@reduxjs/toolkit";
import userReducer from './actions/userSlice';
import counterReducer from './actions/counterSlice'
import postsReducer from './actions/postSlice'

const store = configureStore({
    reducer :{
    counter: counterReducer,
    userInfo :userReducer,
    posts:postsReducer
    },
})
export default store;