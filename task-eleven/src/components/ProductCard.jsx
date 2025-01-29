import React, { useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useContext(ProductContext);

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? quantity - 1 : 0));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="border p-4 rounded-xl shadow">
      <img src={product.image} className="w-64 h-64 object-cover mb-4" />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="mb-2">
        <strong>Price:</strong> {product.price}
      </p>
      <p className="mb-2">
        <strong>Rating</strong>
        {product.rating.rate}
      </p>
      <p className="mb-2">
        <strong>Items Left:</strong> {product.rating.count}
      </p>
      <p className="mb-2">
        <strong>Description: </strong>
        {product.description}
      </p>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecreaseQuantity}
          className="bg-gray-300 px-2 py-1 cursor-pointer active:bg-gray-900 rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className="bg-gray-300 px-2 py-1 cursor-pointer active:bg-gray-900 rounded"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded active:bg-blue-900 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
