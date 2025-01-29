import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Cart = () => {
  const { cart, addToCart } = useContext(ProductContext);

  const handleIncreaseQuantity = (product) => {
    addToCart(product, 1);
  };

  const handleDecreaseQuantity = (product) => {
    if (product.quantity > 1) {
      addToCart(product, -1);
    }
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-2xl font-semibold mt-10">Your cart is empty</div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {cart.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48 flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-blue-600">${product.price}</span>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecreaseQuantity(product)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l hover:bg-gray-400 active:scale-95 transition-transform duration-150"
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{product.quantity}</span>
                      <button
                        onClick={() => handleIncreaseQuantity(product)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r hover:bg-gray-400 active:scale-95 transition-transform duration-150"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total: ${(product.price * product.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center">Total Price: ${calculateTotalPrice()}</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
