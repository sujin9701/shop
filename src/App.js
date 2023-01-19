/* eslint-disable */

import './App.css';
import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { shoesData } from "./data.js";
import { Detail } from "./routes/Detail.js";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import Cart from "./routes/Cart.js"

function App() {

  let [shoes, setShoes] = useState(shoesData);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/") }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/cart") }}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate("/detail") }}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate("/about") }}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <Home shoes={shoes} setShoes={setShoes}/> }/>
        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> }/>
        <Route path="/cart" element={ <Cart/> }/>
      </Routes>

    </div>
  );
}

function Home(props) {
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          { props.shoes.map((shoesData, i) => {
              return ( <Card imgSrc={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} shoesData={shoesData}/> )
            }) }
        </div>
      </div>
      <button onClick={() => {
        axios.get("https://codingapple1.github.io/shop/data2.json").then((newData) => {
          let copyForAddShoesData = [...props.shoes, ...newData.data];
          props.setShoes(copyForAddShoesData);
        }).catch(() => {console.log("실패")});
      }}>더보기</button>
    </>
  )
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet/>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet/>
    </div>
  )
}

function Card(props) {
  return (
    <>
      <div className="col-md-4">
        <img src={props.imgSrc} width="80%"/>
        <h4>{ props.shoesData.title }</h4>
        <p>{ props.shoesData.price }</p>
      </div>
    </>
  )
}

export default App;
