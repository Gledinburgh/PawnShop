import characterInfo from '../data/characterInfo';
import {Row, Col, Image} from 'antd';

const CharacterList = () => {
  return (
    <>
    {
    characterInfo.map(character => {
      if (character.Row === "one") {
        return(
          <>

          <Row className="character-block one">

            <div className="crop-half"> <div className="circle top-color"></div></div>
            <Image preview={false} className={`figure ${character.Id}`} alt={character.Alt} src={character.File}></Image>
            <div className="rectangle top-color">{character.Name}</div>
         </Row>


            <div className=" bottom-color">{character.Description}</div>
            </>
        )
      } else {
        return(
         <>
          <Row className="character-block two">
            <div className="rectangle top-color">{character.Name}</div>
            <div className="crop-half"><div className="circle top-color"></div></div>

            <Image preview={false} className={`figure ${character.Id}`} alt={character.Alt} src={character.File}></Image>
         </Row>
            <div className=" bottom-color">{character.Description}</div>
            </>
        )

      }
      })}
    </>
  )
}

export default CharacterList;