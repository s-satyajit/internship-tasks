import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container flex justify-between mx-auto items-center">
                <h1 className="text-xl font-bold">E-Commerce Platform</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/cart'>Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;