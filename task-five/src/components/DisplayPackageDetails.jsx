import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PackageDetails = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await fetch(
          `https://backbone.evatril.in/api/v1/package/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPackageDetails(data);
      } catch (error) {
        console.error("Error fetching package details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!packageDetails) return <div>No details found for this package.</div>;

  return (
    <div>
      <h2>Package Details</h2>
      <p>Name: {packageDetails.code}</p>
      <img src={packageDetails.images} alt={packageDetails.name} />
      <h3>Items</h3>
      <ul>
        {packageDetails.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
            <img src={item.images} alt={item.name} />
          </li>
        ))}
      </ul>
      <p>Name: {packageDetails.name}</p>
      <p>Type: {packageDetails.packageType}</p>
      <p>Price: {packageDetails.price}</p>
      <p>Segment: {packageDetails.segmentType}</p>
    </div>
  );
};

export default PackageDetails;
