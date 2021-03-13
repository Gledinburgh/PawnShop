import { Row, Card} from 'antd';
import {useState} from 'react';
import ProductImage from './ProductImage';

const ItemList = ({productInfo}) => {
  const [wobble, setwobble] = useState(0);

  return (
    <Row className="scroll" gutter={4}>
    {productInfo.map((product) => {
      return (
        <div key={product.Name} className="item" >
      <Card cover={
        <div className="container">
          <ProductImage productInfo={product}/>
          <div className="price">${product.Price}</div>
        </div>
         } >
          <div className="card-title">{product.Name}</div>
          <div className="product-description">{product.Description}</div>
      <button className="card-drop"><span className="down">▼</span>

        </button>
      </Card>
    </div>

    )
    })}

    </Row>
  )
}

export default ItemList;