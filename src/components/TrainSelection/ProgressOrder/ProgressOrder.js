import React from 'react';
import './ProgressOrder.css';
import { NavLink } from 'react-router-dom';
// function panelSwitching() {
//   const paragraphs = document.querySelectorAll('.paragraph');
//   paragraphs.forEach((e) => {
//     e.addEventListener('click', () => {
//       e.classList.toggle('paragraph-active');
//       if (e.querySelector('.triandle-end')) {
//         e.querySelector('.triandle-end').classList.toggle('triangle-active');
//       }
//       if (e.previousElementSibling) {
//         e.previousElementSibling.querySelector('.start-triangle').classList.toggle('start-triangle-active');
//       }
//     });
//   });
// }
export function ProgressOrder() {
  return (
  <div className='progress-order'>
      <div className='progress-container'>
            <NavLink className='paragraph paragraph-active'>
                <div className='btn-and-text'>
                    <button className='progress-btn'>1</button>
                    <h3 className='progress-text'>Билеты</h3>
                    <div className='triangle'>
                        <span className='triandle-end triangle-active'></span>
                        <span className='start-triangle'></span>
                    </div>
                </div>
            </NavLink>
            <NavLink className='paragraph'>
                <div className='btn-and-text'>
                    <button className='progress-btn'>2</button>
                    <h3 className='progress-text'>Пассажиры</h3>
                <div className='triangle'>
                        <span className='triandle-end'></span>
                        <span className='start-triangle'></span>
                    </div>
                </div>
            </NavLink>
            <NavLink className='paragraph'>
                <div className='btn-and-text'>
                    <button className='progress-btn'>3</button>
                    <h3 className='progress-text'>Оплата</h3>
                <div className='triangle'>
                        <span className='triandle-end'></span>
                        <span className='start-triangle'></span>
                    </div>
                </div>
            </NavLink>
            <NavLink className='paragraph'>
                <div className='btn-and-text'>
                    <button className='progress-btn'>4</button>
                    <h3 className='progress-text'>Проверка</h3>
                </div>
            </NavLink>
            </div>
        </div>
  );
}
