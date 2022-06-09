import React from 'react';

export function ShoeList({ shoe, handleHover, handleLeave }) {
  return (
    <li className="card">
      <img
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        src={shoe.images.ppl}
        alt="shoe image"
        data-name={shoe.name}
      />
      <div className="row-wrapper">
        <p>{shoe.name}</p>
        <h3>{shoe.price * shoe.quantity + ' €'}</h3>
      </div>
    </li>
  );
}
