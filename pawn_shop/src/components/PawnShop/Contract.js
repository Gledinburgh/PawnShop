import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { Modal, Button, notification} from 'antd';
import pageAnimation from '../../pageAnimation';
import PageNameContext from '../../PageNameContext';

const Contract = ({isVisible, handleModalVisibility, shouldDestroyAdverts}) => {

  const history = useHistory()
  const { pageName, handlePageNameChange} = useContext(PageNameContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  async function handleOk() {
    setIsModalVisible(false);

    await pageAnimation('add');

    history.push('/holyrelapse');
    Modal.destroyAll();
    notification.destroy();

  };

  const handleCancel = () => {
    handleModalVisibility(false);
  };

  useEffect(() => {

    setIsModalVisible(isVisible)
  }, [isVisible])

  return (
    <>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};


// function showPromiseConfirm(history, shouldDestroyAdverts) {
//   confirm({
//     title: <p className='center'>** Exclusive Offer **</p>,
//     content: <div >
//                  <p>Get a sneek peek at Mauro de la Tierra's</p>
//                  <img className="holy" src="Holy_Relapse.png" alt="The Holy Relapse Title"></img>
//                  <p>For absolutly no money atall, you can get the inside scoop on this facinating createion.</p>

//                  <div id="terms"> <p className="opening"><b>Terms Of Service</b></p> {terms}</div>
//                  <p>You must read and agree to the above Terms</p>
//                 <Checkbox className="checkbox">I agree to the terms above</Checkbox>
//               </div>,
//     style: {'background-color': '#9ff09e'},
//     bodyStyle: {'height':'10'},
//     icon: <div></div>,
//     onOk() {

//     },
//     onCancel() {
//       history.push('/holyrelapse');
//        Modal.destroyAll();
//       shouldDestroyAdverts();
//     },
//     okText: 'What?',
//     cancelText: 'Continue Transaction'

//   });
// }

const terms = 'I here by forit my soul in exchange for access to this exclusive content. I verify to the best of my knowledge that this is indeed my soul and not the soul of another. All soul transactions are eligable for re-purchace in the standard 90 day time frame, and are subject to ..... words  I here by forit my soul in exchange for access to this exclusive content. I verify to the best of my knowledge that this is indeed my soul and not the soul of another. All soul transactions are eligable for re-purchace in the standard 90 day time frame, and are subject to ..... words. I here by forit my soul in exchange for access to this exclusive content. I verify to the best of my knowledge that this is indeed my soul and not the soul of another. All soul transactions are eligable for re-purchace in the standard 90 day time frame, and are subject to ..... words '





export default Contract;