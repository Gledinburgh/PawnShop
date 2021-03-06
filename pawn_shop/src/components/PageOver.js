import {useEffect, useState, useContext} from 'react';
import pageAnimation from '../pageAnimation';
import addPages from '../addPages';

const PageOver = ({pageOverType, shouldPageOver, handlePageChange}) => {

  const getRandomInt = (min, max)  => {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  const positions = Array.from({length: 40}, () => getRandomInt(8, 12));

  useEffect(() =>{
    if (shouldPageOver)  pageAnimation(pageOverType, shouldPageOver);

  },[shouldPageOver]);

  return (
    <>
    {
    positions.map(position => {
      return (
        <img
        className="missing"
        src={`missing${getRandomInt(1,3)}.webp`}
        alt='missing jesus poster'
        style={{
          transform: `rotate(${position * getRandomInt(-50, 10)}deg)`,
          top:  `${(position * getRandomInt(-2, 12))}vw`,
          left: `${position + getRandomInt(-50, 50) * 2}vw`,
        }}
        ></img>
      )
    })}
    <img  style={{transform :`rotate(${getRandomInt(-10, 10)}deg) translateX(-50%)` }} id="top-page" src={`missing${getRandomInt(1,3)}.webp`} alt='missing poster'></img>
    </>

  )

}

export default PageOver