import styles from "./HeroSection.module.css";
import { redirect, useNavigate } from "react-router-dom";
import Button from "../ReusableComponents/Button";

function HeroSection() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/menbags");
    console.log("button clicked");
  }
  return (
    <main className={styles.hero}>
      <div className={styles.contentContainer}>
        <img
          src="../public/images/hero-image.jpg"
          alt="hero-image"
          className={styles.bgImage}
        />
        <div className={styles.cta}>
          <div className={styles.heroHeading}>
            <h1>Weekender London</h1>
            <h2>Bags for the modern world</h2>
          </div>
          <p>
            Shop our collection of stylish and durable bags, perfect for work,
            travel, and everyday use.
          </p>
          <Button onClick={handleClick} color="red">
            Shop Now
          </Button>
        </div>
      </div>
    </main>
  );
}
export default HeroSection;
