import {  createSlice } from "@reduxjs/toolkit";

const authSlice= createSlice({
    name:'auth',
    initialState:{value:localStorage.getItem('data')},
    reducers:{
        changeAuth:(state,action)=>{
state.value = action.payload
        }
    }
    
})

export default authSlice.reducer;
export const {changeAuth} = authSlice.actions