import React, { useState } from 'react';
import './NewElementCard.css';

export function NewElementCard({
  element, places, id, price, priceUpperSeats, priceLowerSeats,
}) {
  const [numberOfTop, setTop] = useState();
  const [numberOfLower, setLower] = useState();
  function mouse(e) {
    const windows = document.querySelectorAll('.mouse-open-list');
    if (element === 'Сидячий' || element === 'Люкс') {
      return;
    }
    if (e.target.parentElement.lastChild.classList.contains('mouse-open-list-active')) {
      e.target.parentElement.lastChild.className = 'mouse-open-list';
    } else {
      windows.forEach((el) => el.classList.remove('mouse-open-list-active'));
      e.target.parentElement.lastChild.classList.add('mouse-open-list-active');
      e.target.classList.add('target-active');
      setTop(Math.round((Number(e.target.textContent) / 3) * 2));
      setLower(Math.round(Number(e.target.textContent) / 3));
    }
  }
  return (
    <div className='type-wagons' id={id}>
        <p className='wagons-name'>{element}</p>
        <p className='number-of-seats number-of-seats-first' onClick={mouse}>{places}</p>
        <p className='starting-price'>
          <span className='span-starting'>от</span>
          <span className='span-starting-price'>{price}</span>
          <span className='span-starting-vector'>₽</span>
        </p>
        <div className='mouse-open-list'>
           <div className='upeer-places'>
            <p>верхние</p>
            <span className='number-of-seats'>{numberOfTop}</span>
            <p className='starting-price'>
              <span className='span-starting-price'>{priceUpperSeats}</span>
              <span className='span-starting-vector'>₽</span>
            </p>
          </div>
          <div className='upeer-places'>
            <p>нижние</p>
            <span className='number-of-seats'>{numberOfLower}</span>
            <p className='starting-price'>
              <span className='span-starting-price'>{priceLowerSeats}</span>
              <span className='span-starting-vector'>₽</span>
            </p>
          </div>
          </div>
    </div>
  );
}
