import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("MacBook");

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        error,
        setError,
        loading,
        setLoading,
        search,
        setSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
