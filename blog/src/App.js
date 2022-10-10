
import './App.css';
import React, { useState } from 'react';


function App() {
 
  // 자료 잠깐 저장할 변수
  let posts = ["강남 우동 맛집", "강남 초밥 맛집"];
  const id = 'nav';
  const logo = "React Blog";

  let [titleList, b] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={id} style={ {color:"red", fontSize:"16px"} }>{ logo }</h4>
      </div>
      {
      titleList.map( title => (
        <div className="list">
          <h4>{title}</h4>
          <p>10월 6일 발행</p>
        </div>
      ))
      }
    </div>
  );
}

export default App;
