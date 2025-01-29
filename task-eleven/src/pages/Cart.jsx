import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Cart = () => {
  const { cart, addToCart } = useContext(ProductContext);

  const handleIncreaseQuantity = (product) => {
    addToCart(product, 1)
  }

  const handleDecreaseQuantity = (product) => {
    if(product.quantity > 0)
        addToCart(product, -1)
  }

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => (total + item.price * item.quantity), 0).toFixed(2)
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      {cart.length === 0 ? (
        <div>Your Cart is Empty</div>
      ) : (
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow-2xl">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p>
                <strong>Price: </strong>${item.price}
              </p>
              <p>
                <strong>Total Price: </strong>${(item.price * item.quantity).toFixed(2)}
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecreaseQuantity(item)}
                  className="bg-gray-300 px-2 py-1 active:bg-gray-900 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQuantity(item)}
                  className="bg-gray-300 px-2 py-1 active:bg-gray-900 rounded"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 justify-items-end">
        <h3 className="text-xl font-bold">Total Price: ${calculateTotalPrice()}</h3>
        <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Proceed to Pay</button>
      </div>
    </div>
  );
};

export default Cart;
