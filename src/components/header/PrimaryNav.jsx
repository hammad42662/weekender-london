import { Link } from "react-router-dom";
import styles from "./PrimaryNav.module.css";
function PrimaryNav() {
  return (
    <nav className={styles.primaryNav}>
      <span>Wishlist</span>
      <p>
        <Link to="/" className={styles.logo}>
          Weekender <br /> London
        </Link>
      </p>
      <div>
        <span>Sign In</span>
        <span>Basket</span>
      </div>
    </nav>
  );
}
export default PrimaryNav;
