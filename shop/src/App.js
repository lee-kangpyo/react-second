import {  Container, Nav, Navbar, Row  } from 'react-bootstrap';
import './App.css';


import React, { useState } from 'react';

import shoesInfo from './data.js'
import Item from './component/Item'

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from './pages/Main';
import Detail from './pages/Detail';


function App() {

  let [shoes] = useState(shoesInfo);
  
  //페이지 이동을 도와주는 훅
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">삐에로쇼핑</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link href="#" onClick={()=>{navigate("/detail")}}>detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈으로 이동</Link>


      <Routes>
        <Route path='/' element={<Main shoes={shoes} />}/>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
        <Route path='/about' element={<About />} >
          <Route path='member' element={<><Outlet></Outlet><div>멤버소개</div></>}>
            <Route path='deep' element={<div>2중</div>} />
          </Route>
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
        <Route path='*' element={<div>404 error 없는 페이지입니다.</div>} />

      </Routes>
      
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보 폐이지</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
