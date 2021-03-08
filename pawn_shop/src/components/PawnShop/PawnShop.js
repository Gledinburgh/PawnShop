import './PawnShop.css';
import './advert.css';
import './items.css';
import './itemGrid.css';
import './contract.css'

import ReactDOM from 'react-dom';
import {React, useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import PageNameContext from '../../PageNameContext';

import {Layout, notification, Image} from 'antd';
import ItemGrid from './ItemGrid';
import FooterAdvert from './Advert';
import PageOver from '../PageOver';
import Contract from './Contract';

import openAdvert from './openAdvert';
import pageAnimation from '../../pageAnimation';

const { Header, Footer, Content} = Layout;
const headstyle = {background: "#ff517d", 'fontFamily': 'Suez One', position: 'sticky'}
const footstyle = {background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center'}

;


function PawnShop() {


  const history = useHistory();
  const { pageName, handlePageNameChange} = useContext(PageNameContext);

  const [shouldPageOver, setShouldPageOver] = useState(true);
  const [pageOverType, setPageOverType] = useState('remove');
  const [shouldShowContract, setShouldShowContract] = useState(false);

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

  useEffect(() => {
    handlePageChange()
    handlePageNameChange('PawnShop');
    console.log('useEffect: PawnShop');
  },[])

  document.body.style.backgroundColor = "#e5ffe3"
  handlePageNameChange('PawnShop');

  return (
    <>
      <Header className="pawn-shop" style={headstyle}>PAWN SHOP</Header>
        <div id="trapezoid" className="center"></div>
        <div id="lobby" className="center"></div>
      <FooterAdvert history={history} handleFooterClick={handleModalVisibility} />
      <div className="wrapper" onClick={()=> openAdvert('topLeft',handleModalVisibility)}>
        <Content>
          <Contract isVisible={shouldShowContract }handleModalVisibility={handleModalVisibility} />

          <PageOver className="missing" pageOverType={pageOverType} shouldPageOver={shouldPageOver} handlePageChange={handlePageChange}/>

          <ItemGrid/>
        </Content>
      </div>
      <div id="lobby2" className="center"></div>
      <div id="trapezoid2"></div>
        <Footer style={footstyle}> <span onClick={() => goToEndpoint('/souls')}>Souls</span>/ About Us / Returns </Footer>
      </>
  );
}

export default PawnShop;
