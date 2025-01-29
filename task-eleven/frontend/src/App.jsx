import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router"
import AppLayout from "./layout/app-layout";
import DisplayProduct from "./pages/DisplayProducts";
import Cart from "./pages/Cart";

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <AppLayout />,
      children: [
        {path: '/', element: <DisplayProduct />},
        {path: 'cart', element: <Cart />}
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;