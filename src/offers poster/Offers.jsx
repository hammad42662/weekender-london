import Button from "../components/Reusable Components/Button";
import styles from "./offers.module.css";
function Offers() {
  return (
    <div className={styles.offerMain}>
      <div className={styles.poster}>
        <img src="../public/images/newarrival-poster.png" alt="offers poster" />
        <PosterButton>Shop New Arrival</PosterButton>
      </div>
      <div className={styles.poster}>
        <img src="../public/images/offer-poster.png" alt="offers poster" />
        <PosterButton> Shop Offers</PosterButton>
      </div>
    </div>
  );
}
function PosterButton({ children }) {
  return <button className={styles.posterButton}>{children}</button>;
}
export default Offers;
