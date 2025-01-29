import React, { useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(ProductContext);

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg border-b-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        <div className="absolute bottom-0 left-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-tr-lg">
          New
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-blue-600">${product.price}</span>
          <div className="flex items-center">
            <button
              onClick={handleDecreaseQuantity}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-400"
            >
              -
            </button>
            <span className="px-4 py-1">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
