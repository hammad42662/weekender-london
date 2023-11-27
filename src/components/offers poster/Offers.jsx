import styles from "./offers.module.css";
function Offers() {
  return (
    <section className={styles.offerMain}>
      <h1>Offers</h1>
      <div className={styles.posterMain}>
        <div className={styles.poster}>
          <img src="../public/images/offer-poster.jpg" alt="offers poster" />
          <button className={styles.posterButton}>Shop New Arrival</button>
        </div>
        <div className={styles.poster}>
          <img
            src="../public/images/newarrival-poster.jpg"
            alt="offers poster"
          />
          <button className={styles.posterButton}>Shop Offers</button>
        </div>
      </div>
    </section>
  );
}

export default Offers;
