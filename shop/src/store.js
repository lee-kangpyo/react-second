// state를 저장하는 js 파일
import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 보관하기 useState의 역할
// 리덕스에서는 state 하나를 slice라고 부름.
let user = createSlice({
    name:"user",
    initialState:"Lee",
})

let stock = createSlice({
    name:"stock",
    initialState:[10, 11, 12]
})

let cartList = createSlice({
    name:"cartList",
    initialState:[
        {id : 0, name : "white and Black", count : 2},
        {id : 2, name : "Grey Yordan", count : 1},
    ]
})

export default configureStore({
    reducer:{
        "user":user.reducer,
        "stock":stock.reducer,
        "cartList":cartList.reducer,
    }
})