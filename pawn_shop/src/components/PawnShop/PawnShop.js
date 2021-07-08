import './PawnShop.css';
import './advert.css';
import './items.css';
import './itemGrid.css';
import './contract.css'

import ReactDOM from 'react-dom';
import { React, useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import PageNameContext from '../../PageNameContext';

import { Layout, Row, Col } from 'antd';
import ItemGrid from './ItemGrid';
import PageOver from '../PageOver';
import Contract from './Contract';
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

import openAdvert from './openAdvert';
import openFooterAdvert from './openFooterAdvert';


const { Header, Footer, Content } = Layout;
const headstyle = { background: "#ff517d", 'fontFamily': 'Suez One', position: 'sticky' }
const footstyle = { background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center' }

  ;


function PawnShop() {


  const history = useHistory();
  const { pageName, handlePageNameChange } = useContext(PageNameContext);

  const [shouldPageOver, setShouldPageOver] = useState(false);
  const [pageOverType, setPageOverType] = useState('remove');
  const [shouldShowContract, setShouldShowContract] = useState(false);
  const [advertTimer, setAdvertTimer] = useState(true);
  const [advertClosed, setAdvertClosed] = useState(true);

  const handleModalVisibility = (boolean) => {
    setShouldShowContract(boolean);
  }
  const goToEndpoint = useCallback((endpoint) => {
    history.push(endpoint);
  }, [history])

  const handlePageChange = useCallback(() => {
    if (pageOverType === 'remove') setPageOverType('add');
    if (pageOverType === 'add') setPageOverType('remove');
    setShouldPageOver(!shouldPageOver)
  }, [shouldPageOver])

  const handleAdvertClosed = useCallback(() => {
    setAdvertClosed(!advertClosed)
  }, [advertClosed])

  const advertLaunch = () => {
    const advertCount = document.getElementsByClassName('ant-notification-notice').length;
    const notToManyAdverts = advertCount < 3;
    if (notToManyAdverts) {
      setTimeout(() => openAdvert('topLeft', handleModalVisibility, handleAdvertClosed), 500)
    }


  }

  const footerTimer = () => {
    const advertCount = document.getElementsByClassName('ant-notification-notice').length;
    const notToManyAdverts = advertCount < 3;
    if (advertTimer && notToManyAdverts) {
      setAdvertTimer(false);

      setTimeout(() => {
        if (pageName === "PawnShop") {
          setAdvertTimer(true);
          openAdvert('bottomLeft', handleModalVisibility, handleAdvertClosed);
        }
      }, 10000)
    }
  }


  useEffect(() => {
    footerTimer();
    handlePageNameChange('PawnShop');
    console.log('useEffect: PawnShop');
  }, [advertTimer, advertClosed])

  document.body.style.backgroundColor = "#e5ffe3"
  handlePageNameChange('PawnShop');

  return (
    <>
      <MainHeader />
      <Row className="row">
        <Col >
          <div id="trapezoid" className="center"></div>
          <div id="lobby" className="center"></div>
          <div onClick={() => advertLaunch()}>
            <Content>
              <Contract isVisible={shouldShowContract} handleModalVisibility={handleModalVisibility} />

              <PageOver className="missing" pageOverType={pageOverType} shouldPageOver={shouldPageOver} handlePageChange={handlePageChange} />

              <ItemGrid />
            </Content>
          </div>
          <div id="lobby2" className="center"></div>
          <div id="trapezoid2"></div>
        </Col>

      </Row>
      <MainFooter></MainFooter>

    </>
  );
}

export default PawnShop;
