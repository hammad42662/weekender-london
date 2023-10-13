import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <div className={styles.nav}>
      <PrimaryNav />
      <SecondaryNav />
    </div>
  );
}
export default Nav;
