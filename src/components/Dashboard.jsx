import List from "../components/List";
import DataJSON from "../assets/rentals.json";
import { useState } from "react";

function Dashboard() {
  const initialItems = DataJSON.results;
  const [items, setItems] = useState(initialItems); // Initialize state with results

  const deleteItem = (id) => {
    // Update state to filter out the item with the specified id
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <List items={items} deleteItem={deleteItem} />
    </>
  );
}

export default Dashboard;
