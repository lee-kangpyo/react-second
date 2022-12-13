import React, { memo, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCartItem, minusCount } from '../store';
import { changeName, addAge } from '../store/userSlice';


// memo는 특정 상황에서만 재랜더링 해주는 함수임.
// props 가 변할때 재렌더링되는함수로 현재 props와 변경된 props를 비교하는 로직이 들어가있어서 
// 무거운 컴포넌트에 사용할때 쓰면됨.
let Child = memo(function(){
    console.log("나도 렌더링됨.")
    return <div>렌더링되는자식</div>
});





function Cart(){
    let user = useSelector((state) => state.user);
    let cartList = useSelector((state) => state.cartList);
    let dispatch = useDispatch();

    let [count, setCount] = useState(0);

    // useMemo로 함수 한번 만 실행하기
    // let result = 오래걸리는함수()
    // let result2 = useMemo(()=>{ return 오래걸리는함수() })
    // useMemo는 렌더링 될때 실행 useEffect는 렌더링 후 실행.

    return(
        <>
            <div>
                <Child count={count}/>
                <button onClick={()=>{setCount(count + 1)}}>렌더링</button>
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
                        <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map((el, idx) => 
                            <tr key={idx}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.count}</td>
                                <td><button onClick={() => dispatch(minusCount( el.id ))}>-</button><button onClick={() => dispatch(addCount( el.id ))}>+</button></td>
                                <td><button onClick={() => dispatch(removeCartItem( el.id ))}>삭제</button></td>
                            </tr>    
                        )
                    }
                    
                </tbody>
                </Table>
        </>
    )
}

export default Cart