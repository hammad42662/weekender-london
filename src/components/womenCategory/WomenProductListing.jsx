import styles from "../shared-styles/ProductSharedStyles.module.css";
import WomensHeading from "./WomensHeading";
import WomenBagsObj from "./WomenBagsObj";
function WomenProductListing() {
  return (
    <>
      <WomensHeading />
      <ul className={styles.cardContainer}>
        {WomenBagsObj.map((bag) => (
          <li key={bag.id} className={styles.card}>
            <img src={bag.image1} alt="bag image" className={styles.mainImg} />

            <p>£{bag.price}</p>
            <h3>{bag.name}</h3>
            <button className={styles.addToCart}>Add To cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default WomenProductListing;
