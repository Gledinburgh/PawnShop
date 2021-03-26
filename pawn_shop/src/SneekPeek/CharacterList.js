
import {useState, useEffect} from 'react';

import characterInfo from '../data/characterInfo';
import {Row, Col, Image} from 'antd';

const CharacterList = ({charSelected, handleCharSelect}) => {


  useEffect(() => {

  }, [charSelected])


  return (
    <>
      <div className="box">
    {
    characterInfo.map(character => {
     let row = character.Row;
        return(
          <>
            <Row  className={`character-block ${row}`}>
              <div className="circle top-color"></div>
              <div onClick={()=> handleCharSelect(character)}  className="circle bottom-half">
                <Image preview={false} className="figure" alt={character.Alt} src={character.File}></Image>

              </div>
            </Row>
          </>
        )}
      )}
      </div>
    </>
  )

}

export default CharacterList;