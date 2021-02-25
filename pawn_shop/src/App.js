import './App.css';

import ReactDOM from 'react-dom';
import {React, useState, useEffect} from 'react'

import {Layout, notification, Image} from 'antd';
import ItemGrid from './components/ItemGrid';
import FooterAdvert from './components/FooterAdvert'
import { SmileOutlined } from '@ant-design/icons';
import showPromiseConfirm from './components/ModalAdvert'
import {useHistory} from 'react-router-dom';


const { Header, Footer, Content} = Layout;
const headstyle = {background: "#ff517d", 'font-family': 'Suez One', position: 'sticky'}
const footstyle = {background: "#ffff62", 'font-family': 'Suez One', color: '#ff4775', 'font-size': '16px', 'text-align': 'center'}

;


function App() {

  var [shouldDestroyAdverts, setShouldDestroyAdverts] = useState(false);
  const destroyAdverts = () => {
    console.log('destroy Adverts fired')
    notification.destroy();
  }


  const history = useHistory()
  const openNotification = () => {
    notification.open({
      duration: null,
      onClick:() => {showPromiseConfirm(history, destroyAdverts)} ,
      className:'ad',
      closeIcon: <button className="advert right"> X </button>,
      icon: <button className="advert left"> AD</button>,
    });
  };

  document.body.style.backgroundColor = "#e5ffe3"

  return (
    <>
      <Header style={headstyle}>
        <div className="pawn-shop">PAWN SHOP</div>
      </Header>
        <div id="trapezoid" className="center"></div>
        <div id="lobby" className="center"></div>
      <FooterAdvert destroyAdverts={destroyAdverts} history={history} />
      <div className="wrapper" onClick={openNotification}>
        <Content>
          <ItemGrid/>
        </Content>
      </div>
      <div id="lobby2" className="center"></div>
      <div id="trapezoid2"></div>
        <Footer style={footstyle}> Careers / About Us / Returns </Footer>
      </>
  );
}

export default App;
