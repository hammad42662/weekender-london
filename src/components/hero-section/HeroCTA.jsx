import { redirect, useNavigate } from "react-router-dom";
import Button from "../ReusableComponents/Button";
import styles from "./HeroCTA.module.css";
function HeroCTA() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/menbags");
    console.log("button clicked");
  }
  return (
    <div className={styles.cta}>
      <h1>Weekender London</h1>
      <p>Bags for the modern world</p>
      <p>
        Shop our collection of stylish and durable bags, perfect for work,
        travel, and everyday use.
      </p>
      <Button onClick={handleClick} color="red">
        Shop Now
      </Button>
    </div>
  );
}
export default HeroCTA;
