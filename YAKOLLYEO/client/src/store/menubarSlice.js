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

let menuList = createSlice({
    name:"menuList",
    initialState:[
        {
            text:"주문",
            underLine:true,
            icon:"MdOutlineShoppingCart"
        },
        {
            text:"주문 / 배송 상태",
            underLine:true,
            icon:"TbTruck"
        },
        {
            text:"거래원장",
            underLine:true,
            icon:"RiNewspaperLine"
        },
        {
            text:"커텍트 디아이",
            underLine:false,
            icon:"RiGlobalLine"
        },
    ]
})

export let { changeShrinkState } = isShrinked.actions;

export default {
    isShrinked : isShrinked.reducer,
    menuList:menuList.reducer,
}