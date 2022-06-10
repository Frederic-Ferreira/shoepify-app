import React, { useState } from 'react';
export function Overlay({
  shoe,
  addQuantity,
  removeQuantity,
  handlePreviousSlide,
  curSlide,
  handleNextSlide,
}) {
  const [shoeQuantity, setShoeQuantity] = useState(shoe.quantity);

  const handleClickAddQuantity = (e) => {
    let quantity = shoeQuantity;
    quantity++;
    setShoeQuantity(quantity);
    addQuantity(e);
  };

  const handleClickRemoveQuantity = (e) => {
    let quantity = shoeQuantity;
    quantity--;
    setShoeQuantity(quantity);
    removeQuantity(e);
  };

  return (
    <div id="overlay">
      <div id="chosen-shoe">
        <div className="image-display">
          <i
            onClick={handlePreviousSlide}
            className="bi arrow left bi-arrow-left-circle-fill"
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
            className="bi arrow right bi-arrow-right-circle-fill"
          ></i>
        </div>
        <div className="infos-display">
          <h1>{shoe.brand}</h1>
          <h2>{shoe.name}</h2>
          <h3>{shoe.price + ' €'}</h3>
          <div id="add-to-cart">
            <p>quantity</p>
            <div className="row-wrapper">
              <i
                onClick={handleClickRemoveQuantity}
                className="bi minus bi-dash-circle-fill"
                data-shoe={shoe.name}
              ></i>
              <p>{shoeQuantity}</p>
              <i
                onClick={handleClickAddQuantity}
                className="bi plus bi-plus-circle-fill"
                data-shoe={shoe.name}
              ></i>
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
