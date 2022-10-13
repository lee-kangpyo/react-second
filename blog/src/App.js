
import './App.css';
import React, { useState } from 'react';


function App() {
 
  // 자료 잠깐 저장할 변수
  let posts = ["강남 우동 맛집", "강남 초밥 맛집"];
  const id = 'nav';
  const logo = "React Blog";

  let [titleList, setTitleList] = useState(["남자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
  let [likeIt, setLikeIt] = useState([0,0,0])
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
        
      titleList.map( (title, idx) => (
        <div className="list" key ={idx}>
          <h4 onClick={() => {setModalState(true)} }>{title} 
            <span onClick={()=>{chuchun(likeIt, idx, setLikeIt)}}>👍</span> {likeIt[idx]} 
          </h4>
          <p>10월 6일 발행</p>
        </div>
      ))
      }
      {
        isModalOpen ? <Detail title={titleList} color='skyblue' onbtnClick={onbtnClick}/> : null
      }
      
    </div>
  );

  function onbtnClick(){
    titleList[0] = "여자 코트 추천";
    setTitleList([...titleList])
  }
}

function chuchun(likeIt, idx, setLikeIt){
  likeIt[idx] = likeIt[idx] + 1;
  setLikeIt([...likeIt])
}

function Detail(props){
  return(
    <>
      <div className='detail' style={{background:props.color}}>
        <h4 >{props.title[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.onbtnClick}>글수정</button>
      </div>
    </>
  );
}

export default App;
