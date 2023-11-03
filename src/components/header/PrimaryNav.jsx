import { NavLink } from "react-router-dom";
import styles from "./PrimaryNav.module.css";
import Cart from "../cart/Cart";
import "boxicons";
function PrimaryNav() {
  return (
    <nav className={styles.primaryNav}>
      <div className={styles.logoContainer}>
        <NavLink to="/" as={NavLink} className={styles.logo}>
          <span>Weekender London</span>
          <box-icon
            type="solid"
            name="shopping-bags"
            color="black"
            size="sm"
          ></box-icon>
        </NavLink>
      </div>
      <div>
        <Cart />
      </div>
    </nav>
  );
}
export default PrimaryNav;
