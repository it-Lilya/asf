import React from 'react';
import './HeaderMenu.css';
// import {Routes, Route } from 'react-router-dom';

function scrollAbout(e) {
  // window.scrollTo({ top: 845 });
  e.preventDefault();
  const blockId = e.target.getAttribute('href').substr(1);
  document.getElementById(blockId).scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
}
// function scrollWork() {
//   window.scrollTo({ top: 1330 });
// }
// function scrollViews() {
//   window.scrollTo({ top: 1800 });
// }
// function scrollContacts() {
//   window.scrollTo({ top: 2000 });
// }
export const HeaderMenu = () => (
        <div className='menu'>
            <ul className='menu-container'>
              <li><a href="#first-block" className='menu-item' onClick={scrollAbout}>О нас</a></li>
              <li><a href="#second-block" className='menu-item'>Как это работает</a></li>
              <li><a href="#third-block" className='menu-item'>Отзывы</a></li>
              <li><a href="#four-block" className='menu-item'>Контакты</a></li>
            </ul>
        </div>
);
