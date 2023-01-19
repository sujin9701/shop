/* eslint-disable */

import { Table } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { changeName, increaseAge } from "./../store/userSlice.js"

function Cart() {

    let state = useSelector((state) => state )
    let dispatch = useDispatch()

    return (
        <div>
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
                                        dispatch(changeName())
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