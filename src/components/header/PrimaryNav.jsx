import { NavLink } from "react-router-dom";
import styles from "./PrimaryNav.module.css";
import Cart from "../cart/Cart";
function PrimaryNav() {
  return (
    <nav className={styles.primaryNav}>
      <div className={styles.logoContainer}>
        <NavLink to="/" className={styles.logo}>
          <span>Weekender </span>
        </NavLink>
      </div>

      <Cart className={styles.cartIcon} />
    </nav>
  );
}
export default PrimaryNav;
