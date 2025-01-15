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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Package Details</h2>
        <img
          src={packageDetails.images}
          alt={packageDetails.name}
          className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg"
        />
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>
            <span className="font-medium">Name:</span> {packageDetails.name}
          </li>
          <li>
            <span className="font-medium">Code:</span> {packageDetails.code}
          </li>
          <li>
            <span className="font-medium">Price:</span> {packageDetails.price}
          </li>
          <li>
            <span className="font-medium">Type:</span>{" "}
            {packageDetails.packageType}
          </li>
          <li>
            <span className="font-medium">Segment:</span>{" "}
            {packageDetails.segmentType}
          </li>
        </ul>
        <h3 className="text-xl font-bold mb-4">Items</h3>
        <ul className="space-y-4">
          {packageDetails.items.map((item) => (
            <li
              key={item.id}
              className="border rounded-lg p-4 shadow-lg flex items-center"
            >
              <img
                src={item.images}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm">
                  <span className="font-medium">Price:</span> {item.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageDetails;
