import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";
import styles from "./Nav.module.css";
import { Outlet } from "react-router-dom";
function Nav() {
  return (
    <>
      {" "}
      <header className={styles.nav}>
        <PrimaryNav />
        <SecondaryNav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Nav;
