import { useId } from "react";
import "./Cart.css";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import PropTypes from "prop-types";

function CartItem({ thumbnail, title, price, quantity, addTocart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small> Qty: {quantity} </small>
        <button onClick={addTocart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  const cantProductos = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPagar = cart.reduce(
    (total, product) => total + product.price * product.quantity, 0);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addTocart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <p>Productos: {cantProductos}</p>
        <p>Total a pagar: {totalPagar} </p>

        <button style={{ backgroundColor: "#E36414" }} onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

CartItem.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  addTocart: PropTypes.func.isRequired,
};
