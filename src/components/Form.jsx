import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";

const Form = ({ initialData, onSubmit, allData }) => {
  const [formData, setFormData] = useState(initialData);

  // Use useEffect to ensure that an ID is set if not already present in the initialData
  useEffect(() => {
    // If initialData is empty, implying adding a new item, pick random data for defaults
    if (Object.keys(initialData).length === 0 && allData.length > 0) {
      const randomIndex = Math.floor(Math.random() * allData.length);
      const randomData = { ...allData[randomIndex] };
      delete randomData.id; // Remove the id from the selected random data
      randomData.id = uuidv4(); // Assign a new UUID for this form instance

      setFormData(randomData);
    }
  }, [initialData, allData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass the form data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label className={styles.label}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Country:
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Accommodates:
        <input
          type="number"
          name="accommodates"
          value={formData.accommodates}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Bedrooms:
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Beds:
        <input
          type="number"
          name="beds"
          value={formData.beds}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Bathrooms:
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Form;
