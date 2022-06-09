import { Sidebar } from './../../Sidebar';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function Shop({ shoelist }) {
  const [sexe, setSexe] = useState('men');
  const [brand, setBrand] = useState('all');
  const [price, setPrice] = useState(100);

  const [image, setImage] = useState('ppl');

  const [pagesNumber, setPagesNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(2);

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

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setPagesNumber(Math.ceil(shoelist.length / 6));
  }, [shoelist]);

  return (
    <div id="shop">
      <Sidebar price={price} handleChange={handleChange} />
      <div id="list-items">
        <ul>
          {shoelist.map((shoe, i) => {
            if (i >= currentPage * 6 - 6 && i < currentPage * 6) {
              return (
                <li key={uniqid()} className="card">
                  <img
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    src={shoe.images.ppl}
                    alt="shoe image"
                    data-name={shoe.name}
                  />
                  <div className="row-wrapper">
                    <p>{shoe.name}</p>
                    <h3>{shoe.price * shoe.quantity + ' €'}</h3>
                  </div>
                </li>
              );
            }
          })}
        </ul>
        <div id="buttons">
          {pagesNumber > 1 && (
            <>
              <div onClick={handlePreviousPage} id="previous-page">
                {currentPage !== 1 && (
                  <div className="row-wrapper">
                    <p>{currentPage - 1}</p>
                    <i className="bi bi-arrow-left"></i>
                  </div>
                )}
              </div>
              <h3>pages</h3>
              <div onClick={handleNextPage} id="next-page">
                {currentPage !== pagesNumber && (
                  <div className="row-wrapper">
                    <i className="bi bi-arrow-right"></i>
                    <p>{currentPage + 1}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
