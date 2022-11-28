// state를 저장하는 js 파일
import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 보관하기 useState의 역할
// 리덕스에서는 state 하나를 slice라고 부름.
let user = createSlice({
    name:"user",
    initialState:"Lee",
    reducers:{
        changeName(state){
            return "john "+state;
        }
    }
})
//외부에서 reducer를 사용하기위해 export
export let {changeName} = user.actions

let stock = createSlice({
    name:"stock",
    initialState:[10, 11, 12]
})

let cartList = createSlice({
    name:"cartList",
    initialState:[
        {id : 0, name : "white and Black", count : 2},
        {id : 2, name : "Grey Yordan", count : 1},
    ],
    reducers:{
        addCount(state, action){
            const idx = action.payload;
            state[idx].count = state[idx].count + 1
            return state
        }
    }
})
export let { addCount } = cartList.actions

export default configureStore({
    reducer:{
        "user":user.reducer,
        "stock":stock.reducer,
        "cartList":cartList.reducer,
    }
})