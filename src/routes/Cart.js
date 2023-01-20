/* eslint-disable */

import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { increaseAge } from "./../store/userSlice.js"
import { increaseNumber } from "./../store.js"
import { memo, useState } from 'react'

let Child = memo( function() {
    return <div>자식컴포넌트</div>
})

function Cart() {

    let state = useSelector((state) => state )
    let dispatch = useDispatch()
    let [count, setCount] = useState(0)

    return (
        <div>
            <Child></Child>
            <button onClick={() => { setCount(count+1); }}>+</button>
            { state.user.name + ", " + state.user.age }의 장바구니
            <button onClick={() => {
                dispatch(increaseAge(100));
            }}>버튼</button>
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
                    { state.cartData.map((data, i) => {
                        return (
                            <tr key={i}>
                                <td>{ i }</td>
                                <td>{ data.name }</td>
                                <td>{ data.count }</td>
                                <td>
                                    <button onClick={() => {
                                        let productId = state.cartData.find((x) => x.name == data.name).id;
                                        dispatch(increaseNumber(productId));
                                    }}>+</button>
                                </td>
                            </tr>
                    )}) }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;