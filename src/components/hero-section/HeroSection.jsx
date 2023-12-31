import styles from "./HeroSection.module.css";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/menbags");
  }
  return (
    <main className={styles.hero}>
      <div className={styles.contentContainer}>
        <img
          src="images/hero-image2.jpg"
          alt="hero-image"
          className={styles.bgImage}
        />
        <div className={styles.cta}>
          <div className={styles.heroHeading}>
            <h1>Weekender </h1>
            <h2>"Bags for the modern world"</h2>
          </div>
          <p>
            Shop our collection of stylish and durable bags, perfect for work,
            travel, and everyday use.
          </p>
          <button onClick={handleClick}>Shop Now</button>
        </div>
      </div>
    </main>
  );
}
export default HeroSection;
