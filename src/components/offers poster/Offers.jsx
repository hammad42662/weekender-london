import styles from "./offers.module.css";
function Offers() {
  return (
    <section className={styles.offerMain}>
      <div className={styles.poster}>
        <img src="../public/images/newarrival-poster.png" alt="offers poster" />
        <PosterButton>Shop New Arrival</PosterButton>
      </div>
      <div className={styles.poster}>
        <img src="../public/images/offer-poster.jpg" alt="offers poster" />
        <PosterButton> Shop Offers</PosterButton>
      </div>
    </section>
  );
}
function PosterButton({ children }) {
  return <button className={styles.posterButton}>{children}</button>;
}
export default Offers;
