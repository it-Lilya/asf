import React, { useState, useEffect } from 'react';
import './SectionReviews.css';
import { reviews } from '../reviews';

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export const SectionReviews = () => {
  const arr = [...reviews];
  const newArray = sliceIntoChunks(arr, 2);
  const [activeArr, setActive] = useState(newArray[0]);
  useEffect(() => {
    document.querySelector('.dots').classList.add('dots-active');
  }, []);
  function count(e) {
    const dots = document.querySelectorAll('.dots');
    dots.forEach((ev) => {
      ev.classList.remove('dots-active');
    });
    e.target.classList.add('dots-active');
    const search = e.target.id;
    const res = newArray.filter((el) => String(el[0].id) === search);
    setActive(...res);
  }

  return (
    <section className='translators' id='third-block'>
      <h4 className='translator-title'>Отзывы</h4>
      <div className='translators-container'>
        {activeArr.map((el) => (
          <div className='review' key={el.id}>
            <img className='review-image' src={el.image} alt={el.name} />
            <div className='review-content'>
              <h5 className='review-name'>{el.name}</h5>
              <p className='review-text'>
                <span className='quotes quotes-first'> &ldquo;</span>
                {el.content}
                <span className='quotes qoutes-second'>&bdquo;</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='carousel-dots'>
      <ul className='dots-container'>
        {newArray.map((e) => (
          <li className='dots' onClick={count} id={e[0].id} key={e[0].id}>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};
