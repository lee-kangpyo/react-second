// state를 저장하는 js 파일
import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './store/userSlice';


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
            debugger;
            const id = action.payload;
            let elem = state.find(function(el){
                if(el.id == id){
                    return el
                }
            })
            elem.count += 1
        },
        addCartItem(state, action){
            debugger;
            const item = action.payload;
            state.push({id : item.id, name : item.title, count: 1 });
            console.log(state)
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