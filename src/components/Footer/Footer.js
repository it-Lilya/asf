import React, { useState } from 'react';
import './Footer.css';
import { validateEmail } from './ValidateEmail';

export const Footer = () => {
  const [input, setInput] = useState('');

  function inputSubscribe(e) {
    setInput(e.target.value);
  }

  function submit() {
    if (!validateEmail(input)) {
      // alert('Email указана некорректно.\n Пример: mail@mail.com');
      return;
    }
    fetch(`https://netology-trainbooking.netoservices.ru/subscribe?email=${input}`, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: input,
    })
      .then((response) => response.json());
    setInput('');
  }
  function scroll() {
    window.scrollTo({ top: 0 });
  }
  return (
    <footer className='footer' id='four-block'>
      <div className='footer-container'>
        <div className='footer-contacts'>
          <h4 className='contacts-title'>Свяжитесь с нами</h4>
          <ul className='contacts-list'>
            <li className='contacts-container'>
              <a className='contacts-item cont-phone' href='tel:88000000000'>
                8 (800) 000 00 00
              </a>
            </li>
            <li>
              <a
                className='contacts-item cont-email'
                href='mailto:inbox@mail.ru'
              >
                inbox@mail.ru
              </a>
            </li>
            <li>
              <a
                className='contacts-item cont-skype'
                target='_blank'
                href='tu.train.tickets'
              >
                tu.train.tickets
              </a>
            </li>
            <li>
              <a
                className='contacts-item cont-address'
                target='_blank'
                href='google.maps.com'
              >
                г. Москва ул. Московская 27-35 555 555
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-subscription'>
          <h4 className='subscribe-title'>Подписка</h4>
          <form className='subscribe-form'>
            <h5 className='sub-form-title'>Будьте в курсе событий</h5>
            <div className='subscriptions-form'>
              <input
                className='sub-form-input'
                type='text'
                defaultValue={input}
                placeholder='e-mail'
                onChange={inputSubscribe}
              ></input>
              <button className='sub-form-btn' type='button' onClick={submit}>
                Отправить
              </button>
            </div>
          </form>
          <h5 className='sub-links-title'>Подписывайтесь на нас</h5>
          <ul className='sub-links-list'>
            <li className='sub-links'>
              <a
                className='sub-link link-youtube'
                target='_blank'
                href='youtube.com'
              ></a>
            </li>
            <li className='sub-links'>
              <a
                className='sub-link link-linkedin'
                target='_blank'
                href='linkedin.com'
              ></a>
            </li>
            <li className='sub-links'>
              <a
                className='sub-link link-googleplus'
                target='_blank'
                href='plus.google.com'
              ></a>
            </li>
            <li className='sub-links'>
              <a
                className='sub-link link-facebook'
                target='_blank'
                href='facebook.com'
              ></a>
            </li>
            <li className='sub-links'>
              <a
                className='sub-link link-twitter'
                target='_blank'
                href='twitter.com'
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-line'>
        <div className='footer-logo'>
          <h3 className='footer-logo-text'>Лого</h3>
          <button className='scroll' onClick={scroll}></button>
          <p className='footer-date-text'>2018 web</p>
        </div>
      </div>
    </footer>
  );
};
