import React, { useState, useEffect } from 'react';
import  styled  from 'styled-components';

let Box = styled.div`
    padding:50px;
    background-color:${props => props.rgb};
`

function LifeCyle (){
    let [isShow, setShow] = useState(true);
    let [count, setCount] = useState(0);

    useEffect(() => {
        let a = changeBox()
        return ()=>{
          clearTimeout(a)
        }
        
    }, []);

    function changeBox(){
        return setTimeout(() => {
            setShow(!isShow);
        }, 2000)
    }

    return (
        <>
            <h1>생명주기 사용하기 - useEffect</h1>
            <button onClick={() => {setCount(count + 1)}}>재 렌더링</button>
            {(isShow)?<Box rgb="red" />:<Box rgb="blue" />}
        </>
    )

}

export default LifeCyle