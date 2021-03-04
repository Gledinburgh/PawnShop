import characterInfo from '../data/characterInfo';
import {Row, Col, Image} from 'antd';

const CharacterList = () => {
  return (
    <>
    {
    characterInfo.map(character => {
      if (character.Row === "one") {
        return(
          <Row className="one" >
            <Col span={14} className="character-content"> <div className="center name">{character.Name}</div><div className=" description">{character.Description}</div> </Col>
            <Col  span={10}><Image preview={false} className={`figure ${character.Id}`} alt={character.Alt} src={character.File}></Image></Col>
          </Row>
        )
      } else {
        return(
          <Row className="two" >
            <Col span={10}><Image preview={false} className={`figure ${character.Id}`} alt={character.Alt} src={character.File}></Image></Col>
            <Col span={14} className="character-content"> <div className="center name">{character.Name}</div><div className=" description">{character.Description}</div> </Col>
          </Row>
        )

      }
      })}
    </>
  )
}

export default CharacterList;