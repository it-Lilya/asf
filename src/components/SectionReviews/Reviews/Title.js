import React from 'react';

export function Title({ name, text }) {
  return (
        <div className='translator-card'>
            <h3 className='translator-name'>{name}</h3>
            <p className='translator-text'>{text}</p>
        </div>
  );
}
