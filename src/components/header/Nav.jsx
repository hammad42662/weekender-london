import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <header className={styles.nav}>
      <PrimaryNav />
      <SecondaryNav />
    </header>
  );
}
export default Nav;
