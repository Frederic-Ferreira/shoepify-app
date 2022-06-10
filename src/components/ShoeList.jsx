import React from 'react';

export function ShoeList({ shoe, event, handleHover, handleLeave }) {
  return (
    <li onClick={event} className="card" data-name={shoe.name}>
      <img
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        src={shoe.images.ppl}
        alt="shoe image"
        data-name={shoe.name}
      />
      <div className="row-wrapper">
        <p>{shoe.name}</p>
        <h3>{shoe.price + ' €'}</h3>
      </div>
    </li>
  );
}
