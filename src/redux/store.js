import { configureStore } from "@reduxjs/toolkit";
import selectedSlice from "./slices/selectedSlice";




const store =configureStore({
    reducer:{
           selectedReducer:selectedSlice
    }
    
})
export default store;