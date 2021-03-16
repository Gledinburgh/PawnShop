import {useState, useEffect} from 'react';
import {Image,Row, Col, Divider} from 'antd';
import './character-modal.css';
import charInfo from '../data/characterInfo';


const CharacterModal = ({characterInfo, isVisible}) => {

  const [character, setCharacter] = useState(charInfo[0]);

  const handleModalClose = () => {
    console.log('modal close launched');
    const modal = document.getElementById('char-wrap');
    modal.style.display = 'none';
  }

  useEffect(() => {
    console.log('useEffect: charModal');
    setCharacter(characterInfo);
  }, [characterInfo])

  return(

    <div className={`${character.Row}`} id="char-wrap">
     <Row className="char-row-1">
      <div onClick={() => handleModalClose()} className="close-modal">X</div>
       <Col className="char-portrait">
       <Image preview={false} className={`${character.Id}`} alt={character.Alt} src={character.Portrait}></Image>
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

  )
}

export default CharacterModal;