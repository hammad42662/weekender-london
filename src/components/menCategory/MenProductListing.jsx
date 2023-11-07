import styles from "./MenProductListing.module.css";
import MenHeading from "./MenHeading";
import MenBagsObj from "./MenBagsObject";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

function MenProductListing() {
  const [product, setProduct] = useState([...MenBagsObj]);
  const { cartItems, setCartItems } = useContext(CartContext);
  function addToCart(clickedBag) {
    setCartItems([...cartItems, clickedBag]);
  }
  return (
    <>
      <MenHeading />
      <ul className={styles.cardContainer}>
        {product.map((bag) => (
          <li key={bag.id} className={styles.card}>
            <img src={bag.image1} alt="bag image" className={styles.mainImg} />

            <p>£{bag.price}</p>
            <h3>{bag.name}</h3>
            <button className={styles.addToCart} onClick={() => addToCart(bag)}>
              Add To cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenProductListing;
