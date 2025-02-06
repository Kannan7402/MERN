import { configureStore } from "@reduxjs/toolkit";
import userReducer from './actions/slice';

const store = configureStore({
    reducer :{
    userInfo :userReducer,
    },
})
export default store;