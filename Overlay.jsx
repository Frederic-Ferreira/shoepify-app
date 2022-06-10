import React from 'react';
export function Overlay({
  shoe,
  handlePreviousSlide,
  curSlide,
  handleNextSlide,
}) {
  return (
    <div id="overlay">
      <div id="chosen-shoe">
        <div className="image-display">
          <i
            onClick={handlePreviousSlide}
            class="bi arrow left bi-arrow-left-circle-fill"
          ></i>
          <img
            style={{
              transform: `translateX(${100 * (0 - curSlide)}%)`,
            }}
            id="img-ppl"
            src={shoe.images.ppl}
            alt=""
          />
          <img
            style={{
              transform: `translateX(${100 * (1 - curSlide)}%)`,
            }}
            id="img-scd"
            src={shoe.images.scd}
            alt=""
          />
          <img
            style={{
              transform: `translateX(${100 * (2 - curSlide)}%)`,
            }}
            id="img-thrd"
            src={shoe.images.thrd}
            alt=""
          />
          <i
            onClick={handleNextSlide}
            class="bi arrow right bi-arrow-right-circle-fill"
          ></i>
        </div>
        <div className="infos-display">
          <h1>{shoe.brand}</h1>
          <h2>{shoe.name}</h2>
          <h3>{shoe.price + ' €'}</h3>
          <div id="add-to-cart">
            <p>quantity</p>
            <div className="row-wrapper">
              <i className="bi minus bi-dash-circle-fill"></i>
              <p>{shoe.quantity}</p>
              <i className="bi plus bi-plus-circle-fill"></i>
            </div>
            <button id="add-to-cart" type="button">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
