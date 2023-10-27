import { Link, NavLink } from "react-router-dom";
import styles from "./PrimaryNav.module.css";
import Cart from "../cart/Cart";
function PrimaryNav() {
  return (
    <nav className={styles.primaryNav}>
      <ul>
        <li>
          <NavLink to="/" as={NavLink} className={styles.logo}>
            Weekender London
          </NavLink>
        </li>
        <li>Wishlist</li>
        <li>Sign In</li>
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
}
export default PrimaryNav;
