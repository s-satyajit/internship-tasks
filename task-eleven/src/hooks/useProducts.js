import React, { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(`Error fetching products: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const addProducts = async (newProduct) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      setProducts((prevProducts) => [...prevProducts, data]);
    } catch (error) {
      console.error(`Error adding product: ${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, addProducts };
};

export default useProducts;
