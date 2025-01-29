import React from "react";
import { Outlet } from "outlet";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
