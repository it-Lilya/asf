import React from 'react';
import './HeaderForm.css';
import { MyApp } from './Calendar/Calendar';
import { Cities } from './Cities/Cities';

export const HeaderForm = () => (
    <div className='bottom-form-container'>
      <form id='form-search' className='bottom-form'>
        <div className='fir'>
          <h4 className='form-direction'>Направление</h4>
        <div className='input-container'>
          <Cities />
        </div>
        </div>
        <div className='sec'>
          <h4 className='form-direction'>Дата</h4>
        <div className='search-data'>
            <MyApp />
        </div>
        </div>
        </form>
        <button id='btn-search' className='search-button' type='button'>Найти билеты</button>
    </div>
);
