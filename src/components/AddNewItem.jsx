import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form"; // Assuming Form is in the same directory

const AddNewItem = ({ addItem, allData, updateItem }) => {
  const navigate = useNavigate();
  const { itemId } = useParams(); // Get the itemId from the URL
  const isEditing = Boolean(itemId); // Determine if adding a new item or editing

  // If editing, find the item in allData that matches the itemId
  const initialItemData = isEditing ? allData.find(item => item.id === itemId) : {};

  const handleFormSubmit = (itemData) => {
    if (isEditing) {
      updateItem(itemData); // Use an updateItem function to update the item
    } else {
      addItem(itemData); // Add the new item
    }
    navigate("/"); // Navigate back to the dashboard after submitting
  };

  return (
    <div>
      <h2>{isEditing ? "Edit your property" : "Register your property"}</h2>
      <Form initialData={initialItemData} onSubmit={handleFormSubmit} allData={allData} />
    </div>
  );
};

export default AddNewItem;
