import './PawnShop.css';
import { Layout, Row, Col } from 'antd';
import { MailFilled, EnvironmentFilled, FireOutlined, ShoppingCartOutlined } from '@ant-design/icons';


import ReactDOM from 'react-dom';
import { React, useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageNameContext from '../../PageNameContext';
import { ThemeContext } from '../../context/ThemeContext';


const { Header, Footer, Content } = Layout;
const footstyle = { background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center' }


const MainHeader = () => {

  const context = useContext(ThemeContext)
  console.log("contextttt:", context)
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

  const { isLightTheme, lightStyle, darkStyle } = context;
  const theme = isLightTheme ? lightStyle : darkStyle;
  const headstyle = { background: "#ff517d", 'fontFamily': 'Suez One', position: 'sticky' }

  return (

    <>
      <div className="topbar center">
        <span className="yellow"><EnvironmentFilled />
          Houston St. & New Braunfels Ave. SA, TX.
          <span className="mobile-hide"> | <MailFilled /> talesfromtheabando@gmail.com</span>
        </span>
      </div>
      <Header className="pawn-shop" style={headstyle} ><span className="header-space"></span><span className="nav" onClick={() => goToEndpoint('/PawnShop')}><FireOutlined />PAWN SHOP </span> <span className="float-right nav mobile-hide"><ShoppingCartOutlined /></span></Header>
    </>

  )
}

export default MainHeader;
