import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const {confirm} = Modal;

function showPromiseConfirm() {
  confirm({
    title: 'Holy Relapse?',
    icon: <ExclamationCircleOutlined />,
    content: 'Get a sneek peak of the upcomming Comic',
    style: {'background-color': '#9ff09e'},
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
    okText: 'What?',
    cancelText: 'YES'

  });
}






export default showPromiseConfirm;