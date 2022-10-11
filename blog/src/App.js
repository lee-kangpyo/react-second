
import './App.css';
import React, { useState } from 'react';


function App() {
 
  // 자료 잠깐 저장할 변수
  let posts = ["강남 우동 맛집", "강남 초밥 맛집"];
  const id = 'nav';
  const logo = "React Blog";

  let [titleList, setTitleList] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [likeIt, setLikeIt] = useState(0)
  let [isModalOpen, setModalState] = useState(false);
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={id} style={ {color:"red", fontSize:"16px"} }>{ logo }</h4>
      </div>
      <button onClick={() => {
        let copy = [...titleList];
        setTitleList(copy.sort());
        }}>정렬</button>
      {
        
      titleList.map( title => (
        <div className="list">
          <h4 onClick={() => {setModalState(true)} }>{title} <span onClick={() => {setLikeIt(likeIt + 1)}}>👍</span> {likeIt} </h4>
          <p>10월 6일 발행</p>
        </div>
      ))
      }
      {
        isModalOpen ? <Detail setModal={setModalState}/> : null
      }
      
    </div>
  );
}

function Detail(){
  return(
    <>
      <div className='detail'>
        <h4 >제목</h4>
        <p>날짜</p>
        <p>tkdtpsodyd</p>
      </div>
    </>
  );
}

export default App;
