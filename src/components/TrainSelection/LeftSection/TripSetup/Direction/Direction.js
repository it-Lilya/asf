import React, { useState } from 'react';
import './Direction.css';
import { DirectionData } from './DirectionData/DirectionData';

export const Direction = () => {
  const directionFirst = <>
  <DirectionData/>
  </>;
  const [resultFirst, setFirst] = useState();
  const [resultSecond, setSecond] = useState();
  function open(e) {
    const btns = document.querySelectorAll('.btns-directions');
    e.target.classList.toggle('open-direction-data');
    e.target.classList.toggle('icon-direction');
    if (e.target.classList.contains('direction-first')) {
      btns[1].className = 'btns-directions icon-direction direction-second';
      setSecond();
      setFirst(directionFirst);
      if (e.target.classList.contains('icon-direction')) {
        setFirst();
      }
    }
    if (e.target.classList.contains('direction-second')) {
      btns[0].className = 'btns-directions icon-direction direction-first';
      setFirst();
      setSecond(directionFirst);
      if (e.target.classList.contains('icon-direction')) {
        setSecond();
      }
    }
  }
  return (
    <>
      <div className='direction-container'>
        <div className='direction-header'>
          <span className='img-direction-first'></span>
          <h4 className='direction-title'>Туда</h4>
          <button className='btns-directions icon-direction direction-first' onClick={open}></button>
        </div>
        {resultFirst}
      </div>
      <div className='direction-container'>
        <div className='direction-header'>
          <span className='img-direction-second'></span>
          <h4 className='direction-title'>Обратно</h4>
          <button className='btns-directions icon-direction direction-second' onClick={open}></button>
        </div>
        {resultSecond}
      </div>
    </>
  );
};
