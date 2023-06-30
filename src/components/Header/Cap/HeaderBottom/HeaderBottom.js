import React from 'react';
import './HeaderBottom.css';
import { HeaderForm } from './Bottom/HeaderForm/HeaderForm';

export const HeaderBottom = () => (
    <div className='header-bottom'>
      <h2 className='bottom-tigline'>
        Вся жизнь - <span className='selection'>путешествие!</span>
      </h2>
      <HeaderForm />
    </div>
);
