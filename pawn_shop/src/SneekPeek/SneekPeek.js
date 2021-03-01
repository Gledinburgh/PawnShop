import {React, useEffect, useContext} from 'react';
import PageNameContext from '../PageNameContext';
import './sneekPeek.css'
import CharacterList from './CharacterList';
import {Image, Layout, notification,} from 'antd';
const { Footer} = Layout;


document.body.style.backgroundColor = "#ff7eba";

  const SneekPeek = () => {
  const { pageName, handlePageNameChange} = useContext(PageNameContext)

  document.body.style.backgroundColor = "#ff7eba";

  useEffect(() => {
    notification.destroy();
    handlePageNameChange('SneekPeek');
  },[])
  return(
    <>
      <div id="wrapper">
        <div id="title"><Image preview={false} id="holy-relapse" src="Holy_Relapse.png" alt="Holy Relapse Title" /></div>
        <div className="intro">some words about the comic</div>
        <CharacterList />
        <Footer> </Footer>
      </div>
    </>
  )


}

export default SneekPeek;