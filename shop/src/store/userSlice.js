import { createSlice } from "@reduxjs/toolkit";

// state 보관하기 useState의 역할
// 리덕스에서는 state 하나를 slice라고 부름.
let user = createSlice({
    name:"user",
    initialState:{name:"Lee", age:10},
    reducers:{
        changeName(state){
            state.name = "park"
        },
        addAge(state, action){
            let num = action.payload
            state.age += num
        }
    }
})

//외부에서 reducer를 사용하기위해 export
export let { changeName, addAge } = user.actions

export default user;