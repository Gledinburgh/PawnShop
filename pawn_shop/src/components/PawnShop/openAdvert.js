import {notification} from 'antd';

const openAdvert = (placement, handleAdvertClick) => {

  notification.open({
  onClick: () => {handleAdvertClick(true)},
  bottom: -10,
  left: -20,
  duration: null,
  width: 600,
  className:'ad',
  closeIcon: <button className="advert close"> X </button>,
  icon: <button className="advert"> AD</button>,
  placement
  });

  return (<div></div>)
}

export default openAdvert;