import { ButtonsPages } from './ButtonsPages';
import { ShoeList } from './ShoeList';
import { Sidebar } from './Sidebar';
import { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function Shop({ shoelist }) {
  const [displayedShoes, setDisplayedShoes] = useState(shoelist);
  const [sexe, setSexe] = useState('all');
  const [brand, setBrand] = useState('all');
  const [price, setPrice] = useState(135);

  // const [image, setImage] = useState('ppl');

  const [pagesNumber, setPagesNumber] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePriceChange = (e) => {
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

  const handleBrandChange = (e) => {
    const target = e.target.id;
    const all = document.getElementById('all');
    const adidas = document.getElementById('adidas');
    const nike = document.getElementById('nike');
    const puma = document.getElementById('puma');

    if (target === 'all') {
      [adidas, nike, puma].forEach(
        (input) => (input.checked = false)
      );
      setBrand('all');
    } else {
      all.checked = false;

      if (target === 'adidas' && adidas.checked === true) {
        nike.checked === true && puma.checked === true
          ? setBrand('adidas nike puma')
          : nike.checked === true && puma.checked === false
          ? setBrand('adidas nike')
          : nike.checked === false && puma.checked === true
          ? setBrand('adidas puma')
          : setBrand('adidas');
      } else if (target === 'adidas' && adidas.checked === false) {
        nike.checked === true && puma.checked === true
          ? setBrand('nike puma')
          : nike.checked === true && puma.checked === false
          ? setBrand('nike')
          : nike.checked === false && puma.checked === true
          ? setBrand('puma')
          : setBrand('all');
      }

      if (target === 'nike' && nike.checked === true) {
        adidas.checked === true && puma.checked === true
          ? setBrand('adidas nike puma')
          : adidas.checked === true && puma.checked === false
          ? setBrand('adidas nike')
          : adidas.checked === false && puma.checked === true
          ? setBrand('nike puma')
          : setBrand('nike');
      } else if (target === 'nike' && nike.checked === false) {
        adidas.checked === true && puma.checked === true
          ? setBrand('adidas puma')
          : adidas.checked === true && puma.checked === false
          ? setBrand('adidas')
          : adidas.checked === false && puma.checked === true
          ? setBrand('puma')
          : setBrand('all');
      }

      if (target === 'puma' && puma.checked === true) {
        adidas.checked === true && nike.checked === true
          ? setBrand('adidas nike puma')
          : adidas.checked === true && nike.checked === false
          ? setBrand('adidas puma')
          : adidas.checked === false && nike.checked === true
          ? setBrand('nike puma')
          : setBrand('puma');
      } else if (target === 'puma' && puma.checked === false) {
        adidas.checked === true && puma.checked === true
          ? setBrand('adidas nike')
          : adidas.checked === true && nike.checked === false
          ? setBrand('adidas')
          : adidas.checked === false && nike.checked === true
          ? setBrand('nike')
          : setBrand('all');
      }
    }
  };

  const onSexeChange = (e) => {
    const name = e.target.id;
    const checked = e.target.checked;
    const men = document.getElementById('men');
    const women = document.getElementById('women');

    if (name === 'men')
      checked === true && women.checked === true
        ? setSexe('all')
        : checked === true && women.checked === false
        ? setSexe('men')
        : checked === false && women.checked === false
        ? setSexe('all')
        : setSexe('women');
    if (name === 'women')
      checked === true && men.checked === true
        ? setSexe('all')
        : checked === true && men.checked === false
        ? setSexe('women')
        : checked === false && men.checked === false
        ? setSexe('all')
        : setSexe('men');
  };

  useEffect(() => {
    setPagesNumber(Math.ceil(displayedShoes.length / 6));
  }, [displayedShoes]);

  useEffect(() => {
    let initialList = shoelist;
    let finalList;

    finalList =
      sexe === 'all'
        ? initialList
        : sexe === 'men'
        ? initialList.filter((shoe) => shoe.sexe === 'men')
        : initialList.filter((shoe) => shoe.sexe === 'women');

    finalList =
      brand === 'all'
        ? finalList
        : brand === 'adidas'
        ? finalList.filter((shoe) => shoe.brand === 'adidas')
        : brand === 'adidas nike'
        ? finalList.filter(
            (shoe) => shoe.brand === 'adidas' || shoe.brand === 'nike'
          )
        : brand === 'adidas puma'
        ? finalList.filter(
            (shoe) => shoe.brand === 'adidas' || shoe.brand === 'puma'
          )
        : brand === 'nike puma'
        ? finalList.filter(
            (shoe) => shoe.brand === 'puma' || shoe.brand === 'nike'
          )
        : brand === 'adidas nike puma'
        ? finalList.filter(
            (shoe) =>
              shoe.brand === 'nike' ||
              shoe.brand === 'adidas' ||
              shoe.brand === 'puma'
          )
        : brand === 'nike'
        ? finalList.filter((shoe) => shoe.brand === 'nike')
        : finalList.filter((shoe) => shoe.brand === 'puma');

    finalList =
      price === 180
        ? finalList.filter((shoe) => shoe.price <= 180)
        : finalList.filter((shoe) => shoe.price <= price);

    setDisplayedShoes(finalList);
    setCurrentPage(1);
  }, [sexe, brand, price]);

  return (
    <div id="shop">
      <Sidebar
        brandChange={handleBrandChange}
        sexeChange={onSexeChange}
        price={price}
        handleChange={handlePriceChange}
      />
      <div id="list-items">
        <ul>
          {displayedShoes.map((shoe, i) => {
            if (i >= currentPage * 6 - 6 && i < currentPage * 6) {
              return (
                <ShoeList
                  key={uniqid()}
                  shoe={shoe}
                  handleHover={handleHover}
                  handleLeave={handleLeave}
                />
              );
            }
          })}
        </ul>
        <ButtonsPages
          pagesNumber={pagesNumber}
          handlePreviousPage={handlePreviousPage}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </div>
  );
}

export default Shop;
