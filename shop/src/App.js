import {  Container, Nav, Navbar, Row  } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';

import React, { useState } from 'react';

import shoesInfo from './data.js'
import Item from './component/Item'


function App() {

  let [shoes] = useState(shoesInfo);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">삐에로쇼핑</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{backgroundImage:'url('+bg+')'}}></div>
      <Container>
        <Row>
          {
            shoes.map(function(el, idx){
              return <Item shoes={el} ix={ idx + 1 }/>
            })            
          }
          
        </Row>
      </Container>
    </div>
  );
}



export default App;
