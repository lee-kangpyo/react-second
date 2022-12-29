import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRZULS5h5EQId8YMS3EdQLukBc9RKKkNo",
  authDomain: "react-test-8859b.firebaseapp.com",
  projectId: "react-test-8859b",
  storageBucket: "react-test-8859b.appspot.com",
  messagingSenderId: "590112413151",
  appId: "1:590112413151:web:4b1c25ca22779cea32606a",
  measurementId: "G-R7H81T74QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  const [serverData, setServerData] = useState("");
  const [yakollyeoData, setYakollyeoData] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/test/getData').then((res) => {
      setServerData(res.data.value)
    })
    axios.get('http://localhost:8080/test/getTestYak').then((res) => {
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
