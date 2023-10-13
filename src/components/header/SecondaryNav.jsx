import { Link } from "react-router-dom";
import styles from "./SecondaryNav.module.css";
function SecondaryNav() {
  return (
    <div className={styles.secondaryNav}>
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
        <li> Accessories</li>
      </ul>
    </div>
  );
}
export default SecondaryNav;
