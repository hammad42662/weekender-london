import styles from "./HeroBackground.module.css";

function HeroBackground() {
  return (
    <section className={styles.hero}>
      <picture>
        <img
          src="../public/images/hero-image.jpg"
          alt="hero-image"
          className={styles.bgImage}
        />
      </picture>
    </section>
  );
}
export default HeroBackground;
