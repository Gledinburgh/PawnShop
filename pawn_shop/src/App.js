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
const headstyle = {background: "#ff517d", 'font-family': 'Suez One', 'font-size': '200%', position: 'sticky'}
const footstyle = {background: "#ffff62", 'font-family': 'Suez One', color: '#ff4775', 'font-size': '16px', 'text-align': 'center'}
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
      onClick: showPromiseConfirm(history, destroyAdverts),
      className:'ad',
      closeIcon: <button className="advert right"> X </button>,
      icon: <button className="advert left"> AD</button>,
    });
  };



  return (
    <>
    <FooterAdvert destroyAdverts={destroyAdverts} />
    <div className="wrapper" onClick={openNotification}>

      <Header style={headstyle} >

        <div>PAWN SHOP</div>
      </Header>
      <Content>
        <ItemGrid/>
      </Content>
    </div>
      <Footer style={footstyle}> Careers / About Us / Returns </Footer>
      </>
  );
}

export default App;
