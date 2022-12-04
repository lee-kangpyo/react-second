import {  Container, Nav, Navbar  } from 'react-bootstrap';
import './App.css';


import React, { createContext, useEffect, useState } from 'react';

import shoesInfo from './data.js'

import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from './pages/Main';
import Detail from './pages/Detail';
import LifeCyle from './pages/LifeCyle';
import Cart from './pages/Cart';

import Loading from './component/Loading';

export let Context1 = createContext();

function App() {
  // 로컬 스토리지 사용법
  useEffect(() => {
    // 맨처음만 실행
    localStorage.setItem("watched", JSON.stringify([]));
  }, [])
  let object = {name:"kim"};
  localStorage.setItem("data", JSON.stringify(object))
  let jsonStr = localStorage.getItem("data")
  console.log(JSON.parse(jsonStr))
  // 로컬 스토리지 사용법

  let [shoes, setShoes] = useState(shoesInfo);
  let [stock] = useState([10, 11, 12])
  let [num, setNum] = useState(2);
  let [isLoadingShow, setLoadingShow] = useState(false);


  
  //페이지 이동을 도와주는 훅
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">삐에로쇼핑</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link href="#" onClick={()=>{navigate("/cart")}}>cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈으로 이동</Link>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} onAddShoes={onAddShoes} useNumState={[num, setNum]} setLoadingShow={setLoadingShow} />}/>
        <Route path='/detail/:id' element={
            <Context1.Provider value={{stock, shoes}}>
              <Detail shoes={shoes} />
            </Context1.Provider>
        } />
        <Route path="/cart" element={<Cart />}/>
        <Route path='/about' element={<About />} >
          <Route path='member' element={<><Outlet></Outlet><div>멤버소개</div></>}>
            <Route path='deep' element={<div>2중</div>} />
          </Route>
          <Route path='location' element={<div>회사위치</div>} />
        </Route>
        <Route path='/lifeCyle' element={<LifeCyle />} />
        <Route path='*' element={<div>404 error 없는 페이지입니다.</div>} />
      </Routes>
      
      <Loading isShow = {isLoadingShow} />
    </div>
  );

  function onAddShoes(shoesInfo){
    setShoes([...shoes, ...shoesInfo])
  }
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
