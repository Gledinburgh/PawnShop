import axios from 'axios';
import { useEffect, useState } from 'react';
import { Divider, Layout, Row, Col, Image } from 'antd';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import { useHistory } from 'react-router-dom';

import './Souls/souls.css';


const { Content } = Layout;

const Returns = () => {
  const history = useHistory();

  const goToEndpoint = (endpoint) => {
    history.push(endpoint);
  }

  useEffect(() => {

  }, [])

  document.body.style.backgroundColor = "#e5ffe3"


  return (
    <>
      <MainHeader />
      <div className="flex-col info-page" >
        <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#b4f8d8' }}></Divider>
        <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#b4f8d8' }}>Returns</Divider>
        <br></br>
        <Row className="outter-paper content">
          <Col className="inner-paper">




            <div className="paper">

              <Divider className="title-paper" style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#fffec2' }}><span className="title-paper">!! Current Return policy is under Review !!</span></Divider>

              <br></br>
              <div Id="mngmnt">
                <img className="letter" src="letter_from_mgmt.webp" />
                <br></br>

              </div>




            </div>



            <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#fa7193' }}> </Divider>
            <div id="cushion" />
          </Col>
        </Row>

      </div >
      <MainFooter></MainFooter>
    </>
  )

}

export default Returns;
