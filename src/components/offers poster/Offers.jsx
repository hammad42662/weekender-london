import styles from "./Offers.module.css";
function Offers() {
  return (
    <section className={styles.offerMain}>
      <h1>Offers</h1>
      <div className={styles.posterMain}>
        <div className={styles.poster}>
          <img src="/images/offer-poster.jpg" alt="offers poster" />
          <div className={styles.posterContent}>
            <p>New Arrival | Fall 2023/2024</p>
            <button className={styles.posterButton}>Shop New Arrival</button>
          </div>
        </div>
        <div className={styles.poster}>
          <img src="/images/newarrival-poster.jpg" alt="offers poster" />
          <div className={styles.posterContent}>
            <p>Shop all the offers</p>
            <button className={styles.posterButton}>Shop Offers</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
