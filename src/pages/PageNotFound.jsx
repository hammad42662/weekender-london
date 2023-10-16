import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
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
