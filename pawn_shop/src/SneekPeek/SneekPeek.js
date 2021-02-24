import './sneekPeek.css'
import ReactDOM from 'react-dom';
import {React, useState, useEffect} from 'react'
import {Layout, Image,  Row, Col, Divider, div, Card,} from 'antd';

const { Header, Footer, Content} = Layout;
const headstyle = {background: "#ff517d", 'font-family': 'arial', 'font-size': '200%', position: 'sticky'}
const footstyle = {background: "#ffff62", 'font-family': 'mono', color: '#ff4775', 'font-size': '14px', 'text-align': 'center'};

document.body.style.backgroundColor = "#ff7eba";

const SneekPeek = () => {
  document.body.style.backgroundColor = "#ff7eba"
  return (
  <div id="wrapper">
    <div id="title">
      <Image id="holy-relapse" src="Holy_Relapse.png" alt="Holy Relapse Title" />
    </div>
    <div className="intro">
         some words about the comic
    </div>
    <Row className="crime one">
      <Col span={10}><Image  className="figure" alt="Crime Wave character holding drugs" src="Crime_wave.png"></Image></Col>
      <Col span={14} > <div className="discription">some words about the character</div> </Col>
    </Row>
    <Row className="jesus two">
      <Col span={14}> <div className="discription">some words about the character</div> </Col>
      <Col span={10}><Image className="figure" alt="Jesus character holding straw" src="Jesus.png"></Image></Col>
    </Row>
    <Row className="boozle one">
      <Col span={10}><Image className="figure" alt="Boozle character with evil smile" src="boozle.png"></Image></Col>
      <Col span={14} > <div className="discription">some words about the character</div> </Col>
    </Row>
    <Row className="hambugler two">
      <Col span={14}> <div className="discription">some words about the character</div> </Col>
      <Col span={10}><Image className="figure" alt="hamburgler character with evil smile" src="hambugler.png"></Image></Col>
    </Row>
    <Row className="broker one">
      <Col span={10}><Image className="figure" alt="pawn shop broker character with reading magazine" src="broker.png"></Image></Col>
      <Col span={14} > <div className="discription">some words about the character</div> </Col>
    </Row>

  </div>
  )
}

export default SneekPeek;