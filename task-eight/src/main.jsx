import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WeatherContext from "./context/WeatherContext.js";
import WeatherContextProvider from "./context/WeatherContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <WeatherContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </WeatherContextProvider>
);
