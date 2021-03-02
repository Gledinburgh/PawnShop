import {React,useState, useEffect, useContext} from 'react';
import axios from 'axios';

import PageNameContext from '../PageNameContext';
import './sneekPeek.css'
import CharacterList from './CharacterList';
import Comments from './Comments';
import {Image, Layout, notification,} from 'antd';
const { Footer} = Layout;


document.body.style.backgroundColor = "#ff7eba";

  const SneekPeek = () => {
  const { pageName, handlePageNameChange} = useContext(PageNameContext)
  const [guestEntries, setGuestEntries] = useState ([
    {
        "name": "guest1",
        "comment": "hello there",
        "date": "2021-03-01T22:37:13.538Z"
    },])

  const fetchGuestEntries = () => {
    axios.get('/guestbook').then(currentGuestEntries => JSON.parse(setGuestEntries(currentGuestEntries)));
  }

  document.body.style.backgroundColor = "#ff7eba";

  useEffect(() => {
    notification.destroy();
    handlePageNameChange('SneekPeek');
    fetchGuestEntries();
    console.log('useEffect: sneekPeek');
  },[guestEntries])

  return(
    <>
      <div id="wrapper">
        <div id="title"><Image preview={false} id="holy-relapse" src="Holy_Relapse.png" alt="Holy Relapse Title" /></div>
        <div className="intro">some words about the comic</div>
        <CharacterList />
        <Comments guestEntries={guestEntries}/>
        <Footer> </Footer>

      </div>
    </>
  )


}

export default SneekPeek;