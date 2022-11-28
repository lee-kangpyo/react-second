import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart(){

    let cartList = useSelector((state) => state.cartList);
    console.log(cartList);

    return(
        <>
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
                            <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.count}</td>
                                <td><button>변경하기</button></td>
                            </tr>    
                        )
                    }
                    
                </tbody>
                </Table>
        </>
    )
}

export default Cart