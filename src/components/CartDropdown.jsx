import React from 'react';
import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

export function CartDropdown({
  shoes,
  total,
  event,
  animation,
  opacity,
}) {
  return (
    <div
      style={{ animation: animation, opacity: opacity }}
      id="cart__dropdown"
    >
      <ul>
        {shoes.map((shoe) => {
          total += shoe.price * shoe.quantity;
          return (
            <li key={uniqid()}>
              <img src={shoe.images.ppl} />
              <div className="column-wrapper">
                <p>{shoe.name}</p>
                <h3>{shoe.price * shoe.quantity + ' €'}</h3>
              </div>
              <div className="column-wrapper">
                <i className="bi plus bi-plus-circle-fill"></i>
                <p>{shoe.quantity}</p>
                <i className="bi minus bi-dash-circle-fill"></i>
              </div>
            </li>
          );
        })}
      </ul>
      <div id="cart__dropdown-btns">
        <p>
          Total: <span id="total">{total + ' €'}</span>
        </p>
        <div className="row-wrapper">
          <Link onClick={event} to="/checkout">
            <button id="checkout" type="button">
              Checkout
            </button>
          </Link>
          <button onClick={event} id="close" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
