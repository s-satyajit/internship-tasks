import React, { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-slate-950 h-screen">
      <nav className="flex justify-between items-center p-4 bg-slate-500">
        <div className="font-bold text-3xl hover:cursor-pointer">
          <span className="text-white bg-red-500 px-1 rounded-tr-xl">Eva</span>
          <span className="text-black ml-1 relative">tril</span>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li className="px-2">Home</li>
          <li className="px-2">About us</li>
          <li className="px-2">Contact us</li>
        </ul>
        
          <div className="md:hidden text-3xl font-bold tracking-widest">
          <button onClick={toggleMenu}>&#8801;</button>
        </div>
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <li className="px-2">Home</li>
            <li className="px-2">About us</li>
            <li className="px-2">Contact us</li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default App;
