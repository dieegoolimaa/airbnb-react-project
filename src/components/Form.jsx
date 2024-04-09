import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./Form.module.css";

const Form = ({ initialData, onSubmit, allData }) => {
  const [formData, setFormData] = useState(initialData);

  // Use useEffect to ensure that an ID is set if not already present in the initialData
  useEffect(() => {
    if (
      Object.keys(initialData).length === 0 &&
      allData &&
      allData.length > 0
    ) {
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

  const formFields = [
    { name: "name", label: "Name", type: "text" },
    { name: "city", label: "City", type: "text" },
    { name: "country", label: "Country", type: "text" },
    { name: "price", label: "Price", type: "number" },
    { name: "accommodates", label: "Accommodates", type: "number" },
    { name: "bedrooms", label: "Bedrooms", type: "number" },
    { name: "beds", label: "Beds", type: "number" },
    { name: "bathrooms", label: "Bathrooms", type: "number" },
    {name: "host_name", label: "Host Name", type: "text"}
    // Add other fields as needed
  ];

  // Correctly use formFields for mapping
  const generatedFormFields = formFields.map(
    ({ name, label, type }) =>
      formData.hasOwnProperty(name) ? (
        <label key={name} className={styles.label}>
          {label}:
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </label>
      ) : null // Skip fields not present in formData
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData); // Pass the form data back to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {generatedFormFields}
      <label className={styles.label}>
        Description:
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          required
          className={styles.textarea} // Updated class name for styling
        />
      </label>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Form;
