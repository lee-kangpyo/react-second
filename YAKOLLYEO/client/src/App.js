import './App.css';
import { useEffect, useState, lazy, Suspense } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import "./util/fcm";
import NotFoundPage from './pages/NotFoundPage';

import Login from './pages/LoginPage';

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
      <Login/>
      <Link to="/test">테스트로 이동</Link>
      <div>리액트로 만든 html</div>

      <Suspense>
        <Routes>
          <Route path='/' element={<><div>{serverData}</div><div>{yakollyeoData}</div></>}/>
          <Route path='/test' element={<><Link to="/">홈으로 이동</Link></>}/>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>

    </div>
  );
}

export default App;
