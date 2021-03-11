import { notification} from 'antd';

const getRandomInt = (min, max)  => {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

  const openAdvert = (position, handleAdvertClick, handleAdvertClosed) => {

      const adVarient = getRandomInt(1,3)
      const placement = position;

      notification.open({
        onClick: () => {handleAdvertClick(true)},
        onClose: () => {handleAdvertClosed()},

        duration: null,
        className:`ad ad${adVarient}  ${position}`,
        closeIcon: <button className="advert close"> X </button>,
        icon: <button className="advert"> AD</button>,
        placement
      });
    }


export default openAdvert;