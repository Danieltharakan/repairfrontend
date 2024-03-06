import { createSlice } from "@reduxjs/toolkit"



const selectedSlice=createSlice({
    name:'wishlist',
    initialState:[],//wishlist may have more than one item 
    reducers:{
        addToSelected:(state ,action )=>{
            state.push(action.payload)
        }
    }
        
    
})

export const {addToSelected} = selectedSlice.actions
export default selectedSlice.reducer