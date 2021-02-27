import './PawnShop.css';

import ReactDOM from 'react-dom';
import {React, useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';

import PageNameContext from '../../PageNameContext';

import {Layout, notification, Image} from 'antd';
import ItemGrid from './ItemGrid';
import FooterAdvert from './Advert';
import PageOver from '../PageOver';
import Contract from './Contract';
import openAdvert from './openAdvert'


const { Header, Footer, Content} = Layout;
const headstyle = {background: "#ff517d", 'fontFamily': 'Suez One', position: 'sticky'}
const footstyle = {background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'fontSize': '16px', 'textAlign': 'center'}

;


function PawnShop() {


  const history = useHistory();
  const { pageName, handlePageNameChange} = useContext(PageNameContext)

  const [shouldPageOver, setShouldPageOver] = useState(false);
  const [pageOverType, setPageOverType] = useState('remove');
  const [shouldShowContract, setShouldShowContract] = useState(false);
  const [shouldDestroyAdverts, setShouldDestroyAdverts] = useState(false)

  const handleModalVisibility = (boolean) => {
    setShouldShowContract(boolean);
  }


   const handlePageChange = () => {
    if (pageOverType === 'remove')  setPageOverType('add')
    if (pageOverType === 'add')  setPageOverType('remove')
    setShouldPageOver(!shouldPageOver)
  }

  useEffect(() => {
    console.log('useEffect: PawnShop')
    handlePageChange()
    handlePageNameChange('PawnShop');
  },[])

  document.body.style.backgroundColor = "#e5ffe3"
  handlePageNameChange('PawnShop');

  return (
    <>
      <Header style={headstyle}>
        <div className="pawn-shop">PAWN SHOP</div>
      </Header>
        <div id="trapezoid" className="center"></div>
        <div id="lobby" className="center"></div>
      <FooterAdvert history={history} handleFooterClick={handleModalVisibility} />
      <div className="wrapper" onClick={()=> openAdvert('topLeft',handleModalVisibility)}>
        <Content>
          <Contract isVisible={shouldShowContract }handleModalVisibility={handleModalVisibility} shouldDestroyAdverts={shouldDestroyAdverts}/>
          {/* <PageOver className="missing" pageOverType={pageOverType} shouldPageOver={shouldPageOver} handlePageChange={handlePageChange}/> */}
          <ItemGrid/>
        </Content>
      </div>
      <div id="lobby2" className="center"></div>
      <div id="trapezoid2"></div>
        <Footer style={footstyle}> Careers / About Us / Returns </Footer>
      </>
  );
}

export default PawnShop;
