import { configureStore } from "@reduxjs/toolkit";
import userReducer  from '../Components/users/userSlice'

//create store 
export default configureStore({
    reducer:{
       users:userReducer
    },
})