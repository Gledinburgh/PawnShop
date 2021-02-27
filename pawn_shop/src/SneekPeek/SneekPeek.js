import './sneekPeek.css'
import ReactDOM from 'react-dom';
import {React, useState, useEffect, useContext} from 'react';
import PageNameContext from '../PageNameContext';

import {Layout, Image,  Row, Col, notification, div, Card,} from 'antd';

const { Header, Footer, Content} = Layout;



document.body.style.backgroundColor = "#ff7eba";


  const SneekPeek = () => {
  const { pageName, handlePageNameChange} = useContext(PageNameContext)

  document.body.style.backgroundColor = "#ff7eba";

  useEffect(() => {
    console.log('useEffect: SneekPeek')

    notification.destroy();
    handlePageNameChange('SneekPeek');
  },[])

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