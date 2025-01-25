import React from "react";
import useJobs from "../hooks/useJobs";

const JobsDisplay = ({ setIsLoggedIn }) => {
  const { jobs, loading, error } = useJobs("Reactjs");

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-full bg-slate-900 text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold">Job Listings</h1>
        <button
          onClick={handleLogout}
          className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold mb-2 text-yellow-400">
                {job.title}
              </h2>
              <p className="text-gray-400 mb-4">{job.description}</p>
              <div className="text-sm text-gray-500">
                <p>
                  <span className="font-semibold text-gray-300">
                    Created At:
                  </span>{" "}
                  {new Date(job.created_at).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Domain:</span>{" "}
                  {job.domain}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">ID:</span>{" "}
                  {job.id}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Language:</span>{" "}
                  {job.language}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Status:</span>{" "}
                  {job.status}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">
                    Published Since:
                  </span>{" "}
                  {new Date(job.published_since).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">
                    Published Until:
                  </span>{" "}
                  {new Date(job.published_until).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-semibold text-gray-300">Website:</span>{" "}
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {job.website_name}
                  </a>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobsDisplay;
