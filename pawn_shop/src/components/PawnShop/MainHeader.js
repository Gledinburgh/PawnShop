import './PawnShop.css';
import { Layout, Row, Col } from 'antd';
import { MailFilled, EnvironmentFilled, FireOutlined, ShoppingCartOutlined } from '@ant-design/icons';


import ReactDOM from 'react-dom';
import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PageNameContext from '../../PageNameContext';
import { ThemeContext } from '../../context/ThemeContext';


const { Header } = Layout;

const MainHeader = () => {

  const history = useHistory();
  const { pageName, handlePageNameChange } = useContext(PageNameContext);
  const { theme, toggleTheme, playAudio } = useContext(ThemeContext)

  const goToEndpoint = (endpoint) => {
    history.push(endpoint);
  }

  useEffect(() => {
    console.log("useEffect: MainHeader")
  }, [])

  document.body.style.backgroundColor = "#e5ffe3"
  handlePageNameChange('PawnShop');


  return (

    <>
      <div className="topbar center">
        <span className="yellow"><EnvironmentFilled />
          Houston St. & New Braunfels Ave. SA, TX.
          <span className="mobile-hide"> | <MailFilled /> talesfromtheabando@gmail.com</span>
        </span>
      </div>

      <Header onClick={playAudio} className="pawn-shop" style={theme} >
        <span className="header-space" />
        <span className="nav" onClick={() => goToEndpoint('/PawnShop')}><FireOutlined />PAWN SHOP </span>
        <span className="float-right nav mobile-hide"><ShoppingCartOutlined /></span>
      </Header>
    </>

  )
}

export default MainHeader;
