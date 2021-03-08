import GuestBook from './GuestBook';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Layout, Divider} from 'antd';
import {useHistory} from 'react-router-dom';
import './souls.css';



const { Header, Footer, Content} = Layout;
const headstyle = {background: "#ff517d", 'fontFamily': 'Suez One', position: 'sticky'}
const footstyle = {position: 'fixed', Bottom: 0, background: "#ffff62", 'fontFamily': 'Suez One', color: '#ff4775', 'textAlign': 'center'}


const Souls = () => {
  const history = useHistory();

  const [guestEntries, setGuestEntries] = useState ('[{"name": "guest1", "date": "2021-03-01T22:37:13.538Z"},]');
    const [parsedEntries,setparsedEntries] = useState([{"name": "guest1", "date": "2021-03-01T22:37:13.538Z"},])

    const fetchGuestEntries = async () => {
      axios.get('/guestbook').then(entries => {
        if (entries.data !== guestEntries) {
        setGuestEntries(entries.data)
        setparsedEntries (JSON.parse(entries.data));
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
    <Header className="pawn-shop" style={headstyle}><span onClick={() => goToEndpoint('/pawnshop')}>PAWN SHOP</span></Header>
      <Divider style={{ marginTop: '3vh', color: '#ff4775', borderTop : '#b4f8d8'}}> </Divider>
      <Divider style={{color: '#ff4775', borderTop : '#b4f8d8'}}>SOULS </Divider>

    <div style={{'overflowY' :"visible"}} className="flex-row">
    <div className="levy"/>
      <GuestBook className="guest-book" guestEntries={parsedEntries}></GuestBook>
    <div className="levy"/>

    </div>
      <Divider style={{color: '#ff4775', borderTop : '#b4f8d8'}}> </Divider>
      <Divider style={{marginTop: '3vh', color: '#ff4775', borderTop : '#b4f8d8'}}> </Divider>
    <div id="cushion"/>
    <Footer style={footstyle}> <span onClick={() => goToEndpoint('/souls')}>Souls</span>/ Contact Us / About </Footer>
    </div>
  )

}

export default Souls;
