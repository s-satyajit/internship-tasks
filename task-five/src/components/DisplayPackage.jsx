import React from "react";
import usePackage from "../hooks/usePackage"; // Adjust the path as necessary

const DisplayPackage = () => {
  const { packages, packageDetails, loading } = usePackage();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Packages</h1>
      {packages.map((pkg) => (
        <div key={pkg.id}>
          <h3>{pkg.name}</h3>
          <p>Price: {pkg.price}</p>
          <img src={pkg.images} alt={pkg.name} />
          <h4>Items:</h4>
          <ul>
            {packageDetails
              .find((detail) => detail.id === pkg.id)
              ?.items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.price}
                  <img src={item.images} alt={item.name} />
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DisplayPackage;
