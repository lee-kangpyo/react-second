import './App.css';
import { useEffect, useState, lazy, Suspense } from 'react';

import axios from 'axios';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import "./util/fcm";
import NotFoundPage from './pages/NotFoundPage';

import Login from './pages/LoginPage';
import Home from './pages/HomePage';



function App() {
  const [serverData, setServerData] = useState("");
  const [yakollyeoData, setYakollyeoData] = useState("");
  //const [isTokenFound, setTokenFound] = useState(false);
  //getToken(setTokenFound);

  useEffect(() => {
    // express 에서 값 받아오기
    axios.get('/test/getData').then((res) => {
      setServerData(res.data.value)
    })
    // 약올려 db에서 값 받아보기
    axios.get('/test/getTestYak?cstCl=PH').then((res) => {
      setYakollyeoData(JSON.stringify(res.data.recordset[0]))
    })
  }, [])

  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          
          <Route path='/test' element={<><div>{serverData}</div><div>{yakollyeoData}</div></>}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
