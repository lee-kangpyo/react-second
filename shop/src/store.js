// state를 저장하는 js 파일
import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice';
import { useNavigate } from 'react-router-dom';

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
            const id = action.payload;
            let elem = state.find((el) => { return el.id == id })
            elem.count += 1
        },
        addCartItem(state, action){
            state.push(action.payload);
        }
    }
})
export let { addCount, addCartItem } = cartList.actions

export default configureStore({
    reducer:{
        "user":user.reducer,
        "stock":stock.reducer,
        "cartList":cartList.reducer,
    }
})