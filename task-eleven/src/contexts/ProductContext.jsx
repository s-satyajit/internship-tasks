import React, { useState, createContext } from "react";
import useProducts from "../hooks/useProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { products, loading, addProducts } = useProducts();

  return (
    <ProductContext.Provider value={{ products, loading, addProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
