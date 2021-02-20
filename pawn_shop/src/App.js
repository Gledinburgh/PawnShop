import './App.css';
import {Layout} from 'antd';
import ItemGrid from './components/ItemGrid'
const { Header, Footer, Content} = Layout;
const style = {background: "#ff517d", 'font-family': 'Suez One', color: '#ff4775', 'font-size': '250%'}

function App() {
  return (
    <div className="wrapper">
      <Header style={style} >
        <logo ></logo>
        <div>PAWN SHOP</div>
      </Header>
      <Content>
        <ItemGrid/>
      </Content>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
