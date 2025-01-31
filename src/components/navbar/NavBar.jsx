
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/employees">Employees</Link>
      </li>
      <li className="navbar-item">
        <Link to="/orders">Orders</Link>
      </li>
      <li className="navbar-item">
        <Link to="/sales-report">Sales Report</Link>
      </li>
      {localStorage.getItem("meal_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("meal_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
        // (12) Once the user enters their log in information, they should be redirected to Home component.
      )}
    </ul>
  );
};
