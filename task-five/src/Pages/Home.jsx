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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border rounded-lg p-4 shadow-lg">
            <p className="text-xl font-semibold mb-2">{pkg.name}</p>
            <img
              src={pkg.images}
              alt={pkg.name}
              className="w-full h-40 object-cover mb-2"
            />
            <div className="flex justify-between items-center mb-2">
              <p className="text-lg font-medium">{pkg.price}</p>
              <p className="text-sm font-light">{pkg.code}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm">{pkg.packageType}</p>
              <p className="text-sm">{pkg.segmentType}</p>
            </div>
            <button
              onClick={() => handleDetailsClick(pkg.id)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
