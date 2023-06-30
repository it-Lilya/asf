import React from 'react';

export function Images({ src, alt }) {
  return (
        <img className='img' src={src} alt={alt} width='200' />
  );
}
