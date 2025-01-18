import { useEffect, useState } from "react";

const usePackage = () => {
  const [packages, setPackages] = useState([]);
  const [packageDetails, setPackageDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const response = await fetch(
          `https://backbone.evatril.in/api/v1/package`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        const packageIds = data.map((pkg) => pkg.id);

        const detailsPromises = packageIds.map(async (id) => {
          await new Promise((res) => setTimeout(res, 100));
          const res = await fetch(
            `https://backbone.evatril.in/api/v1/package/${id}`
          );

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const details = await res.json();
          console.log(`Details for package ${id}:`, details);
          return details;
        });

        const allPackageDetails = await Promise.all(detailsPromises);
        console.log("All package details:", allPackageDetails);
        setPackages(data);
        setPackageDetails(allPackageDetails);
      } catch (error) {
        console.error("Error fetching package details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();
  }, []);

  return { packages, packageDetails, loading };
};

export default usePackage;