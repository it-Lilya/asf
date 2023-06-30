import React, { useEffect } from 'react';
import './SelectSeats.css';
import { TicketsTypeWagons } from './TicketsTypeWagons/TicketsTypeWagons';
import { NumberOfTickets } from './NumberOfTickets/NumberOfTickets';
import { SelectMain } from './SelectMain/SelectMain';
import { TypeWagonsContainer } from './TypeWagonsContainer/TypeWagonsContainer';

export function SelectSeats() {
  useEffect(() => {
    const contains = document.querySelectorAll('.select-seats-contain');
    contains[1].style.background = 'white';
    contains[1].style.marginTop = '25px';
    contains[1].style.boxShadow = 'none';
    const panels = document.querySelectorAll('.select-top-panel');
    panels[1].style.marginLeft = '62%';
  });
  return (
    <section className='select-seats-container'>
      <h3>Выбор мест</h3>
      <div className='select-main'>
        <SelectMain />
        <NumberOfTickets />
        <TicketsTypeWagons />
      </div>
      <div className='select-bottom'>
        <SelectMain />
        <TypeWagonsContainer />
      </div>
      <button className='button-next-btns' type='button'>Далее</button>
    </section>
  );
}
