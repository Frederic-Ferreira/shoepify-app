import { Link } from 'react-router-dom';
import shoe from '../images/icon/icon.png';
import Cart from './Cart';

function Header(props) {
  const { shoes, event } = props;

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
            <Cart event={event} shoeList={shoes} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
