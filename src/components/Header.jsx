import { CartDropdown } from './CartDropdown';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoe from '../images/icon/icon.png';
import Cart from './Cart';

function Header(props) {
  const [showCart, setShowCart] = useState(false);

  const { shoes } = props;

  let total = 0;

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    const name = location.pathname.replace('/', '');

    document.querySelectorAll('.nav').forEach((nav) => {
      nav.classList.remove('active');
    });

    if (name !== 'cart') {
      name === 'shop'
        ? document.querySelector('.shop').classList.add('active')
        : document.querySelector('.home').classList.add('active');
    }
  });

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
