import React from 'react';
import './NumberOfTickets.css';

export function NumberOfTickets() {
  return (
        <div className='number-of-tickets'>
            <h4>Количество билетов</h4>
            <div className='tickets-container-number'>
                <div className='tickets-first-number tickets-number tickets-number-active'>
                    <input type="text" value='Взрослых - 2'></input>
                    <p>Можно добавить еще 3 пассажиров </p>
                </div>
                <div className='tickets-second-number tickets-number'>
                    <input type="text" value='Детских - 1'></input>
                    <p>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</p>
                </div>
                <div className='tickets-third-number tickets-number'>
                    <input type="text" value='Детских без места - 0'></input>
                </div>
            </div>
          </div>
  );
}
