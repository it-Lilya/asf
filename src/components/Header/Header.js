import React from 'react';
import './Header.css';
import { HeaderMenu } from './Cap/HeaderMenu/HeaderMenu';
import { HeaderBottom } from './Cap/HeaderBottom/HeaderBottom';

export const Header = () => (
    <header className='header'>
      <div className='main-image'>
        <div className='main-container'>
          <div className='main-logo'>Лого</div>
        </div>
        <HeaderMenu />
        <HeaderBottom />
      </div>
    </header>
);
