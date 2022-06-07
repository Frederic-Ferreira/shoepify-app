import { CartDropdown } from './CartDropdown';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoe from '../images/icon/icon.png';

function Header(props) {
  const [showCart, setShowCart] = useState(true);

  const { shoes } = props;

  let total = 0;

  return (
    <div id="header">
      <nav>
        <Link to="/" id="site-title">
          shoePify
          <img src={shoe} alt="shoe" />
        </Link>
        <div id="links">
          <Link id="home" className="active" to="/">
            Home
          </Link>
          <Link id="shop" to="/shop">
            Shop
          </Link>
          <div id="cart__nav">
            <Link to="/cart">
              <i className="bi bi-cart2"></i>
            </Link>
            {showCart && <CartDropdown shoes={shoes} total={total} />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
