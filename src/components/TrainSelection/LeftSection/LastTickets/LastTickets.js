import React, { useEffect } from 'react';
import './LastTickets.css';
// import { LastCards } from './LastCards/LastCards';

export function LastTickets() {
  useEffect(() => {
    // fetch('https://students.netoservices.ru/fe-diplom/routes/last/')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, []);
  return (
    <div className='last-container'>
        <h2 className='last-title'>Последние билеты</h2>
        {/* <LastCards />
        <LastCards />
        <LastCards /> */}
    </div>
  );
}
