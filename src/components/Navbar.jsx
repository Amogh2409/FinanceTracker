import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg py-4 px-8 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          FinTrack 🚀
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link>
          <Link to="/investments" className="hover:text-gray-200 transition">Investments</Link>
          <Link to="/budgeting" className="hover:text-gray-200 transition">Budgeting</Link>
          <Link to="/profile" className="hover:text-gray-200 transition">Profile</Link>
        </div>

        {/* Login Button */}
        <Link to="/login" className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
