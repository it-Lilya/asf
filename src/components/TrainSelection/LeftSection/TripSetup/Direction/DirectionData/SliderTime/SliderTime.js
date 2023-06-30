import React, { useEffect, useState } from 'react';
import './SliderTime.css';

function changeFirst() {
  const rangeInput = document.querySelectorAll('.range-inputs-first input');
  const progress = document.querySelector('.progress-first');
  const list = document.querySelectorAll('.line-input-first input');
  const difference = 10000;
  rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      const minVal = parseInt(rangeInput[0].value, 10);
      const maxVal = parseInt(rangeInput[1].value, 10);
      if (maxVal - minVal < difference) {
        if (e.target.className === 'range-min') {
          rangeInput[0].value = maxVal - difference;
        } else {
          rangeInput[1].value = minVal + difference;
        }
      } else {
        list[0].value = minVal;
        list[1].value = maxVal;
        const calculationFirst = (minVal / rangeInput[0].max) * 100;
        const calculationSecond = 100 - (maxVal / rangeInput[1].max) * 100;
        progress.style.left = `${calculationFirst}%`;
        progress.style.right = `${calculationSecond}%`;
      }
    });
  });
}

function changeSecond() {
  const rangeInput = document.querySelectorAll('.range-inputs-second input');
  const progress = document.querySelector('.progress-second');
  const list = document.querySelectorAll('.line-input-second input');
  const difference = 10000;

  rangeInput.forEach((input) => {
    input.addEventListener('input', (e) => {
      const minVal = parseInt(rangeInput[0].value, 10);
      const maxVal = parseInt(rangeInput[1].value, 10);

      if (maxVal - minVal < difference) {
        if (e.target.className === 'range-min') {
          rangeInput[0].value = maxVal - difference;
        } else {
          rangeInput[1].value = minVal + difference;
        }
      } else {
        list[0].value = minVal;
        list[1].value = maxVal;
        const calculationFirst = (minVal / rangeInput[0].max) * 110;
        const calculationSecond = 100 - (maxVal / rangeInput[1].max) * 100;
        progress.style.left = `${calculationFirst}%`;
        progress.style.right = `${calculationSecond}%`;
      }
    });
  });
}

export const SliderTime = () => {
  const [timeFirst, setFirst] = useState('4:10');
  const [timeSecond, setSecond] = useState('19:26');
  const [timeThird, setThird] = useState('4:10');
  const [timeFourth, setFourth] = useState('19:26');

  useEffect(() => changeFirst());
  useEffect(() => changeSecond());
  function formatTimeFirst(e) {
    const timestamp = e.target.value;
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - hours * 60;
    const formated = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
    ];
    if (e.target.parentElement.classList.contains('range-inputs-first')) {
      setFirst(`${formated[0]}:${formated[1]}`);
    } else {
      setThird(`${formated[0]}:${formated[1]}`);
    }
  }
  function formatTimeSecond(e) {
    const timestamp = e.target.value;
    const hours = Math.floor(timestamp / 60 / 60);
    const minutes = Math.floor(timestamp / 60) - hours * 60;
    const formated = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
    ];
    if (e.target.parentElement.classList.contains('range-inputs-first')) {
      setSecond(`${formated[0]}:${formated[1]}`);
    } else {
      setFourth(`${formated[0]}:${formated[1]}`);
    }
  }
  return (
    <>
      <div className='direction-times'>
        <h4 className='direction-title-time first-time'>Время отбытия</h4>
        <div className='slider-first'>
          <div className='progress-first'></div>
        </div>
        <div className='range-inputs-first'>
          <input
            type='range'
            className='range-min'
            min='0'
            max='86400'
            defaultValue='15000'
            onChange={formatTimeFirst}
          ></input>
          <input
            type='range'
            className='range-max'
            min='0'
            max='86400'
            defaultValue='70000'
            onChange={formatTimeSecond}
          ></input>
        </div>

        <div className='line-input-first'>
          <span className='result'>{timeFirst}</span>
          <input type='number' className='input-min result-input' />
          <span className='result'>11:00</span>
          <input type='number' className='input-max  result-input' />
          <span className='result'>{timeSecond}</span>
        </div>
      </div>

      <div className='direction-times'>
        <h4 className='direction-title-time second-time'>Время прибытия</h4>
        <div className='slider-second'>
          <div className='progress-second'></div>
        </div>
        <div className='range-inputs-second'>
          <input
            type='range'
            className='range-min'
            min='0'
            max='86400'
            defaultValue='15000'
            onChange={formatTimeFirst}
          ></input>
          <input
            type='range'
            className='range-max'
            min='0'
            max='86400'
            defaultValue='70000'
            onChange={formatTimeSecond}
          ></input>
        </div>
        <div className='line-input-second'>
          <span className='result'>{timeThird}</span>
          <input type='number' className='input-min result-input' />
          <span className='result'>11:00</span>
          <input type='number' className='input-max result-input' />
          <span className='result'>{timeFourth}</span>
        </div>
      </div>
    </>
  );
};
