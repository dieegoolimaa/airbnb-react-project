import "./ListItem.css"; // Make sure to import the CSS file

const ListItem = ({ item, deleteItem }) => {
  //   console.log(deleteItem);

  const handleDelete = () => {
    deleteItem(item.id);
  };

  return (
    <li className="list-item">
      <div className="list-item-name">{item.name}</div>
      <div className="list-item-details">
        <span style={{ color: item.isCompleted ? "green" : "red" }}>
          {item.price < 100 ? "Completed ✅" : "Not Completed ❌"}
        </span>
        <button onClick={handleDelete} className="delete-button">
          Delete Item
        </button>
      </div>
    </li>
  );
};

export default ListItem;
