import axios from 'axios';
import { useEffect, useState } from 'react';
import { Divider, Layout, Row, Col, Image } from 'antd';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';
import { useHistory } from 'react-router-dom';

import './Souls/souls.css';


const { Content } = Layout;

const AboutUs = () => {
  const history = useHistory();

  const goToEndpoint = (endpoint) => {
    history.push(endpoint);
  }

  useEffect(() => {

  }, [])

  document.body.style.backgroundColor = "#e5ffe3"


  return (
    <div className="flex-col info-page" >
      <MainHeader />
      <img src="pawn_web.jpg"></img>
      <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#b4f8d8' }}></Divider>
      <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#b4f8d8' }}>About us</Divider>
      <br></br>
      <Row className="outter-paper content">
        <Col>
          <div className="paper">
            <Divider className="title-paper" style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#fffec2' }}><span className="title-paper">Contact us</span></Divider>


            <div className="center"><a href="theholyrelapse@gmail.com">theholyrelapse@gmail.com</a ></div>
            <br></br>
          </div>
          <Divider style={{ color: '#ff4775', borderTop: '#fa7193' }}> </Divider>



          <div className="paper">

            <Divider className="title-paper" style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#fffec2' }}><span className="title-paper">Who we are</span></Divider>
            <div className="center">Located on the corners of Houston St. and New Braunfels St.</div>
            <br></br>
            <div className="text-paper">Our historic Pawn Shop is home to rare and eclectic items from every corner of the world (except Canada). For comments, concerns, complaints, pest control, billing, or other annoyances please send us an email.
            </div>
            <br></br>

          </div>
          <Divider style={{ color: '#ff4775', borderTop: '#fa7193' }}> </Divider>
          <div className="paper">
            <Divider className="title-paper" style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#fffec2' }}><span className="title-paper">Find us</span></Divider>
            <Row>
              {/* <div className="content self-align"> */}
              <Col className="col table">
                <tbody className="content times">
                  <tr>
                    <td className="text-paper">Monday</td>
                    <td>&nbsp;</td>
                    <td>9:00AM</td>
                    <td>-</td>
                    <td>3:00AM </td>
                  </tr>
                  <tr>
                    <td className="text-paper">Tuesday</td>
                    <td>&nbsp;</td>
                    <td>9:00AM</td>
                    <td>-</td>
                    <td>3:00AM </td>
                  </tr>
                  <tr>
                    <td className="text-paper">Wednesday</td>
                    <td>&nbsp;</td>
                    <td>9:00AM</td>
                    <td>-</td>
                    <td>3:00AM </td>
                  </tr>
                  <tr>
                    <td className="text-paper">Thursday</td>
                    <td>&nbsp;</td>
                    <td>9:00AM</td>
                    <td>-</td>
                    <td>3:00AM </td>
                  </tr>
                </tbody>
              </Col>
              <Col className="col">
                <tbody className="content times">
                  <tr>
                    <td className="text-paper">Friday</td>
                    <td>&nbsp;</td>
                    <td>9:00AM</td>
                    <td>-</td>
                    <td>3:00AM </td>
                  </tr>
                  <tr>
                    <td className="text-paper">Saturday</td>
                    <td>&nbsp;</td>
                    <td>9:00AM</td>
                    <td>-</td>
                    <td>3:00AM </td>
                  </tr>
                  <tr>
                    <td className="text-paper">Sunday</td>
                    <td>&nbsp;</td>
                    <td>9:00AM</td>
                    <td>-</td>
                    <td>3:00AM </td>
                  </tr>
                </tbody>
              </Col>

            </Row>

          </div>
          <div className="map-container">

            <iframe style={{ width: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.1276970069785!2d-98.46323968489932!3d29.42506398211187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865cf6753ccfe9b7%3A0x5b1baf065dc24cb!2sN%20New%20Braunfels%20Ave%20%26%20E%20Houston%20St%2C%20San%20Antonio%2C%20TX%2078202!5e0!3m2!1sen!2sus!4v1624749009001!5m2!1sen!2sus" ></iframe>
          </div>



          <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#fa7193' }}> </Divider>
          <div id="cushion" />
        </Col>
      </Row>

      <MainFooter></MainFooter>
    </div >
  )

}

export default AboutUs;
