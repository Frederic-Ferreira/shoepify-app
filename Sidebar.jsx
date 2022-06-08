import React from 'react';

export function Sidebar({ price, handleChange }) {
  return (
    <div id="sidebar">
      <div id="sexe-input">
        <h1>For</h1>
        <div className="row-wrapper">
          <label htmlFor="men">Men</label>
          <input type="checkbox" id="men" defaultChecked="checked" />
        </div>
        <div className="row-wrapper">
          <label htmlFor="men">Women</label>
          <input type="checkbox" id="women" />
        </div>
      </div>
      <div id="brand-input">
        <h1>Brand</h1>
        <div className="row-wrapper">
          <label htmlFor="all">All</label>
          <input type="checkbox" id="all" defaultChecked="checked" />
        </div>
        <div className="row-wrapper">
          <label htmlFor="adidas">Adidas</label>
          <input type="checkbox" id="adidas" />
        </div>
        <div className="row-wrapper">
          <label htmlFor="nike">Nike</label>
          <input type="checkbox" id="nike" />
        </div>
        <div className="row-wrapper">
          <label htmlFor="puma">Puma</label>
          <input type="checkbox" id="puma" />
        </div>
      </div>
      <div id="price-input">
        <h1>Price</h1>
        <div className="column-wrapper">
          <p>{price + ' €'}</p>
          <input
            type="range"
            min="90"
            max="180"
            defaultValue="100"
            onChange={handleChange}
            id="price"
          />
        </div>
      </div>
    </div>
  );
}
