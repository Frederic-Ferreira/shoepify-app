import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import { CartDropdown } from './components/CartDropdown';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import { ShoeList } from './ShoesState';

function App() {
  const [shoeList, setShoeList] = useState(ShoeList);
  const [shoeListCart, setShoeListCart] = useState(shoeList);
  const [showCart, setShowCart] = useState('0');
  const [slide, setSlide] = useState('');

  let location = useLocation();
  let total = 0;

  useEffect(() => {
    const name = location.pathname.replace('/', '');

    document.querySelectorAll('.nav').forEach((nav) => {
      nav.classList.remove('active');
    });

    if (name !== 'checkout') {
      name === 'shop'
        ? document.querySelector('.shop').classList.add('active')
        : document.querySelector('.home').classList.add('active');
    }
  }, [location]);

  useEffect(() => {
    const filteredList = shoeList.filter(
      (shoe) => shoe.quantity >= 1
    );

    setShoeListCart(filteredList);
  }, [shoeList]);

  const toggleShowCart = () => {
    showCart === '0' ? setShowCart('1') : setShowCart('0');
    if (slide === '') setSlide('0.7s ease slide-in');
    else {
      slide === '0.7s ease slide-in'
        ? setSlide('0.7s ease slide-out')
        : setSlide('0.7s ease slide-in');
    }
  };

  return (
    <div id="App">
      <Header event={toggleShowCart} shoes={shoeListCart} />
      <CartDropdown
        opacity={showCart}
        animation={slide}
        event={toggleShowCart}
        shoes={shoeListCart}
        total={total}
      />
      <div style={{ opacity: showCart }} id="arrow"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop setShoeList={setShoeList} shoeList={shoeList} />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
