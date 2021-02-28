import { Divider} from 'antd';
import './itemGrid.css';
import ItemList from './ItemList';

import newProducts from '../../data/newProducts.js';
import saleProducts from '../../data/saleProducts.js'
function ItemGrid () {
  const borderstyle= {'borderTop': '#b4f8d8'}
  return (
    <div >
      <Divider style={borderstyle} orientation="left">New Arrivals</Divider>
        <ItemList productInfo={newProducts} />
      <Divider style={borderstyle} orientation="left">On Sale</Divider>
        <ItemList productInfo={saleProducts} />
      <Divider style={borderstyle} orientation="left">Still Breathing</Divider>
        <ItemList productInfo={saleProducts} />
      <Divider style={borderstyle} orientation="left">Tools</Divider>
        <ItemList productInfo={newProducts} />
    </div>
  );
}

export default ItemGrid;