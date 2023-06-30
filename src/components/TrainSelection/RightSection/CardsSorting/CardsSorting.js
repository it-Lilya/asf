import React, { useState, useEffect } from 'react';
import './CardsSorting.css';
import format from 'date-fns/format';
import { NewElementCard } from './NewElementCard/NewElementCard';

export function CardsSorting({ element }) {
  const [sedentary, setSendentary] = useState('');
  const [sedentaryPlaces, setSendentaryPlaces] = useState();
  const [sedentaryId, setSedentaryId] = useState();
  const [sedentaryPrice, setSedentaryPrice] = useState();
  const [seat, setSeat] = useState('');
  const [seatPlaces, setSeatPlaces] = useState();
  const [seatPrice, setSeatPrice] = useState();
  const [seatSeatUpper, setSeatUpper] = useState();
  const [seatSeatLower, setSeatLower] = useState();
  const [coupe, setCoupe] = useState('');
  const [coupePlaces, setCoupePlaces] = useState();
  const [coupePrice, setCoupePrice] = useState();
  const [coupeSeatsUpper, setCoupeUpper] = useState();
  const [coupeSeatsLower, setCoupeLower] = useState();
  const [lux, setLux] = useState('');
  const [luxPlaces, setLuxPlaces] = useState();
  const [luxPrice, setLuxPrice] = useState();
  const dataBack = JSON.parse(localStorage.getItem('direction-back'));
  function converterDate(e) {
    const date = new Date(e);
    const formatDate = format(date, 'HH:mm');
    if (formatDate[0] === '0') {
      return formatDate.slice(1);
    }
    return formatDate;
  }
  useEffect(() => {
    const r = dataBack.find((s) => s.departure.from.railway_station_name === element.departure.to.railway_station_name);
    if (r === undefined) {
      const parent = document.getElementById(`${element.departure._id}`).querySelector('.new-card-container');
      const child = parent.querySelector('.new-card-info-second');
      parent.removeChild(child);
    }
  }, [dataBack]);
  useEffect(() => {
    if (element.departure.have_fourth_class === true) {
      setSendentary('Сидячий');
      setSendentaryPlaces(element.departure.available_seats_info.fourth);
      setSedentaryId(element.departure._id);
      setSedentaryPrice(element.departure.price_info.fourth.bottom_price);
    } else {
      setSendentary();
      const parent = document.getElementById(`${element.departure._id}`);
      parent.querySelector('.sedentary-type').style.display = 'none';
    }
    if (element.departure.have_third_class === true) {
      setSeat('Плацкарт');
      setSeatPlaces(element.departure.available_seats_info.third);
      setSeatPrice(element.departure.price_info.third.bottom_price);
      setSeatUpper(element.departure.price_info.third.bottom_price);
      setSeatLower(element.departure.price_info.third.top_price);
    } else {
      setSeat();
      const parent = document.getElementById(`${element.departure._id}`);
      parent.querySelector('.seat-type').style.display = 'none';
    }
    if (element.departure.have_second_class === true) {
      setCoupe('Купе');
      setCoupePlaces(element.available_seats);
      setCoupePrice(element.departure.price_info.second.bottom_price);
      setCoupeUpper(element.departure.price_info.second.bottom_price);
      setCoupeLower(element.departure.price_info.second.top_price);
    } else {
      setCoupe();
      const parent = document.getElementById(`${element.departure._id}`);
      parent.querySelector('.coupe-type').style.display = 'none';
    }
    if (element.departure.have_first_class === true) {
      setLux('Люкс');
      setLuxPlaces(element.available_seats);
      setLuxPrice(element.departure.price_info.first.bottom_price);
    } else {
      setLux();
      const parent = document.getElementById(`${element.departure._id}`);
      parent.querySelector('.lux-type').style.display = 'none';
    }
  }, []);
  return (
    <div className='cards-sorting-container' id={element.departure._id}>
      <div className='directions_city-information'>
        <div className='directions_city-border'>
          <i className='border-vector'></i>
        </div>
        <p className='train-name'>{element.departure.train.name}</p>
        <div className='train-destinations'>
          <div className='direction-line'>
            <div className='direction-line-container'>
              <p className='direction-line-city'>{element.departure.from.city.name}</p>
              <span className='arrow-train'></span>
            </div>
            <p className='direction-line-city'>{element.departure.to.city.name}</p>
          </div>
        </div>
      </div>
      <div className='main-direction-information'>
      <div className='card-ticket-container'>
      <div className='first-card-ticket'>
      <div className='new-card-container'>
      <div className='new-card-info'>
        <div className='new-card-first'>
          <p className='new-card-date'>{converterDate(element.departure.from.datetime)}</p>
          <p className='new-card-city'>{element.departure.from.city.name}</p>
          <p className='new-card-station'>{element.departure.from.railway_station_name}</p>
        </div>
        <div className='new-card-second'>
          <p className='available-time'>{converterDate(element.departure.duration)}</p>
          <i className='new-card-arrow-right'></i>
        </div>
        <div className='new-card-third'>
          <p className='new-card-date'>{converterDate(element.departure.to.datetime)}</p>
          <p className='new-card-city'>{element.departure.to.city.name}</p>
          <p className='new-card-station'>{element.departure.to.railway_station_name}</p>
        </div>
      </div>
      {/*  */}
       <div className='new-card-info-second'>
        <div className='new-card-first'>
          <p className='new-card-date'>{converterDate(element.departure.from.datetime)}</p>
          <p className='new-card-city'>{element.departure.from.city.name}</p>
          <p className='new-card-station'>{element.departure.to.railway_station_name}</p>
        </div>
        <div className='new-card-second'>
          <p className='available-time'>{converterDate(element.departure.duration)}</p>
          <i className='new-card-arrow-left'></i>
        </div>
        <div className='new-card-third'>
          <p className='new-card-date'>{converterDate(element.departure.to.datetime)}</p>
          <p className='new-card-city'>{element.departure.to.city.name}</p>
          <p className='new-card-station'>{element.departure.from.railway_station_name}</p>
        </div>
      </div>
    </div>
      </div>
      <div className='second-card-ticket'>
      <div className='type-container'>
        <div className='first-types-wagon sedentary-type'>
           <NewElementCard element={sedentary} places={sedentaryPlaces} id={sedentaryId} price={sedentaryPrice}></NewElementCard>
        </div>
        <div className='first-types-wagon seat-type'>
           <NewElementCard element={seat} places={seatPlaces} price={seatPrice} priceUpperSeats={seatSeatUpper} priceLowerSeats={seatSeatLower}></NewElementCard>
        </div>
        <div className='first-types-wagon coupe-type'>
           <NewElementCard element={coupe} places={coupePlaces} price={coupePrice} priceUpperSeats={coupeSeatsUpper} priceLowerSeats={coupeSeatsLower}></NewElementCard>
        </div>
        <div className='first-types-wagon lux-type'>
           <NewElementCard element={lux} places={luxPlaces} price={luxPrice}></NewElementCard>
        </div>
    </div>
    <div className='wagons-container'>
        <div className='wagons-icon'>
          <i className='wagons-icon-first'></i>
          <i className='wagons-icon-second'></i>
          <i className='wagons-icon-third'></i>
        </div>
        <button className='select-seats-btn' id='select-btn'>Выбрать места</button>
      </div>
      </div>
    </div>
      </div>
    </div>
  );
}
