import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import Checkout from './components/Checkout';
import { ShoeList } from './ShoeList';

function App() {
  const [shoeList, setShoeList] = useState(ShoeList);

  let location = useLocation();

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

  return (
    <div className="App">
      <Header shoes={shoeList} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
