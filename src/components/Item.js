import React, { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);

  function handleAddToCartClick() {
    setAddToCart((addToCart) => !addToCart);
  }

  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className= {addToCart ? "remove" : "add"}
      onClick={handleAddToCartClick}
      > 
      {addToCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
