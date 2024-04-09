
import React from "react";
import List from "../components/List";
import { Link } from "react-router-dom";

function Dashboard({ items, deleteItem }) {
  return (
    <>
      <Link to="/addnewitem">
        <button type="button">Add Item</button>
      </Link>
      <List items={items} deleteItem={deleteItem} />
    </>
  );
}

export default Dashboard;
