import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form"; // Assuming Form is in the same directory

const AddNewItem = ({ addItem, allData }) => {
  const navigate = useNavigate();

  // Handler for when the form is submitted
  const handleFormSubmit = (newItem) => {
    addItem(newItem); // Use the addItem function passed as a prop to add the new item
    navigate("/"); // Navigate back to the dashboard after adding the item
  };

  return (
    <div>
      <h2>Register your property</h2>
      {/* The Form component is called with empty initial data for creating a new item */}
      <Form initialData={{}} onSubmit={handleFormSubmit} allData={allData} />
    </div>
  );
};

export default AddNewItem;
