import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-800 to-pink-700 text-white py-6 px-2 shadow-2xl relative overflow-visible border-t-4 border-yellow-300 ">
      {/* Decorative floating shapes */}
      <div
        className="absolute left-0 top-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 blur-3xl animate-float-slow z-0"
        style={{ filter: "blur(40px)", left: "-2rem", top: "-2rem" }}
      ></div>
      <div
        className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full opacity-10 blur-3xl animate-float-slower z-0"
        style={{ filter: "blur(60px)", right: "-2rem", bottom: "-2rem" }}
      ></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
        <div className="flex items-center gap-3 relative">
          <span className="inline-block animate-spin-slow">
            <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
          </span>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-gradient-x relative">
            Urban Cart
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xl text-yellow-300 animate-bounce z-10">★</span>
          </span>
        </div>
        <nav>
          <ul className="flex flex-wrap space-x-4 items-center text-base">
            <li><Link className="hover:text-yellow-300 font-semibold transition flex items-center gap-1" to="/">🏠 Home</Link></li>
            <li><Link className="hover:text-pink-300 font-semibold transition flex items-center gap-1" to="/cart">🛒 Cart</Link></li>
            <li><Link className="hover:text-blue-300 font-semibold transition flex items-center gap-1" to="/products">🛍️ Products</Link></li>
            <li><Link className="hover:text-green-300 font-semibold transition flex items-center gap-1" to="/wishlist">💖 Wishlist</Link></li>
            <li><Link className="hover:text-indigo-300 font-semibold transition flex items-center gap-1" to="/orders">📦 Orders</Link></li>
            <li><Link className="hover:text-purple-300 font-semibold transition flex items-center gap-1" to="/profile">👤 Profile</Link></li>
            <li><Link className="hover:text-orange-300 font-semibold transition flex items-center gap-1" to="/about">ℹ️ About</Link></li>
            <li><Link className="hover:text-cyan-300 font-semibold transition flex items-center gap-1" to="/contact">📞 Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <span className="bg-white/30 text-yellow-900 font-bold rounded-full px-3 py-1 shadow-inner text-lg">S</span>
          <span className="font-bold text-white">Satyajit</span>
        </div>
      </div>
      <div className="text-center text-sm text-white/70 mt-6 z-10 relative">
        &copy; {new Date().getFullYear()} Urban Cart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
