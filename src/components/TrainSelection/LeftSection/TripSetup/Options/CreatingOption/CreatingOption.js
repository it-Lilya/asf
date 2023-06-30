import React, { useState } from 'react';
import './CreatingOption.css';

function movement(e) {
  e.classList.toggle('switch-on');
  if (e.parentElement.classList.contains('checking')) {
    e.parentElement.classList.toggle('on-parent');
  }
}

export const CretingOption = () => {
  const [check, setCheck] = useState({
    coupe: false,
    reserved: false,
    seated: false,
    lux: false,
    wifi: false,
    express: false,
  });
  return (
      <div className='options-container'>
        <div className='option-element checkbox-coupe'>
          <span className='option-icon coupe-img'></span>
          <p className='option-title'>Купе</p>
          <div className='checking' onClick={(e) => {
            setCheck({ ...check, coupe: !check.coupe });
            movement(e.target);
          }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.coupe}/>
          </div>
        </div>
        <div className='option-element checkbox-seat'>
          <span className='option-icon seat-img'></span>
          <p className='option-title'>Плацкарт</p>
          <div className='checking' onClick={(e) => {
            setCheck({ ...check, seat: !check.seat });
            movement(e.target);
          }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.seat}/>
          </div>
        </div>
        <div className='option-element checkbox-seated'>
          <span className='option-icon seated-img'></span>
          <p className='option-title'>Сидячий</p>
          <div className='checking' onClick={(e) => {
            setCheck({ ...check, seated: !check.seated });
            movement(e.target);
          }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.seated}/>
          </div>
        </div>
        <div className='option-element checkbox-lux'>
          <span className='option-icon lux-img'></span>
          <p className='option-title'>Люкс</p>
          <div className='checking' onClick={(e) => {
            setCheck({ ...check, lux: !check.lux });
            movement(e.target);
          }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.lux}/>
          </div>
        </div>
        <div className='option-element checkbox-wifi'>
          <span className='option-icon wifi-img'></span>
          <p className='option-title'>Wi-Fi</p>
          <div className='checking' onClick={(e) => {
            setCheck({ ...check, wifi: !check.wifi });
            movement(e.target);
          }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.wifi}/>
          </div>
        </div>
        <div className='option-element checkbox-express'>
          <span className='option-icon express-img'></span>
          <p className='option-title'>Экспресс</p>
          <div className='checking' onClick={(e) => {
            setCheck({ ...check, express: !check.express });
            movement(e.target);
          }}>
            <input className='checkbox-input option-switch' type='checkbox' defaultValue={check.express}/>
          </div>
        </div>
      </div>
  );
};
