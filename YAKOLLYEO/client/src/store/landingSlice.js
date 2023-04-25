import { createSlice } from "@reduxjs/toolkit";

let landing = createSlice({
    name:"landing",
    initialState:{
        "top_frame":{
            "title":"약국에",
            "title2":"혜택을 더:드림",
            "icon":"bg-yak_0",
            "iconInfo":"약국 훅",
            "contents":[
                {
                    "title":'<span class="highlight">7프로 혜택</span> 드려요',
                    "contents":"금융비 1.8% + 카드적립 1.2% + 몰지원 1% + 추가적립 3%",
                    "icon":"bg-yak_1"
                },
                {
                    "title":'<span class="highlight">유효임박재고</span> 사면 더많은 혜택 드려요',
                    "contents":"최대 20% 혜택",
                    "icon":"bg-yak_2"
                },
                {
                    "title":'첫구매하면<br>최대<span class="highlight">100만원</span>드려요',
                    "contents":"가입시 예치금 5만원<br>+ 주문시 100만원 당<br>5만원 상품권",
                    "icon":"bg-yak_3"
                },
                {
                    "title":'약국 <span class="highlight"><span name="PH">500</span>곳</span>에서',
                    "contents":"이 모든 혜택을 누리고<br>있습니다.",
                    "icon":"bg-yak_4"
                },
                

            ],
        },
        
        "bottom_frame":{
            "title":"도매에",
            "title2":"마진을 더:드림",
            "icon":"bg-wh_0",
            "iconInfo":"도매 훅",
            "contents":[
                {
                    "title":"약국 500곳에서 여러분의 재고를 원해요",
                    "contents":"약국에 팔면 도매 판매보다 최소 2% 마진 상승",
                    "icon":"bg-wh_1"
                },
                {
                    "title":"유효임박재고신속히 팔아드려요",
                    "contents":"평균 일주일 소요",
                    "icon":"bg-wh_2"
                },
                {
                    "title":"약국 판매해도채권, 직납없어요",
                    "contents":"판매 5일후 바로 수금",
                    "icon":"bg-wh_3"
                },
                {
                    "title":"도매 700곳에서",
                    "contents":"이 모든 혜택을 누리고 있습니다.",
                    "icon":"bg-wh_4"
                }
            ],
        }
    },
    reducers:{
        check(state, action){
            console.log(state[action.payload])
        },
    }
})

//외부에서 reducer를 사용하기위해 export
export let { check } = landing.actions;

export default landing;