import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';

let CustomBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

let NewBtn = styled(CustomBtn)`
    padding : 30px;
`

let BlackBox = styled.div`
    background : grey;
    padding : 20px;
`

function Detail(props) {
    let {id} = useParams();
    let [tapNum, setTapNum] = useState(0);

    const shoes = props.shoes.filter((el) => el.id == id);
    const isEmpty = shoes.length == 0;

    if(isEmpty){
        return <div className='container'>해당하는 상품이 없습니다.</div>
    }else{
        return(
            <div className='container'>
                <BlackBox>
                    <NewBtn bg="yellow">버튼</NewBtn>
                    <CustomBtn bg="red">버튼</CustomBtn>
                    <CustomBtn bg="blue">버튼</CustomBtn>
                </BlackBox>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={process.env.PUBLIC_URL + "/shoes"+(Number(id)+1)+".jpg"} width="100%"/>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='pt-5'>{shoes[0].title}</h4>
                        <p>{shoes[0].content}</p>
                        <p>{shoes[0].price}원</p>
                        <button className='btn btn-danger'>주문하기</button>
                    </div>
                </div>
                <Tabs setTapNum={setTapNum}/>
                <TabContents tapNum={tapNum} />
            </div>
        );
    }

    
}

function Tabs({setTapNum}) {
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link onClick={() => {setTapNum(0)}} eventKey="link-0" >버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => {setTapNum(1)}} eventKey="link-1" >버튼 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => {setTapNum(2)}} eventKey="link-2" >버튼3</Nav.Link>
            </Nav.Item>
            </Nav>
            
        </>
    );
}
function TabContents({tapNum}){
    /*if(tapNum === 0){
        return <div>내용1</div>;
    }else if(tapNum === 1){
        return <div>내용2</div>;
    }else if(tapNum === 2){
        return <div>내용3</div>;
    }
    */
    return [<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tapNum]
}

export default Detail;