import { Button, Container, Nav, Navbar, Row, Col  } from 'react-bootstrap';

import './App.css';
import bg from './img/bg.jpg';


function App() {
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
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
