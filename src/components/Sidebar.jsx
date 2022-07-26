import React from 'react';
import { useEffect } from 'react';

export function Sidebar({
  sexeChange,
  brandChange,
  price,
  handleChange,
}) {
  let hidden = true;

  const handleFilter = () => {
    if (hidden === true) {
      document.getElementById('sidebar').style.transform =
        'translateX(0%)';
    } else {
      document.getElementById('sidebar').style.transform =
        'translateX(-90%)';
    }
    hidden = !hidden;
  };

  useEffect(() => {
    const sidebar = document.getElementById('sidebar');

    window.addEventListener('resize', () => {
      if (window.innerWidth > 790) {
        sidebar.style.transform = 'translateX(0%)';
        hidden = false;
      } else if (window.innerWidth < 790) {
        sidebar.style.transform = 'translateX(-90%)';
        hidden = true;
      }
    });
  }, [window.innerWidth]);

  return (
    <div id="sidebar">
      <div id="sexe-input">
        <h1>For</h1>
        <div className="row-wrapper">
          <label htmlFor="men">Men</label>
          <input onClick={sexeChange} type="checkbox" id="men" />
        </div>
        <div className="row-wrapper">
          <label htmlFor="women">Women</label>
          <input onClick={sexeChange} type="checkbox" id="women" />
        </div>
      </div>
      <div id="brand-input">
        <h1>Brand</h1>
        <div className="row-wrapper">
          <label htmlFor="all">All</label>
          <input
            onClick={brandChange}
            type="checkbox"
            id="all"
            defaultChecked="checked"
          />
        </div>
        <div className="row-wrapper">
          <label htmlFor="adidas">Adidas</label>
          <input onClick={brandChange} type="checkbox" id="adidas" />
        </div>
        <div className="row-wrapper">
          <label htmlFor="nike">Nike</label>
          <input onClick={brandChange} type="checkbox" id="nike" />
        </div>
        <div className="row-wrapper">
          <label htmlFor="puma">Puma</label>
          <input onClick={brandChange} type="checkbox" id="puma" />
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
            defaultValue="135"
            onChange={handleChange}
            id="price"
          />
        </div>
      </div>
      <div onClick={handleFilter} id="filters">
        <p>
          <span>f</span>
          <span>i</span>
          <span>l</span>
          <span>t</span>
          <span>e</span>
          <span>r</span>
          <span>s</span>
          <span>&nbsp;</span>
          <i class="bi bi-filter-circle"></i>
        </p>
      </div>
    </div>
  );
}
