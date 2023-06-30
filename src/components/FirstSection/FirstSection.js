import React from 'react';
import './FirstSection.css';

export const FirstSection = () => (
    <section className='information' id="first-block">
      <h3 className='information-title'>О нас</h3>
      <div className='information-text'>
        <span className='trait'></span>
        <div className='text-info'>
          <p className='texts'>
            Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
            наблюдаем, как с каждым днем все больше людей заказывают жд билеты
            через интернет.
          </p>
          <p className='texts'>
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2
            клика, но стоит ли это делать? Мы расскажем о преимуществах заказа
            через интернет.
          </p>
          <p className='texts selection-text'>
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.
            Благодаря динамическому ценообразованию цена на билеты в это время
            самая низкая.
          </p>
        </div>
      </div>
    </section>
);
