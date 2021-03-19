import {useState, useEffect} from 'react';
import {Image,Row, Col, Divider} from 'antd';
import './character-modal.css';
import charInfo from '../data/characterInfo';


const CharacterModal = ({characterInfo, isVisible}) => {

  const [character, setCharacter] = useState(charInfo[0]);

  const handleModalClose = () => {
    console.log('modal close launched');
    const modal = document.getElementById('char-wrap');
    const mask = document.getElementById('mask');
    modal.style.display = 'none';
    mask.style.display = 'none';
  }

  useEffect(() => {
    console.log('useEffect: charModal');
    setCharacter(characterInfo);
  }, [characterInfo]);

  const drugs = [

    {alt: 'xanax', src: 'xan.webp'},
    {alt: 'opium bud', src: 'opi.webp', left: "10%" },
    {alt: 'pill', src: 'pill.webp'},
    {alt: 'frowning mushroom', src: 'shroomie2.webp', left: "40vw"},
    {alt: 'syringe', src: 'syringe.webp', left: "50vw" ,top: ''},
    {alt: 'smiling mushroom', src: 'shroomie.webp', left: "30%", top: ""},
    {alt: 'xanax', src: 'xan.webp'},
    {alt: 'syringe', src: 'syringe.webp', left: "50vw" ,top: ''},
    {alt: 'smiling mushroom', src: 'shroomie.webp', left: "30%", top: ""},
    {alt: 'pill', src: 'pill.webp'},
    {alt: 'opium bud', src: 'opi.webp', left: "10%" },
    {alt: 'frowning mushroom', src: 'shroomie2.webp', left: "40vw"},
    {alt: 'syringe', src: 'syringe.webp', left: "50vw" ,top: ''},
    {alt: 'xanax', src: 'xan.webp'},
    {alt: 'pill', src: 'pill.webp'},
    {alt: 'xanax', src: 'xan.webp'},
    {alt: 'opium bud', src: 'opi.webp', left: "10%" },
    {alt: 'pill', src: 'pill.webp'},
    {alt: 'xanax', src: 'xan.webp'},
    {alt: 'opium bud', src: 'opi.webp', left: "10%" },
    {alt: 'pill', src: 'pill.webp'},
    {alt: 'syringe', src: 'syringe.webp', left: "50vw" ,top: ''},

  ];
  // const drugs = [
  //   {alt: 'opium bud', src: 'opi.webp', left: "10%" },
  //   {alt: 'smiling mushroom', src: 'shroomie.webp', left: "30%", top: ""},
  //   {alt: 'frowning mushroom', src: 'shroomie2.webp', left: "40vw"},
  //   {alt: 'syringe', src: 'syringe.webp', left: "50vw" ,top: ''},
  //   {alt: 'xanax', src: 'xan.webp', left: "60vw", top: ""},
  //   {alt: 'pill', src: 'pill.webp', left: "80vw", top: "-8vh"},
  // ];

  return(

  <>
    <div id="mask" />
    <div className={`${character.Row}`} id="char-wrap">
      <div className="drugs flex-row">

{drugs.map((drug) => {
  return (
    <div  className="fall"><img className="spin" alt={`${drug.alt}`} src={`${drug.src}`}/></div>
 )
})}
      </div>


   <div className="veil">

     <Row className="char-row-1">
      <div onClick={() => handleModalClose()} className="close-modal">X</div>
       <Col className="char-portrait">
       <img className={`${character.Id} portrait`} alt={character.Alt} src={character.File}></img>
       </Col>
       <Col className="char-info">
         <p>Name: {character.Name}</p>
         <p>Age: {character.Age}</p>
         <p>Weight: {character.Weight}</p>
       </Col>
     </Row>
     <Row className="bottom-color char-description">
       <p>{character.Description}</p>
     </Row>
   </div>




    </div>
  </>
  )
}

export default CharacterModal;