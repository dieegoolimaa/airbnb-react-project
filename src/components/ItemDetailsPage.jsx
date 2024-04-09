import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ItemDetailsPage.module.css";
import { useNavigate } from "react-router-dom"

const ItemDetailsPage = ({ items }) => {
  const { itemId } = useParams(); // This grabs the itemId from the URL
  const [itemDetails, setItemDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching the item details. In a real app, we might fetch from an API
    const item = items.find((item) => item.id === itemId);
    setItemDetails(item);
  }, [itemId]);

  const handleEdit = () => {
    navigate(`/items/edit/${itemId}`);
  };



  // Display item details here (name, price, other properties)
  console.log(itemDetails);
  return (
    <div className={styles.container}>
      {itemDetails ? (
        <div className={styles.card}>
          <h1>Item Details</h1>
          <img
            src={itemDetails.picture_url.url}
            alt={itemDetails.name}
            className={styles.image}
          />
          <h2>{itemDetails.name}</h2>
          <p>
            <strong>Location:</strong> {itemDetails.city}, {itemDetails.country}
          </p>
          <p>
            <strong>Hosted by:</strong> {itemDetails.host_name} since{" "}
            {itemDetails.host_since}
          </p>
          <p>
            <strong>Description:</strong> {itemDetails.description}
          </p>
          <p>
            <strong>Space:</strong> {itemDetails.space}
          </p>
          <p>
            <strong>Price:</strong> ${itemDetails.price} per night
          </p>
          <p>
            <strong>Accommodates:</strong> {itemDetails.accommodates} guests
          </p>
          <p>
            <strong>Bedrooms:</strong> {itemDetails.bedrooms} |{" "}
            <strong>Beds:</strong> {itemDetails.beds} |{" "}
            <strong>Bathrooms:</strong> {itemDetails.bathrooms}
          </p>
          <p>
            <strong>Rating:</strong> {itemDetails.review_scores_rating}
          </p>

          <button type="button" onClick={handleEdit} className={styles.editButton}>
            Edit Item
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailsPage;
