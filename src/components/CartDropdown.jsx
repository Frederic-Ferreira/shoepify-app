import { Link } from 'react-router-dom';
import uniqid from 'uniqid';

export function CartDropdown({
  shoes,
  event,
  animation,
  visibility,
  shoeList,
  setShoeList,
}) {
  let total = 0;

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

  return (
    <div
      style={{ animation: animation, visibility: visibility }}
      id="cart__dropdown"
    >
      <ul>
        {shoes.map((shoe) => {
          total += shoe.price * shoe.quantity;
          return (
            <li data-name={shoe.name} key={uniqid()}>
              <img src={shoe.images.ppl} />
              <div className="column-wrapper">
                <p>{shoe.name}</p>
                <h3>{shoe.price.toFixed(2) + ' €'}</h3>
              </div>
              <div className="column-wrapper">
                <i
                  onClick={handleAddQuantity}
                  className="bi plus bi-plus-circle-fill"
                ></i>
                <p>{shoe.quantity}</p>
                <i
                  onClick={handleRemoveQuantity}
                  className="bi minus bi-dash-circle-fill"
                ></i>
              </div>
            </li>
          );
        })}
      </ul>
      <div id="cart__dropdown-btns">
        <p>
          Total: <span id="total">{total.toFixed(2) + ' €'}</span>
        </p>
        <div className="row-wrapper">
          <Link onClick={event} to="/checkout">
            <button id="checkout" type="button">
              Checkout
            </button>
          </Link>
          <button onClick={event} id="close" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
