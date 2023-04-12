// state를 저장하는 js 파일
import { configureStore } from "@reduxjs/toolkit";
import landing from "./store/landingSlice";

export default configureStore({
    reducer:{
        "landing":landing.reducer,
    }
})