import {useEffect, useState} from 'react';
import removePages from '../removePages'
import addPages from '../addPages'


const PageOver = ({pageOverType, shouldPageOver, handlePageChange}) => {


  const getRandomInt = (min, max)  => {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  const postions = Array.from({length: 40}, () => getRandomInt(8, 12));

  useEffect(() =>{

    handlePageChange()
    console.log('Page over fired')
  },[]);

  return (
    <>
    {
    postions.map(position => {
      return (
        <img
        className="missing"
        src="missing.png"
        alt='missing jesus poster'
        style={{
          transform: `rotate(${position * getRandomInt(-50, 10)}deg)`,
          top:  `${(position * getRandomInt(-2, 12))}vw`,
          left: `${position + getRandomInt(-50, 50) * 2}vw`,
        }}
        ></img>
      )
    })}
    <img  style={{transform :`rotate(${getRandomInt(-10, 10)}deg) translateX(-50%)` }} id="top-page" src="missing.png" alt='missing jesus poster'></img>
    </>

  )

}

export default PageOver