import { CartDropdown } from './CartDropdown';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import shoe from '../images/icon/icon.png';
import Cart from './Cart';

function Header(props) {
  const [showCart, setShowCart] = useState(false);

  const { shoes } = props;

  let total = 0;

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div id="header">
      <nav>
        <Link to="/" id="site-title">
          shoePify
          <img src={shoe} alt="shoe" />
        </Link>
        <div id="links">
          <Link className="nav home" to="/">
            Home
          </Link>
          <Link className="nav shop" to="/shop">
            Shop
          </Link>
          <div id="cart__nav">
            <Cart event={toggleShowCart} shoeList={shoes} />
            {showCart && (
              <CartDropdown
                event={toggleShowCart}
                shoes={shoes}
                total={total}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
