import { Button, Container, Nav, Navbar, Row, Col  } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.jpg';

import React, { useState } from 'react';

import shoesInfo from './data.js'


function App() {

  let [shoes, setShoes] = useState(shoesInfo);

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
        <Col md={4}>
            <img src={process.env.PUBLIC_URL + "/shoes1.jpg"} width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </Col>
          <Col md={4}>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </Col>
          <Col md={4}>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
