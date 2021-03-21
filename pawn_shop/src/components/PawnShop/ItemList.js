import { Row, Card} from 'antd';
import {useState} from 'react';
import ProductImage from './ProductImage';
import Item from './Item'

const ItemList = ({productInfo}) => {


  return (
    <Row className="scroll" gutter={4}>
      {productInfo.map((product) => {
        return ( <Item product={product} /> )
      })}
    </Row>
  )
}

export default ItemList;

