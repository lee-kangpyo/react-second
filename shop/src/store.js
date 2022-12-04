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
        minusCount(state, action){
            const id = action.payload;
            let elem = state.find((el) => { return el.id == id })
            let cnt = elem.count - 1;
            if(cnt - 1 < 0){
                alert("주문 수량은 1보다 작을수 없습니다.")
            }else{
                elem.count= cnt;
            }

        },
        addCartItem(state, action){
            state.push(action.payload);
        },
        removeCartItem(state, action){
            const id = action.payload;
            return state.filter((el) => { return el.id != id })
        }
    }
})
export let { addCount, minusCount, addCartItem, removeCartItem } = cartList.actions

export default configureStore({
    reducer:{
        "user":user.reducer,
        "stock":stock.reducer,
        "cartList":cartList.reducer,
    }
})