import { Row, Col, Divider, div, Card} from 'antd';
import './itemGrid.css';

import newProducts from '../newProducts.js';
import saleProducts from '../saleProducts.js'
function ItemGrid () {
  const style = { background: '#b4f8d8', padding: '8px 0', 'max-width': '%33', 'min-width': '30', 'min-height': '100%'};
  const borderstyle= {'border-top': '#b4f8d8'}
  return (
    <div>
    <Divider style={borderstyle} orientation="left">New Arrivals</Divider>
    <Row className="scroll" gutter={4}>
      {newProducts.map((product) => {
        return (
          <Col  className="item" span={10}>
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
        return (
          <Col span={10}>
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
        return (
          <Col span={10}>
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
        return (
          <Col span={10}>
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