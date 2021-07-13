import './PawnShop.css';
import { Layout, Row, Col, notification } from 'antd';

import ReactDOM from 'react-dom';
import { React, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageNameContext from '../../PageNameContext';


const { Header, Footer, Content } = Layout;
const footstyle = { background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center' }


function MainFooter({ }) {

  const history = useHistory();
  const { pageName, handlePageNameChange } = useContext(PageNameContext);

  const goToEndpoint = (endpoint) => {
    history.push(endpoint);
    notification.destroy();
    handlePageNameChange(endpoint.slice(1));
    console.log(endpoint.slice(1));
  }

  useEffect(() => {
    handlePageNameChange('PawnShop');
    notification.destroy()
  }, [])

  document.body.style.backgroundColor = "#e5ffe3"

  return (
    <>

      <Footer style={footstyle}>
        <span className="nav" onClick={() => goToEndpoint('/souls')}> Souls /</span>
        <span className="nav" onClick={() => goToEndpoint('/AboutUs')}> About Us / </span>
        <span className="nav" onClick={() => goToEndpoint('/Returns')}> Returns</span>
      </Footer>
      <div className="topbar center"><span className="yellow">	Copyright &copy; 2021 Tales From The Abando, All rights reserved. </span></div>
    </>
  )
}

export default MainFooter;
