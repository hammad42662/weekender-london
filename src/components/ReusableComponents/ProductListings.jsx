import { useContext } from "react";
import styles from "../shared-styles/ProductSharedStyles.module.css";
import { CartContext } from "../../context/CartContext";

function ProductListing({ products, onAddToCart }) {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <>
      <ul className={styles.cardContainer}>
        {products.map((product) => (
          <li key={product.id} className={styles.card}>
            <img
              src={product.image1}
              alt={`${product.name} image`}
              className={styles.mainImg}
            />

            <p>£{product.price}</p>
            <h1>{product.name}</h1>
            <button
              className={styles.addToCart}
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductListing;
