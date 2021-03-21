import {Card} from 'antd';
import {useState} from 'react';
import ProductImage from './ProductImage';

const Item = ({product}) => {

  const [expandDescription, setExpandDescription] = useState(0)

  const toggleDescriptionExpansion = (event, flag) => {
    if (flag === 0) {
      setExpandDescription(1);
    } else if (event.target.className === 'card-drop' || event.target.className === 'down') {
      setExpandDescription(0);
    }
  }
  return (

    <div key={product.Name}  className="item">
      <Card
      onClick={(event) => toggleDescriptionExpansion(event, expandDescription)}
      ontransitionend ={() => toggleDescriptionExpansion(0)}
      //  "cover" contains the product image.
      cover={<div className="container">
                <ProductImage productInfo={product}/>
                <div className="price">${product.Price}</div>
             </div>
        } >
        <div className="card-title">{product.Name}</div>
        <div expandDescription={expandDescription} className="product-description"> {product.Description}</div>
        <button className="card-drop"><div expandDescription={expandDescription} className="down">▼</div></button>
      </Card>
</div>
)

}


export default Item;