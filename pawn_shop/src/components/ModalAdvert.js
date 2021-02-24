import { Modal, Checkbox, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {useHistory} from 'react-router-dom';

const {confirm} = Modal;

function showPromiseConfirm(history, shouldDestroyAdverts) {
  confirm({
    title: 'Holy Relapse?',
    icon: <ExclamationCircleOutlined />,
    content: <div>Get an exclusive sneek peek at the upcomming comic<Checkbox>I forfit my soul</Checkbox></div>,
    style: {'background-color': '#9ff09e'},
    bodyStyle: {'height':'10'},
    onOk() {

    },
    onCancel() {
      history.push('/holyrelapse');
       Modal.destroyAll();
      shouldDestroyAdverts();
    },
    okText: 'What?',
    cancelText: 'YES'

  });
}






export default showPromiseConfirm;