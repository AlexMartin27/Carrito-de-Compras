import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.jsx";
import PropTypes from "prop-types";

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart(); //pasamos este al button
  
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
     
  }
  
  return (
    <main className="products">
      <ul>
        {products.slice(0, 9).map((product) => {
          const isProductInCart = checkProductInCart(product);

          return(
            <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>
                {product.title} - ${product.price}
              </strong>
            </div>
            <div>
              <button 
              style={{backgroundColor: isProductInCart ? 'red' : 'green'}}
              onClick={() => {isProductInCart ? removeFromCart(product) : addToCart(product)}}>
               {
                isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>
               }
              </button>
            </div>
          </li>
          )
})}
      </ul>
    </main>
  );
}

Products.propTypes = {
  products: PropTypes.any.isRequired,
  // Aquí puedes definir el tipo específico de filters si lo deseas};
};
