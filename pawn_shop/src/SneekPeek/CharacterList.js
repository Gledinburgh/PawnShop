import characterInfo from '../data/characterInfo';
import {Row, Col, Image} from 'antd';

const CharacterList = () => {
  return (
    <>
    {
    characterInfo.map(character => {
      if (character.Row === "one") {
        return(
          <Row className="one" id={character.id}>
            <Col span={14}> <div className="discription">{character.Discription}</div> </Col>
            <Col span={10}><Image className="figure" alt={character.Alt} src={character.File}></Image></Col>
          </Row>
        )
      } else {
        return(
          <Row className="two" id={character.id}>
            <Col span={10}><Image className="figure" alt={character.Alt} src={character.File}></Image></Col>
            <Col span={14}> <div className="discription">{character.Discription}</div> </Col>
          </Row>
        )

      }
      })}
    </>
  )
}

export default CharacterList;