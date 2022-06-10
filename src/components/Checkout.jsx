import { useEffect, useState } from 'react';

function Checkout({ shoeList }) {
  const [showList, setShowlist] = useState(false);

  useEffect(() => {
    shoeList.length !== 0 ? setShowlist(true) : setShowlist(false);
  }, [shoeList]);

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
            {shoeList.map((shoe) => {
              total += shoe.price * shoe.quantity;
              return (
                <li>
                  <img src={shoe.images.ppl} alt="shoe image" />
                  <h2>{shoe.name}</h2>
                  <h1>{shoe.price + ' €'}</h1>
                  <div className="row-wrapper">
                    <i // onClick={handleClickRemoveQuantity}
                      className="bi minus bi-dash-circle-fill" // data-shoe={shoe.name}
                    ></i>
                    <p>{shoe.quantity}</p>
                    <i // onClick={handleClickAddQuantity}
                      className="bi plus bi-plus-circle-fill" // data-shoe={shoe.name}
                    ></i>
                  </div>
                  <i class="bi bi-x-circle"></i>
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
          <button id="checkout-close" type="button">
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
