import { Row, Image, Card} from 'antd';

const ItemList = ({productInfo}) => {


  return (
    <Row className="scroll" gutter={4}>
    {productInfo.map((product) => {
      return (
        <div key={product.Name} className="item" >
      <Card cover={
        <div className="container">
          <img className="card-image" alt={product.Alt} src={`/products/${product.File}` }/>
          <div className="price">${product.Price}</div>
        </div>
         } >
          <div className="card-title">{product.Name}</div>
          <div>{product.Description}</div>
      </Card>
    </div>

    )
    })}

    </Row>
  )
}

export default ItemList;