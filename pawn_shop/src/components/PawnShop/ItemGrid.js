import { Divider} from 'antd';
import './itemGrid.css';
import ItemList from './ItemList';

import newProducts from '../../data/newProducts.js';
import saleProducts from '../../data/saleProducts.js';
import jewelryProducts from '../../data/jewelryProducts.js';
import stillBreathingProducts from '../../data/stillBreathingProducts.js';
import antiqueProducts from '../../data/antiqueProducts.js'
function ItemGrid () {
  const borderstyle= {'borderTop': '#b4f8d8'}
  return (
    <div className="item-list">
      <Divider style={borderstyle} orientation="left">New Arrivals</Divider>
        <ItemList productInfo={newProducts} />
      <Divider style={borderstyle} orientation="left">Featured</Divider>
        <ItemList productInfo={saleProducts} />
      <Divider style={borderstyle} orientation="left">Still Breathing</Divider>
        <ItemList productInfo={stillBreathingProducts} />
      <Divider style={borderstyle} orientation="left">Jewelry</Divider>
        <ItemList productInfo={jewelryProducts} />
      <Divider style={borderstyle} orientation="left">Antiques</Divider>
        <ItemList productInfo={antiqueProducts} />
    </div>
  );
}

export default ItemGrid;