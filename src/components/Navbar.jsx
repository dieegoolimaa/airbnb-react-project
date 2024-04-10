import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "./image/LOGOSITE.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" style={{ width: "60px" }} />
      <Link to="/" className={styles.appName}>
        Apartment Rentals
      </Link>
      <div className={styles.navigationLinks}>
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
