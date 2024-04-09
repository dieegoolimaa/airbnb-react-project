import { Link } from "react-router-dom";
import styles from './Sidebar.module.css';

const Sidebar = ({ newItems, markItemsAsOld }) => {
  // You could call markItemsAsOld at some point to reset the isNew flags

  return (
    <div className={styles.sidebar}>
      <h3>Newly Added Items</h3>
      <ul>
        {newItems?.map((item) => (
          <Link to={`/items/${item.id}`} key={item.id} className={styles.link}>
            <li className={styles.item}>
              <img src={item.picture_url.url} alt={item.name} className={styles.img} />
              <span>{item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};



export default Sidebar;
