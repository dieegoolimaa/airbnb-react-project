import { Link } from "react-router-dom";

const Sidebar = ({ newItems, markItemsAsOld }) => {
  // You could call markItemsAsOld at some point to reset the isNew flags

  return (
    <div className="sidebar">
      <h3>Newly Added Items</h3>
      <ul>
        {newItems?.map((item) => (
          <Link to={`/items/${item.id}`} >
          <li key={item.id}>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};



export default Sidebar;
