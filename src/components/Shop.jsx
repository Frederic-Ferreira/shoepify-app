function Shop() {
  return (
    <div id="shop">
      <div id="sidebar">
        <div id="sexe-input">
          <p>For</p>
          <label htmlFor="men">Men: </label>
          <input type="checkbox" id="men" />
          <label htmlFor="men">Women: </label>
          <input type="checkbox" id="women" />
        </div>
        <div id="brand-input">
          <p>Brand</p>
          <select name="brand" id="brand">
            <option value="all">All</option>
            <option value="adidas">Adidas</option>
            <option value="nike">Nike</option>
            <option value="puma">puma</option>
          </select>
        </div>
        <div id="price-input">
          <p>Price</p>
          <div className="row-wrapper">
            <input
              type="number"
              min="90"
              max="180"
              step="10"
              placeholder="between 90€ - 180€"
            />
            <p>€</p>
          </div>
        </div>
      </div>
      <div id="list-items"></div>
    </div>
  );
}

export default Shop;
