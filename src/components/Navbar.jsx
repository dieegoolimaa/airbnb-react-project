
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Make sure to use the correct path

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.appName}>Apartment Rentals</Link>
      <div className={styles.navigationLinks}>
        <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
