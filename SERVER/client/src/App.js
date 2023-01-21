import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import "./util/fcm";


function App() {

  const [serverData, setServerData] = useState("");
  const [yakollyeoData, setYakollyeoData] = useState("");
  //const [isTokenFound, setTokenFound] = useState(false);
  //getToken(setTokenFound);



  useEffect(() => {
    // express 에서 값 받아오기
    axios.get('http://localhost:8080/test/getData').then((res) => {
      setServerData(res.data.value)
    })
    // 약올려 db에서 값 받아보기
    axios.get('http://localhost:8080/test/getTestYak?cstCl=PH').then((res) => {
      setYakollyeoData(JSON.stringify(res.data.recordset))
    })
  }, [])

  return (
    <div className="App">
      
      <div>리액트로 만든 html</div>
      <div>{serverData}</div>
      <div>{yakollyeoData}</div>
    </div>
  );
}

export default App;
