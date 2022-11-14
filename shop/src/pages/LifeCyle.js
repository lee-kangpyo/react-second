import React, { useState, useEffect } from 'react';
import  styled  from 'styled-components';

let Box = styled.div`
    padding:50px;
    background-color:${props => props.rgb};
`


// 클래스 라이프 사이클
class LifeCyleOld extends React.Component {
    componentDidMount(){/* 컴포넌트 Mount시 */}
    componentDidUpdate(){/* 컴포넌트 Update시 */}
    componentWillUnmount(){/* 컴포넌트 unMount시 */}
}

function LifeCyle (){
    let [isShow, setShow] = useState(true);
    let [count, setCount] = useState(0);
    let [inputVal, setInputVal] = useState();

    /*
        실행 시점이 렌더링이 다되고 나서 실행이됨
        오래걸리는 연산, 서버에서 데이터 가져오기, 타이머 사용할때 사용
        일단 렌더링 후 실행되기 때문에 유저가 느리다고 느끼지 않음.
        useEffect(() => { })               // mount 할때, update할때 실행
        useEffect(() => { }, [])           // mount 할때 실행 1회 실행
        useEffect(() => { }, [count])      // mount 할때, count 변수가 update할때 실행

        useEffect(() => { 
            useEffect 동작 코드 실행
            return () => {useEffect 동작 전에 실행(clean up function)} 
        }, [])
    */
    useEffect(() => {
        let a = changeBox()
        return ()=>{
          clearTimeout(a)
        }
        
    }, []);

    useEffect(() => {
        if(inputVal && !isNumeric(inputVal)) alert("그러지 마세용")
    }, [inputVal])

    function changeBox(){
        return setTimeout(() => {
            setShow(!isShow);
        }, 2000)
    }

    function isNumeric(num, opt){
        // 좌우 trim(공백제거)을 해준다.
        num = String(num).replace(/^\s+|\s+$/g, "");
        
        if(typeof opt == "undefined" || opt == "1"){
            // 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
            var regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
        }else if(opt == "2"){
            // 부호 미사용, 자릿수구분기호 선택, 소수점 선택
            var regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
        }else if(opt == "3"){
            // 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
            var regex = /^[0-9]+(\.[0-9]+)?$/g;
        }else{
            // only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
            var regex = /^[0-9]$/g;
        }
        
        if( regex.test(num) ){
            num = num.replace(/,/g, "");
            return isNaN(num) ? false : true;
        }else{ return false;  }
    }

    return (
        <>
            <h1>생명주기 사용하기 - useEffect</h1>
            {count}
            <button onClick={() => {setCount(count + 1)}}>재 렌더링</button>
            {(isShow)?<Box rgb="red" />:null}
            <input onChange={(e)=>{setInputVal(e.target.value)}} placeholder="숫자만 입력"/>
        </>
    )

}

export default LifeCyle