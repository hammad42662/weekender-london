const Images = [
  "../public/images/menbags/his-carry-all.jpg",
  "../public/images/menbags/his-carry-all-inside.jpg",
  "../public/images/menbags/his-carry-all-close.jpg",
  "../public/images/menbags/his-carry-all-front.jpg",
];
import styles from "./MenProductListing.module.css";
import Heading from "./Heading";
import MenBagsObj from "./MenBagsObject";

function MenProductListing({ cartItems, handleCartItems }) {
  return (
    <>
      <Heading />
      <ul className={styles.cardContainer}>
        {MenBagsObj.map((bag) => (
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
