import React from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';
import bg from '../img/bg.jpg';
import Item from './../component/Item';
import axious from "axios";

function Main(props){
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
        <button onClick={()=>{
            axious.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
                console.log("sadf");
                props.onAddShoes(result.data);
            })
            .catch(() => {
                console.log("ajax 요청이 실패했습니다.");
            })

        }}>버튼</button>
        </>
    )
}

export default Main;