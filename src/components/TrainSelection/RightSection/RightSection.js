import React, { useState, useEffect } from 'react';
import './RightSections.css';
// import format from 'date-fns/format';
import { CardsSorting } from './CardsSorting/CardsSorting';

export function RightSection() {
  const resultNumber = 20;
  const sortList = ['времени', 'стоимости', 'длительности'];
  const [sortType, setType] = useState(sortList[0]);
  const dataThere = JSON.parse(localStorage.getItem('direction-there'));
  // const dataBack = JSON.parse(localStorage.getItem('direction-back'));
  // const [ticket, setTicket] = useState();
  const [arr, setArr] = useState([]);
  // const [t, sT] = useState();
  // const r = [];
  // function converterDate(e) {
  //   const date = new Date(e);
  //   const formatDate = format(date, 'HH:mm');
  //   if (formatDate[0] === '0') {
  //     return formatDate.slice(1);
  //   }
  //   return formatDate;
  // }
  useEffect(() => {
    // setArr([there = { dataThere }, back = { dataBack }]);
    // // arr.forEach((w) => {
    // //   console.log(w.dataThere);
    // // });
    setArr(dataThere);
    // arr.map((S) => console.log(S));
  }, [dataThere]);
  // useEffect(() => {
  //   // setArr(dataThere);
  //   // let f;
  //   // dataThere.forEach((there) => {
  //     // dataBack.forEach((back) => {
  //     //   if (there.departure.to.railway_station_name === back.departure.from.railway_station_name) {
  //     //     // if (there.departure.to.datetime >= back.departure.from.datetime) {
  //     //     //   // const newO = { there, back };
  //     //     //   // r.push(newO);
  //     //     //   // // console.log(r);
  //     //     //   // r.sort((a, b) => console.log(a, b));
  //     //     //   sT({ there, back });
  //     //     // }
  //     //   }
  //     // });
  //     // f = dataBack.filter((i) => i.departure.from.railway_station_name === there.departure.to.railway_station_name);
  //     // const newO = { there, f };
  //     // console.log(newO);
  //     // sT([f]);
  //     // console.log('there', there.departure.to.railway_station_name);
  //   });
  //   // console.log(f);
  //   // dataBack.forEach((r) => console.log('back', r.departure.from.railway_station_name));
  // }, []);
  // function sortingPrices(array) {
  //   return [...array].sort((a, b) => a.min_price - b.min_price);
  // }
  // function sortingTime(array) {
  //   return [...array].sort((a, b) => a.departure.from.datetime - b.departure.from.datetime);
  // }
  // function sortingDuration(array) {
  //   return [...array].sort((a, b) => a.departure.duration - b.departure.duration);
  // }
  function sort() {
    setType();
    document.querySelector('.btn-sort-container').classList.add('btn-container-active');
  }
  function sortSelection(e) {
    setType(e.target.textContent);
    document.querySelector('.btn-sort-container').className = 'btn-sort-container';
    // if (e.target.textContent === 'длительности') {
    //   sortingDuration();
    // }
    // if (e.target.textContent === 'временм') {
    //   sortingTime();
    // }
    // if (e.target.textContent === 'стоимости') {
    //   sortingPrices();
    // }
  }
  function active(e) {
    const buttons = document.querySelectorAll('.sort-number');
    buttons.forEach((btn) => btn.classList.remove('sort-number-active'));
    e.target.classList.add('sort-number-active');
  }
  return (
    <section className='right-section'>
        <div className='sort-result-container'>
          <p>найдено <span>{resultNumber}</span></p>
          <div className='sort-selection'>сортировать по:
            <p className='result-sort' onClick={sort}>{sortType}</p>
            <div className='btn-sort-container'>
                {sortList.map((elem, i) => (
                    <li className='btn-sort' key={i} onClick={sortSelection}>{elem}</li>
                ))}
            </div>
          </div>
          <p className='sort-number-container'>показывать по:
            <button className='sort-number sort-number-active' type="button" onClick={active}>5</button>
            <button className='sort-number' type="button" onClick={active}>10</button>
            <button className='sort-number' type="button" onClick={active}>20</button>
          </p>
        </div>
        <div className='ticket-list'>
          {arr.map((there) => (
            <CardsSorting element={there} />
          ))}
          <div className='panel-ticket-page'>
            <button className='panel-btn'><i className='panel-left'></i></button>
            <button className='panel-btn panel-btn-active'>1</button>
            <button className='panel-btn'>2</button>
            <button className='panel-btn'>3</button>
            <button className='panel-btn'><i className='panel-right'></i></button>
          </div>
        </div>
    </section>
  );
}
