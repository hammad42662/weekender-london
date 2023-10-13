import { Link } from "react-router-dom";

function SecondaryNav() {
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row justify-between items-center">
        <li>
          <Link to="/menbags">Men Bags</Link>
        </li>
        <li>
          {" "}
          <Link to="/womenbags">Women Bags</Link>
        </li>
        <li> Accessories</li>
      </ul>
    </nav>
  );
}
export default SecondaryNav;
