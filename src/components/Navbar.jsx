import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navlinks = [
    {
      to:"/dashboard" ,
      text:"Dashboard"
    },
    {
      to:"/investments",
      text:"Investements" 
    },
    {
      to:"/budgeting",
      text:"Budgeting"
    },
    {
      to:"/profile",
      text:"Profile"
    }
  ]

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg py-4 px-8 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          FinTrack 🚀
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
        {
          navlinks.map((nav) => {
            return (
              <Link to={nav.to} className="hover:text-gray-200 transition" key={nav.to}>
                {nav.text}
              </Link>
            );
          })
        }
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
