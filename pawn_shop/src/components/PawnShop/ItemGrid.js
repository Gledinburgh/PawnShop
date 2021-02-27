import { Row, Col, Divider, div, Card} from 'antd';
import './itemGrid.css';

import newProducts from '../../data/newProducts.js';
import saleProducts from '../../data/saleProducts.js'
function ItemGrid () {
  const style = { background: '#b4f8d8', padding: '8px 0', 'maxWidth': '%33', 'minWidth': '30', 'minHeight': '100%'};
  const borderstyle= {'borderTop': '#b4f8d8'}
  let key = 0;
  return (
    <div >
    <Divider style={borderstyle} orientation="left">New Arrivals</Divider>
    <Row className="scroll" gutter={4}>
      {newProducts.map((product) => {
        key++;
        return (
          <Col key={key} className="item" span={10}>
        <Card style={style} cover={
          <div className="container">
            <img className="card-image" alt="example" src={`/products/${product.file}` }/>
            <div className="price">${product.price}</div>
          </div>
           } >
            <div className="card-title">{product.name}</div>
            <div>{product.discription}</div>
        </Card>
      </Col>

      )
      })}

      </Row>
      <Divider style={borderstyle} orientation="left">On Sale</Divider>
      <Row className="scroll" gutter={4}>
      {saleProducts.map((product) => {
        key++;
        return (
          <Col key={key} className="item" span={10}>
        <Card style={style} cover={
          <div className="container">
            <img className="card-image" alt="example" src={`/products/${product.file}` }/>
            <div className="price">${product.price}</div>
          </div>
           } >
            <div className="card-title">{product.name}</div>
            <div>{product.discription}</div>
        </Card>
      </Col>
      )
      })}
    </Row>
    <Divider style={borderstyle} orientation="left">Still Breathing >></Divider>
    <Row className="scroll" gutter={4}>
      {saleProducts.map((product) => {
         key++;
         return (
           <Col key={key} className="item" span={10}>
        <Card style={style} cover={
          <div className="container">
            <img className="card-image" alt="example" src={`/products/${product.file}` }/>
            <div className="price">${product.price}</div>
          </div>
           } >
            <div className="card-title">{product.name}</div>
            <div>{product.discription}</div>
        </Card>
      </Col>
      )
      })}
    </Row>
    <Divider style={borderstyle} orientation="left">Tool</Divider>
      <Row className="scroll" gutter={4}>
      {saleProducts.map((product) => {
         key++;
         return (
           <Col key={key} className="item" span={10}>
        <Card style={style} cover={
          <div className="container">
            <img className="card-image" alt="example" src={`/products/${product.file}` }/>
            <div className="price">${product.price}</div>
          </div>
           } >
            <div className="card-title">{product.name}</div>
            <div>{product.discription}</div>
        </Card>
      </Col>

      )
      })}
    </Row>
    </div>
  );
}

export default ItemGrid;