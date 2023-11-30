import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";
function PageNotFound() {
  return (
    <div className={styles.pnf}>
      <h1>Page Not Found :(</h1>
      <p>
        Go to
        <Link to="/">
          <strong>Home</strong>
        </Link>
      </p>
    </div>
  );
}
export default PageNotFound;
