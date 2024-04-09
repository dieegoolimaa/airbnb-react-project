import React, { useState, useParams } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddNewItem from "./components/AddNewItem";
import About from "./components/About";
import ItemDetailsPage from "./components/ItemDetailsPage";
import NotFound from "./components/NotFound";
import DataJSON from "./assets/rentals.json";

function App() {
  const [items, setItems] = useState(DataJSON.results); // Initialize state here

  const deleteItem = (id) => {
    // This function is passed down to components that need to delete items
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = (newItem) => {
    // Function to add a new item, which can be passed to AddNewItem
    setItems([{ ...newItem, isNew: true }, ...items]);
  };

  const updateItem = (updatedItem) => {
    // Function to update an existing item
    setItems(
      items.map((item) =>
        item.id === updatedItem.id ? { ...item, ...updatedItem } : item
      )
    );
  };

  const markItemsAsOld = () => {
    const updatedItems = items.map((item) => {
      return { ...item, isNew: false };
    });
    setItems(updatedItems);
  };

  const newItems = items.filter((item) => item.isNew);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar newItems={newItems} markItemsAsOld={markItemsAsOld} />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Dashboard items={items} deleteItem={deleteItem} />}
            />
            <Route
              path="/items/:itemId"
              element={<ItemDetailsPage items={items} />}
            />
            <Route
              path="/addnewitem"
              element={<AddNewItem addItem={addItem} allData={items} />}
            />
            <Route
              path="/items/edit/:itemId"
              element={
                <AddNewItem
                  addItem={addItem}
                  updateItem={updateItem}
                  allData={items}
                />
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
