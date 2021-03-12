import {React,useState, useEffect, useContext} from 'react';
import axios from 'axios';

import PageNameContext from '../PageNameContext';
import './sneekPeek.css'
import CharacterList from './CharacterList';
import RoadSide from './RoadSide'
import {Image, Layout, notification,} from 'antd';
const { Footer} = Layout;

const comicDescription = 'By the warped minds of Mauro de la Tierra & J.A. Rodriguez comes the rambunctious tale of greed, violence, drugs, money, and the pursuit of all-American post-apocalyptic pleasure told through the eyes of Jesus Christ himself.';

document.body.style.backgroundColor = "#ff7eba";

  const SneekPeek = () => {
  const { pageName, handlePageNameChange} = useContext(PageNameContext)


  document.body.style.backgroundColor = "#ff7eba";

   useEffect(() => {
    notification.destroy();
    handlePageNameChange('SneekPeek');

    console.log('useEffect: sneekPeek');
  },[])

  return(
    <>
        <div id="sneek-top" className="intro">
          <p className="no-shaddow">By the warped minds of</p>
          <p className="no-margin ">Mauro de la Tierra</p>
          <p className="no-margin no-shaddow">&</p>
          <p >J.A. Rodriguez</p>
          <p className="no-margin no-shaddow">comes the rambunctious tale of</p>
          <p className="no-margin ">greed, violence, drugs, money,</p>
          <p className="no-margin no-shaddow">and the pursuit of all-American post-apocalyptic pleasure.</p>
          <p className="no-shaddow">Told through the eyes of Jesus Christ himself.</p>
          </div>
      <div id="wrapper">
        <div id="title">< Image preview={false} id="holy-relapse" src="Holy_Relapse.png" alt="Holy Relapse Title" /></div>
        <div className="intro"> {`\nArriving summer 2021`}</div>
        <CharacterList />
        {/* <Footer> </Footer> */}

      </div>
        <RoadSide/>
    </>
  )


}

export default SneekPeek;