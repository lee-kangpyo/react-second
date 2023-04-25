import { createSlice } from "@reduxjs/toolkit";

let isShrinked = createSlice({
    name:"isShrinked",
    initialState:false,
    reducers:{
        changeShrinkState(state, action){
            return action.payload;
        }
    }
})

export let { changeShrinkState } = isShrinked.actions;

export default {
    isShrinked : isShrinked.reducer,
}