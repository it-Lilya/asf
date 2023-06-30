import React from 'react';

export function SelectMain() {
  // useEffect(() => {
  //   const newCard = document.querySelector('.new-card-info');
  //   newCard.style.width = '120%';
  //   document.querySelectorAll('.select-top-panel');
  // });
  return (
        <div className='select-seats-contain'>
        <div className='select-top-panel'>
          <div className='select-top-icon'></div>
            <button className='select-top-btn'>Выбрать другой поезд</button>
          </div>
        <div className='select-seats-information'>
          <div className='seat-first-container'>
            <div className='select-seats-border'>
             <i className='seats-border-vector'></i>
            </div>
            <div className='seats-flex-container'>
              <div className='first-seats-flex'>
                <p className='seats-train-name'>116c</p>
                <div className='seats-line-city-container'>
                  <p className='seats-line-city'>Адлер</p>
                  <span className='seats-arrow-train'></span>
                </div>
                <div className='seats-line-city-container'>
                  <p className='seats-line-city'>Адлер</p>
                  <span className='seats-arrow-train'></span>
                </div>
                <div className='seats-line-city-container'>
                  <p className='seats-line-city'>Адлер</p>
                  <span className='seats-arrow-train'></span>
                </div>
              </div>
              </div>
          </div>
          <div className='seat-second-container'>
          </div>
          <div className='seat-third-container'>
            <div className='select-seats-border'>
              <i className='seats-third-vector'></i>
              <div className='seats-third-vector-time'>
                  <p>9 часов</p>
                  <p>42 минуты</p>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
}
