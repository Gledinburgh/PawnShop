import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { notification} from 'antd';

  const openFooterAdvert = (none, handleAdvertClick, handleAdvertClosed) => {
  console.log('fun', handleAdvertClosed)
      const placement = 'bottomLeft';

      notification.open({
        onClick: () => {handleAdvertClick(true)},
        onClose: () => {(handleAdvertClosed())},
        bottom: -10,
        left: -20,
        duration: null,
        width: 600,
        className:'ad bottom',
        // closeIcon: <button className="advert right"> X </button>,
        // icon: <button className="advert left"> AD</button>,
        placement
      });


    }


export default openFooterAdvert;