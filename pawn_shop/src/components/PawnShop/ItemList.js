import { Row, Image, Card} from 'antd';

const ItemList = ({productInfo}) => {


  return (
    <Row className="scroll" gutter={4}>
    {productInfo.map((product) => {
      return (
        <div key={product.name} className="item" >
      <Card cover={
        <div className="container">
          <img className="card-image" alt="example" src={`/products/${product.file}` }/>
          <div className="price">${product.price}</div>
        </div>
         } >
          <div className="card-title">{product.name}</div>
          <div>{product.discription}</div>
      </Card>
    </div>

    )
    })}

    </Row>
  )
}

export default ItemList;