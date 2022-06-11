import { useEffect, useState } from 'react';

import uniqid from 'uniqid';

function Checkout({ shoeList, shoeListCart, setShoeList }) {
  const [showList, setShowlist] = useState(false);

  const {
    handleRemoveQuantity,
    handleAddQuantity,
    handleRemoveFromCart,
    handleEmptyCart,
  } = CheckoutFunctions(shoeList, setShoeList);

  useEffect(() => {
    shoeListCart.length !== 0
      ? setShowlist(true)
      : setShowlist(false);
  }, [shoeListCart]);

  let total = 0;

  return (
    <div id="checkout">
      <div
        className={
          showList === true ? 'items-list' : 'items-list message'
        }
      >
        {showList && (
          <ul>
            {shoeListCart.map((shoe) => {
              total += shoe.price * shoe.quantity;
              return (
                <li key={uniqid()} data-name={shoe.name}>
                  <img src={shoe.images.ppl} alt="shoe image" />
                  <h2>{shoe.name}</h2>
                  <h1>{shoe.price + ' €'}</h1>
                  <div className="row-wrapper">
                    <i
                      onClick={handleRemoveQuantity}
                      className="bi minus bi-dash-circle-fill"
                    ></i>
                    <p>{shoe.quantity}</p>
                    <i
                      onClick={handleAddQuantity}
                      className="bi plus bi-plus-circle-fill"
                    ></i>
                  </div>
                  <i
                    onClick={handleRemoveFromCart}
                    className="bi bi-x-circle"
                  ></i>
                </li>
              );
            })}
          </ul>
        )}
        {!showList && (
          <p>Your cart is empty, please come back later.</p>
        )}
      </div>
      <div id="total-checkout">
        <h2>Total</h2>
        <h1>{total} €</h1>
        <div className="column-wrapper">
          <button
            onClick={handleEmptyCart}
            id="checkout-close"
            type="button"
          >
            Clear Cart
          </button>
          <button id="checkout-payment" type="button">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
function CheckoutFunctions(shoeList, setShoeList) {
  const handleAddQuantity = (e) => {
    const shoeName = e.target.closest('li').dataset.name;
    const newShoeList = shoeList.map((shoe) =>
      shoe.name === shoeName
        ? { ...shoe, quantity: shoe.quantity + 1 }
        : shoe
    );

    setShoeList(newShoeList);
  };

  const handleRemoveQuantity = (e) => {
    const shoeName = e.target.closest('li').dataset.name;
    const newShoeList = shoeList.map((shoe) => {
      if (shoe.name === shoeName)
        return shoe.quantity !== 0
          ? { ...shoe, quantity: shoe.quantity - 1 }
          : shoe;
      else return shoe;
    });

    setShoeList(newShoeList);
  };

  const handleRemoveFromCart = (e) => {
    const shoeName = e.target.closest('li').dataset.name;
    const newShoeList = shoeList.map((shoe) => {
      if (shoe.name === shoeName) return { ...shoe, quantity: 0 };
      else return shoe;
    });

    setShoeList(newShoeList);
  };

  const handleEmptyCart = () => {
    const newShoeList = shoeList.map((shoe) => {
      return { ...shoe, quantity: 0 };
    });

    setShoeList(newShoeList);
  };
  return {
    handleRemoveQuantity,
    handleAddQuantity,
    handleRemoveFromCart,
    handleEmptyCart,
  };
}
