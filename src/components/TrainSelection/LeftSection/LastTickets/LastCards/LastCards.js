import React from 'react';
import './LastCards.css';

export function LastCards() {
  return (
    <div className='last-cards-container'>
        <div className='last-cards-city-container'>
            <div className='last-cards-first-city'>
                <p className='last-first-name last-card-city'>Москва</p>
                <p className='first-railway-station railway-station'>Курский вокзал</p>
            </div>
            <div className='last-cards-second-city'>
                <p className='last-second-name last-card-city'>Самара</p>
                <p className='second-railway-station railway-station'>Московский вокзал</p>
            </div>
        </div>
        <div className='panel-with-options'>
          <div className='panel-options-icons'>
            <p className='icons-options'></p>
            <p className='icons-options'></p>
            <p className='icons-options'></p>
          </div>
          <p className='information-price-panel'>
            <span className='panel-price-from'>от </span>
            <span className='panel-price'>2500 </span>
            <span className='panel-vector'>₽</span></p>
        </div>
    </div>
  );
}
