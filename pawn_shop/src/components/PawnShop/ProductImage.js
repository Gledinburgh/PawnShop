import { Row, Card} from 'antd';
import {useState} from 'react';

const ProductImage= ({productInfo}) => {
  const [wobble, setwobble] = useState(0);

  return (

          <img className="card-image"
               alt={productInfo.Alt}
               src={`/products/${productInfo.File}` }
               onClick={() => setwobble(1)}
               onAnimationEnd={() => setwobble(0)}
               wobble={wobble}
          />


  )
}

export default ProductImage;