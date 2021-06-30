import './PawnShop.css';
import { Layout, Row, Col } from 'antd';
import { MailFilled, EnvironmentFilled, FireOutlined } from '@ant-design/icons'

import ReactDOM from 'react-dom';
import { React, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageNameContext from '../../PageNameContext';


const { Header, Footer, Content } = Layout;
const footstyle = { background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center' }


function MainHeader() {

  const history = useHistory();
  const { pageName, handlePageNameChange } = useContext(PageNameContext);

  const goToEndpoint = (endpoint) => {
    history.push(endpoint);
  }

  useEffect(() => {
    handlePageNameChange('PawnShop');
  }, [])

  document.body.style.backgroundColor = "#e5ffe3"
  handlePageNameChange('PawnShop');

  const headstyle = { background: "#ff517d", 'fontFamily': 'Suez One', position: 'sticky' }

  return (
    <>
      <div className="topbar center"><span className="yellow"><EnvironmentFilled /> Houston St. & Newbraunfels SA, TX | <MailFilled /> holyrelapse@gmail.com</span></div>
      <Header className="pawn-shop nav" style={headstyle} onClick={() => goToEndpoint('/PawnShop')}><span className="header-space"></span> <FireOutlined />PAWN SHOP</Header>
    </>

  )
}

export default MainHeader;
