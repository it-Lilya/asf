import React, { useEffect, useState } from 'react';
import './Price.css';

function changeFirst() {
  const rangeInput = document.querySelectorAll('.range-inputs-price input');
  const progress = document.querySelector('.progress-price');
  const difference = 1000;
  rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      const minVal = rangeInput[0].value;
      const maxVal = rangeInput[1].value;
      if (maxVal - minVal < difference) {
        if (e.target.className === 'range-price-min') {
          rangeInput[0].value = maxVal - difference;
        } else {
          rangeInput[1].value = minVal + difference;
        }
      } else {
        progress.style.left = `${((minVal / rangeInput[0].max) * 120) - 30}%`;
        progress.style.right = `${125 - ((maxVal / rangeInput[1].max) * 120)}%`;
      }
    });
  });
}

export const Price = () => {
  const [firstPrice, setFirstPrice] = useState('3000');
  const [endPrice, setEndPrice] = useState('5800');

  function firstPriceChange(e) {
    setFirstPrice(e.target.value);
  }
  function secondPriceChange(e) {
    if (Number(e.target.value) >= 7000) {
      setEndPrice('');
    } else {
      setEndPrice(e.target.value);
    }
  }

  useEffect(() => changeFirst(), []);
  return (
    <div className='price-container'>
      <h4 className='price-title'>Стоимость</h4>
      <div className='contain-price'>
        <div className='range-price'>
          <p>от</p>
          <p>до</p>
        </div>
        <div className='direction-times'>
          <div className='slider-price'>
            <div className='progress-price'></div>
          </div>
          <div className='range-inputs-price'>
            <input
              type='range'
              className='range-price-min'
              min='1920'
              max='7000'
              defaultValue='1920'
              onChange={firstPriceChange}
            ></input>
            <input
              type='range'
              className='range-price-max'
              min='1920'
              max='7000'
              defaultValue='5800'
              onChange={secondPriceChange}
            ></input>
          </div>

          <div className='line-input-price'>
            <span className='result-price'>{firstPrice}</span>
            <input type='number' className='input-min input' defaultValue='1920' />
            <span className='result'>{endPrice}</span>
            <input type='number' className='input-max input' defaultValue='5800' />
            <span className='result-price'>7000</span>
          </div>
        </div>
      </div>
    </div>
  );
};
