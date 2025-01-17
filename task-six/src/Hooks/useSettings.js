import { useState, useEffect } from "react";

const useSettings = () => {
  const [settings, setSettings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(
          `https://backbone.evatril.in/api/v1/settings`,
          {
            method: "GET",
          }
        );
        if (!response.ok) throw new Error(`HTTPS error! status ${response.status}`);

        const data = await response.json();
        console.log("Fetched settings data:", data);
        setSettings(data);
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading };
};

export default useSettings;