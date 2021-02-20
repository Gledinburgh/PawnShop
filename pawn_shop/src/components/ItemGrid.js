import { Row, Col, Divider, div, Card} from 'antd';
import './itemGrid.css';

function ItemGrid () {
  const style = { background: '#dfffe1', padding: '8px 0', 'max-width': '%33', 'min-width': '30'};
  return (
    <div>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={4}>
      <Col span={8}>
        <Card style={style} cover={<img className="card-image" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
        <div className="card-title">Mona Lisa</div>
          <div>$300</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="card-title" >

        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" >
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card style={style} cover={
          <div className="container">
            <img className="card-image" alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            <div className="price">$300</div>
          </div>
           } >
            <div className="card-title">Mona Lisa</div>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="card-title" >

        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" >
          Card content
        </Card>
      </Col>
    </Row>

    </div>
  );
}

export default ItemGrid;