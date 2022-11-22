import React from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';
import bg from '../img/bg.jpg';
import Item from './../component/Item';
import axious from "axios";

function Main(props){
    let [num, setNum] = props.useNumState;
    return(
        <>
        <div className='main-bg' style={{backgroundImage:'url('+bg+')'}}></div>
        <Container>
            <Row>
            {
                props.shoes.map(function(el, idx){
                    return <Item shoes={el} ix={ idx + 1 }/>
                })            
            }
            </Row>
        </Container>

        {   num < 5 &&
            <button onClick={()=>{
                if(num < 4){
                    props.setLoadingShow(true)
                    axious.get('https://codingapple1.github.io/shop/data'+num+'.json')
                    .then((result)=>{ 
                        props.onAddShoes(result.data);
                        setNum(num+1);
                        props.setLoadingShow(false)
                    })
                    .catch(() => {
                        console.log("ajax 요청이 실패했습니다.");
                        props.setLoadingShow(false)
                    })
                } else{
                    alert("더 이상 상품이 없음")
                    setNum(num+1);
                }

                //post 전송하는법
                /*
                axious.post('/url', {name:"lee"});

                Promise.all([axious.get("/url1"), axious.get("/url2") ])
                .then(()=>{
                    // 두 요청이 성공했을때 실행
                })
                // JSON 데이터는 문자취급을 받아서 http 요청으로 주고받을수 있음
                */

                
            }}>더보기</button>
        }
        </>
    )
}

export default Main;