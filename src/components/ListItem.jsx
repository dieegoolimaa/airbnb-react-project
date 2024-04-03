import "../components/ListItem.css"; // Make sure to import the CSS file
import { Link } from "react-router-dom";

const ListItem = ({ item, deleteItem }) => {
  const handleDelete = (e) => {
    e.stopPropagation(); // Prevent the link navigation when deleting
    deleteItem(item.id);
  };

  return (
    <Link to={`/items/${item.id}`} className="list-item-link">
      <li className="list-item">
        <div className="list-item-name">{item.name}</div>
        <div className="list-item-details">
          <span style={{ color: item.isCompleted ? "green" : "red" }}>
            {item.price < 100 ? "Completed ✅" : "Not Completed ❌"}
          </span>
          <button
            type="button"
            onClick={handleDelete}
            className="delete-button"
          >
            Delete Item
          </button>
        </div>
      </li>
    </Link>
  );
};

export default ListItem;
