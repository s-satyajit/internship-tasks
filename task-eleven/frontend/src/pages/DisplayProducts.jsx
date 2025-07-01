import { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../contexts/ProductContext";

const DisplayProduct = () => {
  const { products, loading } = useContext(ProductContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-indigo-200 animate-pulse">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500 shadow-2xl"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-12 h-12 text-indigo-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
      <p className="mt-8 text-2xl font-bold text-blue-700 animate-fade-in">Loading Products...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-30 blur-3xl animate-float-slow z-0" style={{filter:'blur(80px)', left:'-6rem', top:'-6rem'}}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-float-slower z-0" style={{filter:'blur(100px)', right:'-8rem', bottom:'-8rem'}}></div>

      <div 
        className={`relative z-10 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-16 relative flex flex-col items-center justify-center">
          {/* Animated Sparkles and Confetti */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex gap-2 z-20">
            <span className="animate-ping inline-flex h-6 w-6 rounded-full bg-pink-400 opacity-75"></span>
            <span className="animate-pulse inline-flex h-4 w-4 rounded-full bg-blue-400 opacity-75"></span>
            <span className="animate-bounce inline-flex h-5 w-5 rounded-full bg-yellow-300 opacity-80"></span>
            <span className="animate-bounce inline-flex h-3 w-3 rounded-full bg-green-400 opacity-80 delay-200"></span>
            <span className="animate-pulse inline-flex h-2 w-2 rounded-full bg-purple-400 opacity-80 delay-300"></span>
          </div>
          {/* Neon Glow Border */}
          <div className="absolute inset-0 mx-auto w-2/3 h-32 rounded-3xl bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-300 blur-2xl opacity-40 animate-glow z-0"></div>
          <h1 className="relative text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-500 to-pink-500 drop-shadow-2xl tracking-tight animate-gradient-x shadow-2xl px-8 py-4 rounded-3xl border-8 border-white/30 backdrop-blur-md z-10 flex items-center justify-center gap-4">
            {/* Left Icon */}
            <span className="inline-block align-middle animate-fade-in-up">
              <svg className="inline-block w-12 h-12 text-yellow-400 mr-2 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.993.883L11 3v1a1 1 0 01-1.993.117L9 4V3a1 1 0 011-1zm4.221 2.221a1 1 0 011.32-.083l.094.083.707.707a1 1 0 01-1.32 1.497l-.094-.083-.707-.707a1 1 0 010-1.414zm4.779 5.779a1 1 0 01.117 1.993L19 10h-1a1 1 0 01-.117-1.993L18 8h1zm-2.221 6.221a1 1 0 01.083 1.32l-.083.094-.707.707a1 1 0 01-1.497-1.32l.083-.094.707-.707a1 1 0 011.414 0zM10 16a1 1 0 01.993.883L11 17v1a1 1 0 01-1.993.117L9 18v-1a1 1 0 011-1zm-6.221-2.221a1 1 0 01.083 1.32l-.083.094-.707.707a1 1 0 01-1.497-1.32l.083-.094.707-.707a1 1 0 011.414 0zM4 10a1 1 0 01.117 1.993L4 12H3a1 1 0 01-.117-1.993L3 10h1zm2.221-6.221a1 1 0 01.083 1.32l-.083.094-.707.707a1 1 0 01-1.497-1.32l.083-.094.707-.707a1 1 0 011.414 0z"/></svg>
            </span>
            <span className="inline-block animate-jump-in">Our Premium Products</span>
            {/* Right Icon */}
            <span className="inline-block align-middle animate-fade-in-up">
              <svg className="inline-block w-12 h-12 text-pink-400 ml-2 animate-spin-reverse-slow" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.993.883L11 3v1a1 1 0 01-1.993.117L9 4V3a1 1 0 011-1zm4.221 2.221a1 1 0 011.32-.083l.094.083.707.707a1 1 0 01-1.32 1.497l-.094-.083-.707-.707a1 1 0 010-1.414zm4.779 5.779a1 1 0 01.117 1.993L19 10h-1a1 1 0 01-.117-1.993L18 8h1zm-2.221 6.221a1 1 0 01.083 1.32l-.083.094-.707.707a1 1 0 01-1.497-1.32l.083-.094.707-.707a1 1 0 011.414 0zM10 16a1 1 0 01.993.883L11 17v1a1 1 0 01-1.993.117L9 18v-1a1 1 0 011-1zm-6.221-2.221a1 1 0 01.083 1.32l-.083.094-.707.707a1 1 0 01-1.497-1.32l.083-.094.707-.707a1 1 0 011.414 0zM4 10a1 1 0 01.117 1.993L4 12H3a1 1 0 01-.117-1.993L3 10h1zm2.221-6.221a1 1 0 01.083 1.32l-.083.094-.707.707a1 1 0 01-1.497-1.32l.083-.094.707-.707a1 1 0 011.414 0z"/></svg>
            </span>
            {/* Confetti */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl text-yellow-300 animate-bounce z-10">★</span>
            <span className="absolute -bottom-8 right-16 text-3xl text-pink-400 animate-pulse z-10">✦</span>
            <span className="absolute -bottom-8 left-16 text-3xl text-blue-400 animate-pulse z-10">✦</span>
            <span className="absolute -top-8 right-24 text-2xl text-green-400 animate-bounce z-10">✺</span>
            <span className="absolute -top-8 left-24 text-2xl text-purple-400 animate-bounce z-10">✺</span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-2xl mx-auto font-medium animate-fade-in mt-6">
            Discover our handpicked collection of exceptional items, crafted for you.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 perspective-1000">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="flex items-stretch justify-center"
                style={{ perspective: '1200px', animationDelay: `${idx * 60}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
