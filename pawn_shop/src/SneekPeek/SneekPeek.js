import { React, useState, useEffect, useContext } from 'react';
import axios from 'axios';


import characterInfo from '../data/characterInfo';
import PageNameContext from '../PageNameContext';
import './sneekPeek.css'
import CharacterList from './CharacterList';
import CharacterModal from './CharacterModal';
import RoadSide from './RoadSide'
import { Image, Layout, notification } from 'antd';
const { Footer } = Layout;

const comicDescription = 'By the warped minds of Mauro de la Tierra & J Rodriguez comes the rambunctious tale of greed, violence, drugs, money, and the pursuit of all-American post-apocalyptic pleasure told through the eyes of Jesus Christ himself.';

document.body.style.backgroundColor = "#ff7eba";

const SneekPeek = () => {
  const { pageName, handlePageNameChange } = useContext(PageNameContext);
  const [charSelected, setCharSelected] = useState(characterInfo[0]);

  const handleCharSelect = (charInfo) => {
    const modal = document.getElementById('char-wrap');
    const mask = document.getElementById('mask');
    modal.style.display = 'block';
    setCharSelected(charInfo);
    mask.style.display = 'block';
  }
  document.body.style.backgroundColor = "#ff7eba";

  useEffect(() => {
    notification.destroy();
    handlePageNameChange('SneekPeek');

    console.log('useEffect: sneekPeek');
  }, [])

  return (

    <>

      <div id="whole">

        {/* <img alt="opium bud" src="opi.webp"/>
      <img alt="smiling mushroom" src="shroomie.webp"/>
      <img alt="frowning mushroom" src="shroomie2.webp"/>
      <img alt="syringe" src="syringe.webp"/>
      <img alt="xanax" src="xan.webp"/> */}
        <CharacterModal characterInfo={charSelected} />

        <div id="wrapper">
          <div className="space"></div>
          <div id="title">< Image preview={false} id="holy-relapse" src="Holy_Relapse.webp" alt="Holy Relapse Title" /></div>
          <div id="sneek-top" className="intro">
            <p className="no-shaddow">By the warped minds of</p>
            <p className="no-margin ">Mauro de la Tierra</p>
            <p className="no-margin no-shaddow">&</p>
            <p >J Rodriguez</p>
            <p className="no-margin no-shaddow">comes the rambunctious tale of</p>
            <p className="no-margin ">greed, violence, drugs, money,</p>
            <p className="no-margin no-shaddow">and the pursuit of all-American post-apocalyptic pleasure.</p>
            <p className="no-shaddow">Told through the eyes of Jesus Christ himself.</p>
          </div>
          {/* <Footer> </Footer> */}
          <div className="intro arriving"> {`\nArriving summer 2021`}</div>
          <CharacterList handleCharSelect={handleCharSelect} />

        </div>
        <RoadSide />
      </div>
    </>
  )


}

export default SneekPeek;