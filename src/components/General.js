import React, { useEffect } from 'react';
import { Header } from './Header/Header';
import { FirstSection } from './FirstSection/FirstSection';
import { SecondSection } from './SecondSection/SecondSection';
import { SectionReviews } from './SectionReviews/SectionReviews';
import { Footer } from './Footer/Footer';
import './General.css';

export const General = () => {
  useEffect(() => {
    const btn = document.getElementById('btn-search');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const inputs = e.target.parentElement.querySelectorAll('.form-input');
      if (inputs[0].classList.contains('first')) {
        localStorage.setItem('first-city', inputs[0].value);
        localStorage.setItem('first-city-id', inputs[0].id);
      }
      if (inputs[1].classList.contains('second')) {
        localStorage.setItem('second-city', inputs[1].value);
        localStorage.setItem('second-city-id', inputs[1].id);
      }
      const inputsDate = document.querySelectorAll('.date-inputs input');
      if (inputsDate[0].classList.contains('first')) {
        localStorage.setItem('first-date', inputsDate[0].value);
      }
      if (inputsDate[1].classList.contains('second')) {
        localStorage.setItem('second-date', inputsDate[1].value);
      }
      if (inputs[0].value === '' || inputs[1].value === '') {
        document.querySelector('.App').classList.add('app-hide');
        document.querySelector('.error-window').classList.add('window-active');
      }
      if (inputs[0].value !== '' || inputs[1].value !== '') {
        fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${inputs[0].id}&to_city_id=${inputs[1].id}`)
          .then((response) => response.json())
          .then((data) => localStorage.setItem('direction-there', JSON.stringify(data.items)));
        fetch(`https://students.netoservices.ru/fe-diplom/routes?from_city_id=${inputs[1].id}&to_city_id=${inputs[0].id}`)
          .then((response) => response.json())
          .then((data) => localStorage.setItem('direction-back', JSON.stringify(data.items)));
        setTimeout(() => window.location.assign('http://localhost:3000/train-selection/'), 1000);
      }
    });
  }, []);
  function hidenWindow(e) {
    e.preventDefault();
    document.querySelector('.App').classList.remove('app-hide');
    document.querySelector('.error-window').classList.remove('window-active');
    const inputs = document.querySelector('.bottom-form').querySelectorAll('input');
    inputs.forEach((inp) => {
      inp.value = '';
      inp.textContent = '';
    });
  }
  return (
    <>
      <Header />
      <FirstSection />
      <SecondSection />
      <SectionReviews />
      <Footer />
      <div className='error-window'>
        <div className='window-header'>
          <div className='window-sign'></div>
        </div>
        <div className='window-text'>
          <p className='window-text-first'>Таким образом консультация с широким активом в значительной степени обуславливает создание модели развития.</p>
          <p className='window-text-second'>Повседневная практика показывает, что сложившаяся структура организации играет важную роль в формировании существенных финансовых и административных</p>
        </div>
        <div className='window-button-container'>
          <button className='window-button' type='button' onClick={hidenWindow}>Понятно</button>
        </div>
      </div>
    </>
  );
};
