import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';

import { Modal, Input, notification,Divider} from 'antd';
import pageAnimation from '../../pageAnimation';
import PageNameContext from '../../PageNameContext';
import axios from 'axios';

const Filter = require('bad-words')
const filter = new Filter();

const { Search } = Input;
const Contract = ({isVisible, handleModalVisibility, shouldDestroyAdverts}) => {

  const history = useHistory()
  const { pageName, handlePageNameChange} = useContext(PageNameContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [textEntry, setTextEntry] = useState('');
  const [placeholder, setPlaceHolder] = useState('your name');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);




  async function handleOk() {
    if (isSubmitted || !textEntry) return
    let censoredText = !textEntry ? "anonymous":  filter.clean(String(textEntry));
    let date = new Date();
    let newGuestEntry = {name : censoredText, date: date}
    setIsLoading(true);

    await axios.post('/guestbook',newGuestEntry)
      .then( () => {setIsLoading(false); setTextEntry(''); setPlaceHolder('Thank You')} )
      .catch(() => {setTextEntry('');setIsLoading(false);setPlaceHolder('Error')}  );
    setIsSubmitted(true);
    handleModalVisibility(false);
    Modal.destroyAll();
    await pageAnimation('add');
    history.push('/holyrelapse');
    notification.destroy();
  };

   const handleChange = (event) => {
     const text = event.target.value
     if (text.length < 25) {
       setTextEntry(text)
     }
  }

  const handleCancel = () => {
    handleModalVisibility(false);
  };

  useEffect(() => {
    console.log('useEffect: Contract');


    setIsModalVisible(isVisible)
  }, [isVisible,isLoading, isModalVisible])

  return (
    <>
      <Modal
        className="contract"
        title="** Exclusive Offer **"
        visible={isModalVisible}
        footer="** Exclusive Offer **"
        // onOk={handleOk}
        onCancel={handleCancel}
        closable={true}>

        <div id="offer">
          <Divider> </Divider>
          <Divider style={{color: '#1c6447'}}>sneek Peek</Divider>
          <Divider> </Divider>
          <img className="holy" src="Holy_Relapse.webp" alt="The Holy Relapse Title"></img>
          {/* <Divider>the comic</Divider> */}
          <Divider> </Divider>
          <Divider  style={{color: '#1c6447'}}>Just sign below</Divider>
          <Divider> </Divider>
          <div className="terms"> <p className="opening"><b>Terms Of Service</b></p> {terms}</div>
          <div className="sign flex-row">
            <Search
              value={textEntry}
              onChange={handleChange}
              enterButton="sign"
              placeholder={placeholder}
              loading={isLoading}
              onSearch={handleOk}
              />
              </div>
        </div>
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