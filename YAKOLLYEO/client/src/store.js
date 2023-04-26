// state를 저장하는 js 파일
import { configureStore } from "@reduxjs/toolkit";
import landing from "./store/landingSlice";
import menubar from "./store/menubarSlice";

export default configureStore({
    reducer:{
        "landing":landing.reducer,
        "isShrinked":menubar.isShrinked,
        "menuList":menubar.menuList
    }
})