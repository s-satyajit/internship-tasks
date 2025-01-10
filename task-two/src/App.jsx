import React from "react";

function App() {
  return (
    <div className="bg-slate-950 h-screen">
      <nav className="flex justify-between items-center p-4 bg-slate-500">
        <div className="font-bold text-3xl">
          <span className="text-white bg-red-500 px-1 rounded-tr-xl" >Eva</span>
          <span className="text-black ml-1 relative">tril</span>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li className="px-2">Home</li>
          <li className="px-2">About us</li>
          <li className="px-2">Contact us</li>
        </ul>
        <div className="md:hidden">
          <a href="#">&#8801;</a>
        </div>
      </nav>
    </div>
  );
}

export default App;
