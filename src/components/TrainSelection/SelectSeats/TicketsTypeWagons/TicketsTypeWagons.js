import React from 'react';
import './TicketsTypeWagons.css';
import { TypeWagonsContainer } from '../TypeWagonsContainer/TypeWagonsContainer';

export function TicketsTypeWagons() {
  function focus(e) {
    e.target.parentElement.classList.toggle('focus-icons');
    if (e.target.classList.contains('conditioner')) {
      e.target.classList.toggle('conditioner-focus');
    }
    if (e.target.classList.contains('option-wifi')) {
      e.target.classList.toggle('option-wifi-focus');
    }
    if (e.target.classList.contains('underwear')) {
      e.target.classList.toggle('underwear-focus');
    }
    if (e.target.classList.contains('food')) {
      e.target.classList.toggle('food-focus');
    }
  }
  function tool(e) {
    document.querySelectorAll('.wagon-information-icons-container p').forEach((element) => {
      element.classList.remove('tooltip');
      element.innerHTML = '';
    });
    if (e.target.classList.contains('wagon-icons-button') || e.target.classList.contains('wagon-icons-element')) {
      if (e.target.classList.contains('wagon-icons-button')) {
        e.target.querySelector('p').classList.add('tooltip');
        e.target.querySelector('p').textContent = e.target.name;
      }
      if (e.target.classList.contains('wagon-icons-element')) {
        e.target.nextElementSibling.classList.add('tooltip');
        e.target.nextElementSibling.textContent = e.target.parentElement.name;
      }
    }
  }
  return (
    <div className='tickets-type-wagons'>
      <TypeWagonsContainer />
      <div className='tickets-wagon-information'>
        <p>Вагоны0709</p>
        <p>Нумерация вагонов начинается с головы поезда</p>
      </div>
      <div className='tickets-wagon-column'>
        <div className='wagon-number-information'>
          <p className='wagon-number-information-first'>07</p>
          <p className='wagon-number-information-second'>вагон</p>
        </div>
        <div className='wagon-information-header'>
          <div className='wagon-information-titles'>
            <p>Места</p>
            <p>Стоимость</p>
            <p>Обслуживание ФПК</p>
          </div>
          <div className='wagon-information-main'>
            <div className='wagon-information-left'>
              <div className='wagon-information-flex'>
                <p>Верхние 3</p>
                <p>2920 ₽</p>
              </div>
              <div className='wagon-information-flex'>
                <p>Нижние 8</p>
                <p>3530 ₽</p>
              </div>
            </div>
            <div className='wagon-information-right'>
              <div className='wagon-information-icons-container'>
                <button className='wagon-icons-button' name="кондиционер" type='button' onMouseOver={tool}>
                  <i className='conditioner wagon-icons-element' onClick={focus}></i>
                  <p></p>
                </button>
                <button className='wagon-icons-button' name="WI-FI" type='button' onMouseOver={tool}>
                  <i className='option-wifi wagon-icons-element' onClick={focus}></i>
                  <p></p>
                </button>
                <button className='wagon-icons-button' name="белье" type='button' onMouseOver={tool}>
                  <i className='underwear wagon-icons-element' onClick={focus}></i>
                  <p></p>
                </button>
                <button className='wagon-icons-button' name="питание" type='button' onMouseOver={tool}>
                  <i className='food wagon-icons-element' onClick={focus}></i>
                  <p></p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='wagon-scheme-container'>
        <p className='window-wagon-scheme'>11 человек выбирают места в этом поезде</p>
        <div className='wagon-scheme-main'></div>
      </div>
    </div>
  );
}
