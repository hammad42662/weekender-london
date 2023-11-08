import styles from "../shared-styles/ProductSharedStyles.module.css";
import AccessoriesHeading from "./AccessoriesHeading";
import AccesoriesObj from "./AccessoriesObj";

function AccessoriesProductLisitng() {
  return (
    <>
      <AccessoriesHeading />
      <ul className={styles.cardContainer}>
        {AccesoriesObj.map((bag) => (
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
export default AccessoriesProductLisitng;
