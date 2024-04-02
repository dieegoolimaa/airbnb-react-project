import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import List from "./components/List";
import DataJSON from "./assets/rentals.json";

function App() {
  const initialItems = DataJSON.results;
  const [items, setItems] = useState(initialItems); // Initialize state with results

  const deleteItem = (id) => {
    // Update state to filter out the item with the specified id
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="main-content">
          <h1>Welcome to My App!</h1>
          <p>This is the home page content.</p>

          <List items={items} deleteItem={deleteItem} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
