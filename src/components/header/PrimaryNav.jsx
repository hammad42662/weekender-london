import { Link } from "react-router-dom";
import styles from "./PrimaryNav.module.css";
function PrimaryNav() {
  return (
    <nav className={styles.primaryNav}>
      <span>Wishlist</span>
      <h1>
        <Link to="/">
          Weekender <br /> London
        </Link>
      </h1>
      <span>Sign In</span>
      <span>Basket</span>
    </nav>
  );
}
export default PrimaryNav;
