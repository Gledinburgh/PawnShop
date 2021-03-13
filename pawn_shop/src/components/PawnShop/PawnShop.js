import './PawnShop.css';
import './advert.css';
import './items.css';
import './itemGrid.css';
import './contract.css'

import ReactDOM from 'react-dom';
import {React, useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import PageNameContext from '../../PageNameContext';

import {Layout, Row, Col} from 'antd';
import ItemGrid from './ItemGrid';
import PageOver from '../PageOver';
import Contract from './Contract';

import openAdvert from './openAdvert';
import openFooterAdvert from './openFooterAdvert';


const { Header, Footer, Content} = Layout;
const headstyle = {background: "#ff517d", 'fontFamily': 'Suez One', position: 'sticky'}
const footstyle = {background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center'}

;


function PawnShop() {


  const history = useHistory();
  const { pageName, handlePageNameChange} = useContext(PageNameContext);

  const [shouldPageOver, setShouldPageOver] = useState(false);
  const [pageOverType, setPageOverType] = useState('remove');
  const [shouldShowContract, setShouldShowContract] = useState(false);
  const [advertTimer, setAdvertTimer]= useState(true);
  const [advertClosed, setAdvertClosed] = useState(true);

  const handleModalVisibility = (boolean) => {
    setShouldShowContract(boolean);
  }
  const goToEndpoint = (endpoint) => {
    history.push(endpoint);
  }
   const handlePageChange = () => {
    if (pageOverType === 'remove') setPageOverType('add');
    if (pageOverType === 'add')  setPageOverType('remove');
    setShouldPageOver(!shouldPageOver)

  }
   const handleAdvertClosed = () => {
     setAdvertClosed(!advertClosed)
   }

  const footerTimer =  () => {
    const advertCount = document.getElementsByClassName('ant-notification-notice').length;
    const notToManyAdverts = advertCount < 6;
    if (advertTimer && notToManyAdverts) {
      setAdvertTimer(false);

      setTimeout(() => {
        setAdvertTimer(true);
        // openAdvert('bottomLeft', handleModalVisibility, handleAdvertClosed);
      }, 10000)
    }
  }


  useEffect(() => {
    footerTimer();
    handlePageNameChange('PawnShop');
    console.log('PawnShop shouldPageOver:', shouldPageOver)
    console.log('useEffect: PawnShop');
  },[advertTimer, advertClosed])

  document.body.style.backgroundColor = "#e5ffe3"
  handlePageNameChange('PawnShop');

  return (
    <>
      <Header className="pawn-shop" style={headstyle}>PAWN SHOP</Header>
      <Row className="row">
      <Col >
        <div id="trapezoid" className="center"></div>
        <div id="lobby" className="center"></div>
      <div className="wrapper" onClick={()=> openAdvert('topLeft',handleModalVisibility, handleAdvertClosed)}>
        <Content>
          <Contract isVisible={shouldShowContract }handleModalVisibility={handleModalVisibility} />

          <PageOver className="missing" pageOverType={pageOverType} shouldPageOver={shouldPageOver} handlePageChange={handlePageChange}/>

          <ItemGrid/>
        </Content>
      </div>
      <div id="lobby2" className="center"></div>
      <div id="trapezoid2"></div>
      </Col>

      </Row>
        <Footer style={footstyle}> <span onClick={() => goToEndpoint('/souls')}>Souls</span>/ About Us / Returns </Footer>
      </>
  );
}

export default PawnShop;
