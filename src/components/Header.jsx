import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [cart, setCart] = useState(true);

  const { shoes } = props;

  let total = 0;

  return (
    <div id="header">
      <nav>
        <Link to="/" id="site-title">
          shoePify
        </Link>
        <ul>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="bi bi-cart2"></i>
            </Link>
            {cart && (
              <div id="cart__dropdown">
                <ul>
                  {shoes.map((shoe) => {
                    total += shoe.price * shoe.quantity;
                    return (
                      <li>
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
                    <button id="checkout" type="button">
                      Checkout
                    </button>
                    <button id="close" type="button">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
