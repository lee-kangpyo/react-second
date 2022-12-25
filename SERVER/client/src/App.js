import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [serverData, setServerData] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8080/test/getData').then((res) => {
      setServerData(res.data.value)
    })
  }, [])

  return (
    <div className="App">
      {serverData}
      <div>리액트로 만든 html</div>
    </div>
  );
}

export default App;
