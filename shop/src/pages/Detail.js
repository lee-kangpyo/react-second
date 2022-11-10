import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

let CustomBtn = styled.button`
    background : ${ props => props.bg };
    color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
    padding : 10px;
`

let NewBtn = styled.button(CustomBtn)`
    padding : 130px;
`

let BlackBox = styled.div`
    background : grey;
    padding : 20px;
`

function Detail(props) {
    let {id} = useParams();
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
            </div>
        );
    }

}

export default Detail;