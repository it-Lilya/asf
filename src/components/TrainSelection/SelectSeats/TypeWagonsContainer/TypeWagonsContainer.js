import React from 'react';
import './TypeWagonsContainer.css';

export function TypeWagonsContainer() {
  return (
    <div className='general-type-wagons'>
    <h4>Тип вагона</h4>
     <div className='tickets-type-wagons-container'>
        <div className='tickets-type-icon tickets-type-icon-sedentary'>
          <div className='tickets-type-sedentary'></div>
          <p>Сидячий</p>
        </div>
        <div className='tickets-type-icon tickets-type-icon-reserved'>
          <div className='tickets-type-reserved'></div>
          <p>Плацкарт</p>
        </div>
        <div className='tickets-type-icon tickets-type-icon-cupe'>
          <div className='tickets-type-cupe'></div>
          <p>Купе</p>
        </div>
        <div className='tickets-type-icon tickets-type-icon-lux'>
          <div className='tickets-type-lux'></div>
          <p>Люкс</p>
        </div>
      </div>
    </div>
  );
}
