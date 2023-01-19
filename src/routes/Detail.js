/* eslint-disable */

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Nav } from 'react-bootstrap'
import "../App.css"

function Detail(props) {

    useEffect(() => {
        setFadePage("end");
        let a = setTimeout(() => { setIsShow(false); }, 2000);
        if (inputText != '' && isFinite(inputText) != true) alert("숫자만 입력하세요.");

        return (() => {
            clearTimeout(a);
            setFadePage("");
        });
    })

    let {id} = useParams();
    let shoesElement = props.shoes.find((data) => data.id == id );
    let [isShow, setIsShow] = useState(true);
    let [count, setCount] = useState(0);
    let [inputText, setInputText] = useState('');
    let [tab, setTab] = useState(0);
    let [fadePage, setFadePage] = useState('');

    return (
        <div className={"container start " + fadePage}>

            { isShow ? <div className="alert alert-warning"> 2초 이내 구매시 할인 </div> : null }
            { count }
            <input onChange={(e) => setInputText(e.target.value)}></input>
            <button onClick={ () => setCount(count+1) }>버튼</button>
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes" + (parseInt(id) + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{shoesElement.title}</h4>
                <p>{shoesElement.content}</p>
                <p>{shoesElement.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab}/>

        </div>
    )
}

function TabContent({tab}) {

    let [fade, setFade] = useState('');

    useEffect(() => {
        let a = setTimeout(() => { setFade("end") }, 100);
        return () => { clearTimeout(a); setFade(""); }
    }, [tab])

    return (<div className={'start ' + fade}>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>)
}

export {Detail};