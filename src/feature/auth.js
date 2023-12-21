import {  createSlice } from "@reduxjs/toolkit";

const authSlice= createSlice({
    name:'auth',
    initialState:{value:localStorage.getItem('data')},
    reducers:{
        changeAuth:(state)=>{
state.value = localStorage.getItem('data')
        }
    }
    
})

export default authSlice.reducer;
export const {changeAuth} = authSlice.actions