import { Link, NavLink } from "react-router-dom";
import styles from "./SecondaryNav.module.css";
function SecondaryNav() {
  return (
    <nav className={styles.secondaryNav}>
      <ul>
        <li>
          <NavLink to="/menbags" as={NavLink} className={styles.listItems}>
            Men's Bags
          </NavLink>
        </li>
        <li>
          <NavLink to="/womenbags" as={NavLink} className={styles.listItems}>
            Women's Bags
          </NavLink>
        </li>
        <li>
          <NavLink to="/accessories" as={NavLink} className={styles.listItems}>
            Accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default SecondaryNav;
