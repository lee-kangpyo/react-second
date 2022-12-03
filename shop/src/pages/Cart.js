import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../store';
import { changeName, addAge } from '../store/userSlice';

function Cart(){
    let user = useSelector((state) => state.user);
    let cartList = useSelector((state) => state.cartList);
    let dispatch = useDispatch();
    return(
        <>
            <div>
                {user.name} {user.age}의 장바구니
                <button onClick={() => dispatch(changeName())}>이름변경</button>
                <button onClick={() => dispatch(addAge(100))}>나이 더하기</button>
            </div>
             <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map((el, idx) => 
                            <tr key={idx}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.count}</td>
                                <td><button onClick={() => dispatch(addCount( el.id ))}>+</button></td>
                            </tr>    
                        )
                    }
                    
                </tbody>
                </Table>
        </>
    )
}

export default Cart