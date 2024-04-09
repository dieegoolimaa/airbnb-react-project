import styles from "../components/ListItem.module.css";
import { Link } from "react-router-dom";

const ListItem = ({ item, deleteItem }) => {
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent the link navigation when deleting
    deleteItem(item.id);
  };

  return (
    <Link to={`/items/${item.id}`} className={styles.listItemLink}>
      <li className={styles.listItem}>
      <img
            src={item.picture_url.url}
            alt={item.name}
            className={styles.image}
          />
        <div className={styles.listItemName}>{item.name}</div>
        <div className={styles.listItemDetails}>
          <span className={`${styles.status} ${item.isCompleted ? styles.completed : styles.notCompleted}`}>
            {item.price < 100 ? "Super Deal ! ✅" : "Normal ❌"}
          </span>
          <button
            type="button"
            onClick={handleDelete}
            className={styles.deleteButton}
          >
            Delete Item
          </button>
        </div>
      </li>
    </Link>
  );
};

export default ListItem;
