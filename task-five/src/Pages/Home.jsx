import React from "react";
import { useNavigate } from "react-router-dom";
import usePackage from "../hooks/usePackage";

const Home = () => {
  const { packages, loading } = usePackage();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;

  const handleDetailsClick = (id) => {
    navigate(`/package/${id}`);
  };

  return (
    <div>
      <h1>Packages</h1>
      {packages.map((pkg) => (
        <div key={pkg.id}>
          <p>{pkg.name}</p>
          <p>{pkg.segmentType}</p>
          <img src={pkg.images} alt={pkg.name} />
          <p>{pkg.price}</p>
          <p>{pkg.packageType}</p>
          <p>{pkg.code}</p>
          <button onClick={() => handleDetailsClick(pkg.id)}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
