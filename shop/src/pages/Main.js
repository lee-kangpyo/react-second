import React from 'react';
import '../App.css';
import { Container, Row } from 'react-bootstrap';
import bg from '../img/bg.jpg';
import Item from './../component/Item';

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
        </>
    )
}

export default Main;