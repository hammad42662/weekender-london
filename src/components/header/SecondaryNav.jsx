import { Link } from "react-router-dom";
import styles from "./SecondaryNav.module.css";
function SecondaryNav() {
  return (
    <nav className={styles.secondaryNav}>
      <ul>
        <li>
          <Link to="/menbags" className={styles.listItems}>
            Men Bags
          </Link>
        </li>
        <li>
          <Link to="/womenbags" className={styles.listItems}>
            Women Bags
          </Link>
        </li>
        <li>
          <Link to="/accessories" className={styles.listItems}>
            Accessories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default SecondaryNav;
