import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { notification} from 'antd';
import showPromiseConfirm from './ModalAdvert'

const FooterAdvert = ({destroyAdverts, history}) => {
console.log(history)
var  [timer, setTimer] = useState(true);

  const openFooterNotification = () => {

    if (timer) {
      const placement = 'bottomLeft';

      notification.open({
        onClick: () => {showPromiseConfirm(history, destroyAdverts)},
        bottom: -10,
        left: -20,
        duration: null,
        width: 600,
        className:'ad bottom',
        closeIcon: <button className="advert right"> X </button>,
        icon: <button className="advert left"> AD</button>,
        placement
      });
      setTimer(true);
      setTimeout(() => {setTimer(false)}, 10000)

    }

    }

    return (

        <div onClick={setTimeout(openFooterNotification, 5000)}></div>

    )
}

export default FooterAdvert;