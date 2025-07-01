import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-pink-700 text-white py-4 px-2 shadow-2xl sticky top-0 z-50 animate-fade-in overflow-visible">
      {/* Decorative floating shapes */}
      <div
        className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-30 blur-3xl animate-float-slow z-0"
        style={{ filter: "blur(60px)", left: "-3rem", top: "-3rem" }}
      ></div>
      <div
        className="absolute right-0 bottom-0 w-56 h-56 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full opacity-20 blur-3xl animate-float-slower z-0"
        style={{ filter: "blur(80px)", right: "-4rem", bottom: "-4rem" }}
      ></div>
      <div className="container flex justify-between mx-auto items-center relative z-10">
        <div className="flex items-center gap-4 relative">
          <span className="inline-block animate-spin-slow">
            <svg
              className="w-8 h-8 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
            </svg>
          </span>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-gradient-x relative">
            Urban Cart
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl text-yellow-300 animate-bounce z-10">
              ★
            </span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                className="hover:text-yellow-300 font-semibold transition flex items-center gap-1"
                to="/"
              >
                <span>🏠</span>Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-pink-300 font-semibold transition flex items-center gap-1"
                to="/cart"
              >
                <span>🛒</span>Cart
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-blue-300 font-semibold transition flex items-center gap-1"
                to="/products"
              >
                <span>🛍️</span>Products
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-green-300 font-semibold transition flex items-center gap-1"
                to="/wishlist"
              >
                <span>💖</span>Wishlist
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-indigo-300 font-semibold transition flex items-center gap-1"
                to="/orders"
              >
                <span>📦</span>Orders
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-purple-300 font-semibold transition flex items-center gap-1"
                to="/profile"
              >
                <span>👤</span>Profile
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-orange-300 font-semibold transition flex items-center gap-1"
                to="/about"
              >
                <span>ℹ️</span>About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-cyan-300 font-semibold transition flex items-center gap-1"
                to="/contact"
              >
                <span>📞</span>Contact
              </Link>
            </li>
            <li>
              <button className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-extrabold shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-bounce-short border-2 border-white/20">
                <span className="bg-white/30 text-yellow-900 font-bold rounded-full px-3 py-1 shadow-inner text-lg">S</span>
                Hello, Satyajit
              </button>
            </li>
          </ul>
        </nav>
        {/* Floating Cart Icon */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Link to="/cart" className="relative">
            <svg
              className="w-8 h-8 text-yellow-300 drop-shadow-lg animate-bounce"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.9-1.45L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
