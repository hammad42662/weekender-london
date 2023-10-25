import { Link } from "react-router-dom";
import styles from "./PrimaryNav.module.css";
import Cart from "../cart/Cart";
function PrimaryNav() {
  return (
    <nav className={styles.primaryNav}>
      <ul>
        <li>
          <label htmlFor="seacrhbar">
            <span>🔎</span>
          </label>
          <input type="search" id="searchbar" name="seacrhbar" />
        </li>
        <li>
          <Link to="/" className={styles.logo}>
            Weekender London
          </Link>
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
