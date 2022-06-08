import { CartDropdown } from './CartDropdown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import shoe from '../images/icon/icon.png';
import Cart from './Cart';

function Header(props) {
  const [showCart, setShowCart] = useState('0');
  const [slide, setSlide] = useState('0.7s ease slide-out');

  const { shoes } = props;

  let total = 0;

  const toggleShowCart = () => {
    showCart === '0' ? setShowCart('1') : setShowCart('0');
    slide === '0.7s ease slide-in'
      ? setSlide('0.7s ease slide-out')
      : setSlide('0.7s ease slide-in');
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
            <CartDropdown
              opacity={showCart}
              animation={slide}
              event={toggleShowCart}
              shoes={shoes}
              total={total}
            />
            <div style={{ opacity: showCart }} id="arrow"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
