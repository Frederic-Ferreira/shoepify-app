import { Sidebar } from './../../Sidebar';
import { useEffect, useState } from 'react';

function Shop({ shoelist }) {
  const [sexe, setSexe] = useState('men');
  const [brand, setBrand] = useState('all');
  const [price, setPrice] = useState(100);

  const [image, setImage] = useState('ppl');

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleHover = (e) => {
    const name = e.target.dataset.name;
    const [shoe] = shoelist.filter((shoe) => shoe.name === name);
    e.target.src = shoe.images.thrd;
  };

  const handleLeave = (e) => {
    const name = e.target.dataset.name;
    const [shoe] = shoelist.filter((shoe) => shoe.name === name);
    e.target.src = shoe.images.ppl;
  };

  return (
    <div id="shop">
      <Sidebar price={price} handleChange={handleChange} />
      <div id="list-items">
        <ul>
          {shoelist.map((shoe, i) => {
            if (shoelist.length > 6) {
              if (i < 6) {
                return (
                  <li className="card">
                    <img
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                      src={shoe.images.ppl}
                      alt="shoe image"
                      data-name={shoe.name}
                    />
                    <p>{shoe.name}</p>
                    <h3>{shoe.price * shoe.quantity + ' €'}</h3>
                  </li>
                );
              }
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default Shop;
