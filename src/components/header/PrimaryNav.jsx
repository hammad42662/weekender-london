import { NavLink } from "react-router-dom";
import styles from "./PrimaryNav.module.css";
import Cart from "../cart/Cart";
function PrimaryNav() {
  return (
    <nav className={styles.primaryNav}>
      <div className={styles.logoContainer}>
        <NavLink to="/" as={NavLink} className={styles.logo}>
          <span>Weekender London</span>
        </NavLink>
      </div>
      <div>
        <Cart />
      </div>
    </nav>
  );
}
export default PrimaryNav;
