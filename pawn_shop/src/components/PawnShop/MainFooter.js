import './PawnShop.css';
import { Layout, Row, Col } from 'antd';

import ReactDOM from 'react-dom';
import { React, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageNameContext from '../../PageNameContext';


const { Header, Footer, Content } = Layout;
const footstyle = { background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center' }


function MainFooter() {

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

  return (

    <Footer style={footstyle}>
      <span className="nav" onClick={() => goToEndpoint('/souls')}> Souls /</span>
      <span className="nav" onClick={() => goToEndpoint('/AboutUs')}> About Us / </span>
      <span className="nav" onClick={() => goToEndpoint('/Returns')}> Returns</span>
    </Footer>
  )
}

export default MainFooter;
