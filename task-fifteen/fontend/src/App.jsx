import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import Home from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { path: "blog", element: <BlogPage /> },
        { path: "home", element: <Home /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
