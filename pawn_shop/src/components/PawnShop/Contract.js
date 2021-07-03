import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Modal, Input, notification, Divider } from 'antd';
import pageAnimation from '../../pageAnimation';
import PageNameContext from '../../PageNameContext';
import axios from 'axios';

const Filter = require('bad-words')
const filter = new Filter();

const { Search } = Input;
const Contract = ({ isVisible, handleModalVisibility, shouldDestroyAdverts }) => {

  const history = useHistory()
  const { pageName, handlePageNameChange } = useContext(PageNameContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [textEntry, setTextEntry] = useState('');
  const [placeholder, setPlaceHolder] = useState('your name');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);




  async function handleOk() {
    if (isSubmitted || !textEntry) return
    let censoredText = filter.clean(String(textEntry));
    let date = new Date();
    let newGuestEntry = { name: censoredText, date: date }
    setIsLoading(true);

    await axios.post('/guestbook', newGuestEntry)
      .then(() => { setIsLoading(false); setTextEntry(''); setPlaceHolder('Thank You') })
      .catch(() => { setTextEntry(''); setIsLoading(false); setPlaceHolder('Error') });
    setIsSubmitted(true);
    //after appening the users enty to guestbook file, close adverts and transition to holy relapse page
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
  }, [isVisible, isLoading, isModalVisible])

  return (
    <>
      <Modal
        className="contract"
        title="** Exclusive Offer **"
        visible={isModalVisible}
        onCancel={handleCancel}
        closable={true}>

        <div id="offer">
          <Divider> </Divider>
          <Divider style={{ color: '#1c6447' }}>sneek Peek</Divider>
          <Divider> </Divider>
          <img className="holy" src="Holy_Relapse.webp" alt="The Holy Relapse Title"></img>
          {/* <Divider>the comic</Divider> */}
          <Divider> </Divider>
          <Divider style={{ color: '#1c6447' }}>Just sign below</Divider>
          <Divider> </Divider>
          <div className="terms"> <p className="opening"><b>Terms Of Service</b></p> {terms}<p className="opening"><b>We appreciate your buisness</b></p></div>
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

const terms = 'I hereby forfeit my soul in exchange for access to this exclusive content. I verify to the best of my knowledge that this is indeed my soul and not the soul of another. All soul transactions are eligible to be reclaimed in the standard 90 day time frame and are subject to eternal anguish thereafter. All parties attempting to reclaim the soul in question must present a receipt of the original transaction, 3 forms of identification and a hand-written letter of referral by a trusted unholy entity (human or otherwise). If any parties wishing to forfeit/reclaim a soul are unable to meet any and/or all of these conditions, a trial by fire will be initiated purely for entertainment purposes and to recoup the loss of wasted time. Please sign below... '

export default Contract;