import GuestBook from './GuestBook';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Divider } from 'antd';
import MainFooter from '../MainFooter';
import MainHeader from '../MainHeader';
import { useHistory } from 'react-router-dom';
import './souls.css';

const Souls = () => {
  const history = useHistory();

  const [guestEntries, setGuestEntries] = useState('[{"123456789 123456789 1234566": "guest1", "date": "2021-03-01T22:37:13.538Z"},]');
  const [parsedEntries, setparsedEntries] = useState([{ name: "123456789 123456789 1234566", "date": "2021-03-01T22:37:13.538Z" }])

  const fetchGuestEntries = async () => {
    axios.get('/guestbook').then(entries => {
      if (entries.data !== guestEntries) {
        setGuestEntries(entries.data)
        setparsedEntries(JSON.parse(entries.data).reverse());
      }
    });
  }

  const goToEndpoint = (endpoint) => {
    history.push(endpoint);
  }

  useEffect(() => {
    console.log('useEffect: Souls');
    fetchGuestEntries();
  }, [guestEntries, parsedEntries])

  document.body.style.backgroundColor = "#e5ffe3"


  return (
    <div className="flex-col" >
      <MainHeader />
      <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#b4f8d8' }}> </Divider>
      <Divider style={{ color: '#ff4775', borderTop: '#b4f8d8' }}>SOULS </Divider>

      <div style={{ 'overflowY': "visible" }} className="flex-row">
        <GuestBook className="guest-book" guestEntries={parsedEntries}></GuestBook>

      </div>
      <Divider style={{ color: '#ff4775', borderTop: '#b4f8d8' }}> </Divider>
      <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop: '#b4f8d8' }}> </Divider>
      <div id="cushion" />
      <MainFooter></MainFooter>
    </div>
  )

}

export default Souls;
