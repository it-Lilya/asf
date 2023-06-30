import React from 'react';
import './SecondSection.css';

export const SecondSection = () => (
    <section className='work' id='second-block'>
      <div className='information-work'>
        <div className='work-container'>
          <h4 className='work-title'>Как это работает</h4>
          <button className='work-button'>Узнать больше</button>
        </div>
        <div className='group-links'>
          <div className='vector-btn'>
            <button className='btn-vector vector-order'>
              <i className='btn-vector-image img-first'></i>
            </button>
            <p className='vector-text'>Удобный заказ на сайте</p>
          </div>
          <div className='vector-btn'>
            <button className='btn-vector vector-office'>
              <i className='btn-vector-image img-second'></i>
            </button>
            <p className='vector-text'>Нет необходимости ехать в офис</p>
          </div>
          <div className='vector-btn'>
            <button className='btn-vector vector-directions'>
              <i className='btn-vector-image img-third'></i>
            </button>
            <p className='vector-text'>Огромный выбор направлений</p>
          </div>
        </div>
      </div>
    </section>
);
