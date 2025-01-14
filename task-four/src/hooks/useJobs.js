import React from "react";
import { useState, useEffect } from "react";

const useJobs = (query) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://api.apijobs.dev/v1/job/search", {
          method: "POST",
          headers: {
            apikey:
              "096b196303a03a58786c4fc09e5830d5640ea75bd5b7454507daa399df7206fa",
            "Content-Type": "application/json",
          },          
          body: JSON.stringify({ q: query }),
          
        });
        const data = await response.json();
        setJobs(data.hits || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [query]);

  return { jobs, loading, error };
};

export default useJobs;
