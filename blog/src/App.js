
import './App.css';
import React, { useState } from 'react';


function App() {
 
  // 자료 잠깐 저장할 변수
  let posts = ["강남 우동 맛집", "강남 초밥 맛집"];
  const id = 'nav';
  const logo = "React Blog";

  let [titleList, setTitleList] = useState([{"title":"남자 코트 추천", "ymd":"2022년 10월 6일"}, {"title":"강남 우동맛집", "ymd":"2022년 10월 6일"}, {"title":"파이썬 독학", "ymd":"2022년 10월 6일"}]);
  let [titleIdx, settitleIdx] = useState(0);
  let [likeIt, setLikeIt] = useState([0,0,0])
  let [isModalOpen, setModalState] = useState(false);
  let [inputVal, setinputVal] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={id} style={ {color:"red", fontSize:"16px"} }>{ logo }</h4>
      </div>
      <button onClick={() => {
            let copy = [...titleList];
            setTitleList(copy.sort(function(a, b){
              if (a.title > b.title) {
                return 1;
              }
              if (a.title < b.title) {
                return -1;
              }
              return 0;
            }));
        }}>정렬</button>
      {
      titleList.map( (item, idx) => (
        <div className="list" key ={idx}>
          <h4 onClick={() => {setModalState(true); settitleIdx(idx)} }>
            {item.title} 
            <span onClick={(e)=>{e.stopPropagation();chuchun(likeIt, idx, setLikeIt)}}>👍</span> {likeIt[idx]} 
            <button onClick={(e)=>{e.stopPropagation();onDelBtnClick(idx)}}>삭제</button>
          </h4>
          <p>{item.ymd}</p>
        </div>
      ))
      }
      <input onChange={(e)=>{setinputVal(e.target.value)}} />
      <button onClick={onAddBtnClick}>입력</button>
      {
        isModalOpen ? <Detail ymd={titleList[titleIdx].ymd} title={titleList[titleIdx].title} color='skyblue' onbtnClick={onbtnClick}/> : null
      }
      
      <Modal />
    </div>
    
  );

  function onDelBtnClick(idx){
    setModalState(false);
    var newtitleList = titleList.filter(function(val, i){
      if(i !== idx) return val
    });
    likeIt.splice(idx, 1);
    
    setTitleList([...newtitleList])
    setLikeIt([...likeIt])
    settitleIdx(0)
  }
  function onAddBtnClick(){
    if(inputVal){
      let today = new Date();  
      setTitleList([{title:inputVal, ymd:today.getFullYear()+"년 "+String(today.getMonth()+1)+"월 "+today.getDate()+"일"}, ...titleList])
      setLikeIt([0, ...likeIt])
    }else{
      alert("값을 입력해주세요")
    }
    
  }
  function onbtnClick(){
    titleList[0].title = "여자 코트 추천";
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
        <h4 >{props.title}</h4>
        <p>{props.ymd}</p>
        <p>상세내용</p>
        <button onClick={props.onbtnClick}>글수정</button>
      </div>
    </>
  );
}

class Modal extends React.Component{
  constructor(props){     //부모 요소에서 보내는 값은 여기서props
    super(props);
    this.state = {
      name:"kim",
      age:100,
    }
  }

  render(){
    return(
      <>
        <div>클래스형 컴포넌트 {this.state.name} {this.state.age}</div>
        <button onClick={()=>{
          this.setState({age:10});
        }}>버튼</button>
      </>
    )
  }
}

export default App;
