import {React,useState, useEffect, useContext} from 'react';
import axios from 'axios';

import PageNameContext from '../PageNameContext';
import './sneekPeek.css'
import CharacterList from './CharacterList';
import {Image, Layout, notification,} from 'antd';
const { Footer} = Layout;

const comicDescription = 'By the warped minds of Mauro de la Tierra & J.A. Rodriguez comes the rambunctious tale of greed, violence, drugs, money, and the pursuit of all-American post-apocalyptic pleasure told through the eyes of Jesus Christ himself, arriving summer 2021.';

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
      <div id="wrapper">
        <div id="title"><Image preview={false} id="holy-relapse" src="Holy_Relapse.png" alt="Holy Relapse Title" /></div>
        <div className="intro">{comicDescription}</div>
        <CharacterList />
        <Footer> </Footer>

      </div>
    </>
  )


}

export default SneekPeek;