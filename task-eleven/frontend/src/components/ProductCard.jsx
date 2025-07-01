import { useContext, useState } from "react";
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
    <div className="bg-white/80 shadow-2xl rounded-3xl overflow-hidden flex flex-col h-full min-h-[480px] max-h-[480px] min-w-[320px] max-w-[340px] border-4 border-transparent hover:border-pink-400 transition-all duration-500 group relative animate-fade-in-up">
      {/* Animated Glow & Shine */}
      <div className="absolute -inset-3 bg-gradient-to-br from-blue-200 via-pink-100 to-yellow-100 opacity-0 group-hover:opacity-70 rounded-3xl blur-2xl transition-opacity duration-500 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 rounded-full blur-lg opacity-60 animate-shine"></div>
        <div className="absolute right-2 bottom-2 w-8 h-8 bg-pink-200 rounded-full blur-2xl opacity-40 animate-float-slow"></div>
        <div className="absolute left-2 top-2 w-6 h-6 bg-blue-200 rounded-full blur-2xl opacity-40 animate-float-slower"></div>
      </div>
      <div className="relative flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-44 object-cover rounded-t-3xl border-b-4 border-blue-400 shadow-md hover:shadow-2xl transition-shadow duration-300 animate-zoom-in"
        />
        <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-400 to-indigo-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce z-20">
          NEW
        </div>
        <div className="absolute top-3 right-3 bg-white/90 text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-md border border-blue-200 flex items-center gap-1 animate-fade-in">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
          ${product.price}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow z-20">
        <h2 className="text-2xl font-extrabold mb-2 drop-shadow-sm truncate animate-gradient-x bg-gradient-to-r from-blue-700 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-4 flex-grow line-clamp-3 text-base font-medium animate-fade-in">
          {product.description}
        </p>
        <div className="flex flex-col gap-2 mb-4 mt-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-2 py-1 shadow-inner animate-fade-in">
              <button
                onClick={handleDecreaseQuantity}
                className="bg-gradient-to-r from-gray-200 to-gray-300 text-blue-700 px-2 py-1 rounded-l-lg hover:bg-blue-200 font-bold text-lg transition"
              >
                -
              </button>
              <span className="px-4 py-1 text-lg font-bold text-blue-700 bg-white rounded shadow-inner">
                {quantity}
              </span>
              <button
                onClick={handleIncreaseQuantity}
                className="bg-gradient-to-r from-gray-200 to-gray-300 text-blue-700 px-2 py-1 rounded-r-lg hover:bg-blue-200 font-bold text-lg transition"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-5 py-2 rounded-xl font-bold shadow-lg hover:scale-110 hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 flex items-center gap-2 animate-bounce-short border-2 border-transparent hover:border-yellow-300"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" /></svg>
              Add to Cart
            </button>
          </div>
          <div className="flex justify-between gap-2">
            <button className="flex-1 bg-gradient-to-r from-green-400 to-blue-400 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition-all duration-300 animate-fade-in">
              Buy Now
            </button>
            <button className="flex-1 bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition-all duration-300 animate-fade-in">
              Wishlist
            </button>
          </div>
        </div>
        {/* Items in Cart (if any) */}
        {product.inCart && (
          <div className="mt-2 flex items-center gap-2 text-green-600 font-bold animate-pulse animate-fade-in">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Added to Cart!
          </div>
        )}
      </div>
      {/* Bottom Glow Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 rounded-full blur-lg opacity-60 animate-glow z-10"></div>
    </div>
  );
};

export default ProductCard;
