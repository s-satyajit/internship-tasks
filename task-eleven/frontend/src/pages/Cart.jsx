import { useContext } from "react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-pink-100 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative floating shapes and sparkles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-30 blur-3xl animate-float-slow z-0" style={{filter:'blur(80px)', left:'-6rem', top:'-6rem'}}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full opacity-20 blur-3xl animate-float-slower z-0" style={{filter:'blur(100px)', right:'-8rem', bottom:'-8rem'}}></div>
      <div className="absolute left-1/3 top-0 w-8 h-8 bg-yellow-300 rounded-full opacity-70 blur-lg animate-pulse z-0"></div>
      <div className="absolute right-1/4 top-2 w-6 h-6 bg-pink-300 rounded-full opacity-60 blur-md animate-bounce z-0"></div>
      <div className="absolute left-1/2 bottom-2 w-5 h-5 bg-blue-300 rounded-full opacity-60 blur-md animate-bounce z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-800 via-indigo-700 to-pink-700 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x px-6 py-2 rounded-3xl border-4 border-white/40 backdrop-blur-md relative">
          <span className="inline-block align-middle animate-fade-in-up">🛒 Your Cart</span>
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-3xl text-yellow-300 animate-bounce z-10">★</span>
          <span className="absolute -bottom-6 right-10 text-2xl text-pink-400 animate-pulse z-10">✦</span>
          <span className="absolute -bottom-6 left-10 text-2xl text-blue-400 animate-pulse z-10">✦</span>
        </h1>
        {cart.length === 0 ? (
          <div className="text-center text-2xl font-semibold mt-10">Your cart is empty</div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-8">
              {cart.map((product) => (
                <div key={product.id} className="bg-white/90 shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row h-full min-h-[260px] border-4 border-transparent hover:border-pink-400 transition-all duration-500 group relative animate-fade-in-up">
                  {/* Animated Glow & Shine */}
                  <div className="absolute -inset-3 bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100 opacity-0 group-hover:opacity-70 rounded-3xl blur-2xl transition-opacity duration-500 z-0 pointer-events-none"></div>
                  <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 rounded-full blur-lg opacity-60 animate-shine"></div>
                    <div className="absolute right-2 bottom-2 w-8 h-8 bg-pink-200 rounded-full blur-2xl opacity-40 animate-float-slow"></div>
                    <div className="absolute left-2 top-2 w-6 h-6 bg-blue-200 rounded-full blur-2xl opacity-40 animate-float-slower"></div>
                  </div>
                  <div className="w-full md:w-48 h-48 flex-shrink-0 relative flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-3xl border-b-4 border-blue-400 shadow-md hover:shadow-2xl transition-shadow duration-300 animate-zoom-in" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-400 to-indigo-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce z-20">IN CART</div>
                    <div className="absolute top-3 right-3 bg-white/90 text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-md border border-blue-200 flex items-center gap-1 animate-fade-in">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                      ${product.price}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow z-20">
                    <h2 className="text-2xl font-extrabold mb-2 drop-shadow-sm truncate animate-gradient-x bg-gradient-to-r from-blue-700 via-indigo-500 to-pink-500 bg-clip-text text-transparent flex items-center gap-2">
                      {product.name}
                      <span className="text-yellow-400 animate-bounce">★</span>
                    </h2>
                    <p className="text-gray-700 mb-4 flex-grow line-clamp-3 text-base font-medium animate-fade-in">{product.description}</p>
                    <div className="flex flex-col gap-2 mb-4 mt-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-2 py-1 shadow-inner animate-fade-in">
                          <button
                            onClick={() => handleDecreaseQuantity(product)}
                            className="bg-gradient-to-r from-gray-200 to-gray-300 text-blue-700 px-2 py-1 rounded-l-lg hover:bg-blue-200 font-bold text-lg transition"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 text-lg font-bold text-blue-700 bg-white rounded shadow-inner">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => handleIncreaseQuantity(product)}
                            className="bg-gradient-to-r from-gray-200 to-gray-300 text-blue-700 px-2 py-1 rounded-r-lg hover:bg-blue-200 font-bold text-lg transition"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-lg font-semibold flex items-center gap-1">Total: ${(product.price * product.quantity).toFixed(2)} <span className="text-green-500 animate-pulse">✔️</span></span>
                      </div>
                      <div className="flex justify-between gap-2">
                        <button className="flex-1 bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition-all duration-300 animate-fade-in flex items-center gap-1"><span>💳</span>Buy Now</button>
                        <button className="flex-1 bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition-all duration-300 animate-fade-in flex items-center gap-1"><span>💖</span>Wishlist</button>
                        <button className="flex-1 bg-gradient-to-r from-red-400 to-pink-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition-all duration-300 animate-fade-in flex items-center gap-1"><span>🗑️</span>Remove</button>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Glow Bar */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full blur-lg opacity-60 animate-glow z-10"></div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-white/90 shadow-2xl rounded-3xl max-w-lg mx-auto border-4 border-blue-100 animate-fade-in-up flex flex-col items-center gap-4">
              <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-indigo-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x mb-2 flex items-center gap-2">Total Price <span className="text-yellow-400 animate-bounce">★</span></h2>
              <div className="text-2xl font-bold text-center text-blue-700">${calculateTotalPrice()}</div>
              <button className="w-full mt-2 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold text-xl shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 animate-bounce-short flex items-center justify-center gap-2"><span>🛒</span>Checkout</button>
              <button className="w-full py-2 rounded-2xl bg-gradient-to-r from-green-400 to-blue-400 text-white font-bold text-lg shadow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"><span>🎁</span>Apply Coupon</button>
              <button className="w-full py-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-pink-400 text-white font-bold text-lg shadow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"><span>🔄</span>Continue Shopping</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
