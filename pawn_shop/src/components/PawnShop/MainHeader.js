import './PawnShop.css';
import { Layout, Row, Col } from 'antd';

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

    <Header className="pawn-shop nav" style={headstyle}>PAWN SHOP</Header>

  )
}

export default MainHeader;
