const Images = [
  "../public/images/menbags/his-carry-all.jpg",
  "../public/images/menbags/his-carry-all-inside.jpg",
  "../public/images/menbags/his-carry-all-close.jpg",
  "../public/images/menbags/his-carry-all-front.jpg",
];
import styles from "./MenProductListing.module.css";
import MenBags from "./MenBagsObject";
import Heading from "./Heading";
import { useState } from "react";
function MenProductListing() {
  const [cartItems, setCartItems] = useState([]);
  function handleCartItems(item) {
    setCartItems([...cartItems, item]);
    console.log("add to cart");
  }
  return (
    <>
      <Heading />
      <ul className={styles.cardContainer}>
        {MenBags.map((bag) => (
          <li key={bag.id} className={styles.card}>
            <img src={bag.image1} alt="bag image" className={styles.mainImg} />

            <p>{bag.price}</p>
            <h3>{bag.name}</h3>
            <button className={styles.addToCart} onClick={handleCartItems}>
              Add To cart
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenProductListing;
