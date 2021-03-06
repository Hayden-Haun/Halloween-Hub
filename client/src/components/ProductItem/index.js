import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import "./productItem.css";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    // <div className="card px-1 py-1">
    //   <Link to={`/products/${_id}`}>
    //     <img alt={name} src={`/images/${image}`} />
    //     <p>{name}</p>
    //   </Link>
    //   <div>
    //     <div>
    //       {quantity} {pluralize("item", quantity)} in stock
    //     </div>
    //     <span>${price}</span>
    //   </div>
    //   <button onClick={addToCart}>Add to cart</button>
    // </div>
    <div className="column is-4-tablet is-3-desktop">
      <div className="card normalizeCardSize pt-1">
        {/* <header class="is-flex is-justify-content-center is-align-items-center">
          <h1 class="title has-text-centered is-size-1">{name}</h1>
        </header> */}

        <div className="card-image my-4">
          <figure className="image is-4by3">
            <Link to={`/products/${_id}`}>
              <img src={`/images/${image}`} alt={name} />
            </Link>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content shortenText">
              <Link to={`/products/${_id}`}>
                <div className="title is-4 has-text-centered shortenText">
                  {name}
                </div>
              </Link>

              <p className="is-6 has-text-centered">${price}</p>
              <p className="is-6 has-text-centered">In Stock: {quantity}</p>
            </div>
          </div>
        </div>
        <footer className="is-flex is-justify-content-center">
          <button className="button is-primary mb-4" onClick={addToCart}>
            Add to Cart
          </button>
        </footer>
      </div>
    </div>
  );
}

export default ProductItem;
