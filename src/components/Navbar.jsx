import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="app-name">Apartment Rentals</div>
      <div className="navigation-links">
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
