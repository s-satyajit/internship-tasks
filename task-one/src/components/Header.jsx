import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto px-6 shadow-lg shadow-black bg-white ">
      <div className="flex justify-between py-8">
        <div>
          <h2 className="text-red-600"><span className="font-bold text-3xl">mandap</span>.com</h2>
          <p className="text-gray-700">from matrimony.com group</p>
        </div>
        <div className="flex items-center">
          <button className="mx-4">Search</button>
          <button className="mx-4">List your venue</button>
          <button className="mx-4">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Header;