import React, { useState, useEffect, createContext } from "react";
import useProducts from "../hooks/useProducts";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { products, loading, addProducts } = useProducts();
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    } catch(error) {
      console.error(`Error passing JSON from local storage`, error)
      return []
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, loading, addProducts, cart, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
