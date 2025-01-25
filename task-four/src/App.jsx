import React, { useState } from "react";
import JobsDisplay from "./components/jobsDisplay";
import EmailPage from "./components/EmailPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <JobsDisplay setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <EmailPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default App;
