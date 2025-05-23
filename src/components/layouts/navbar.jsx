import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaSearch, FaShoppingCart, FaUser, FaUserCog, FaBoxOpen, FaUndoAlt, FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      {/* avbar */}
      <div className="border-b  shadow-sm w-full z-10 bg-white sticky top-0 left-0">
        <div className="font-sans py-4 px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* logo */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Exclusive</h1>
          </div>

      
      <div className="w-full md:w-auto">
 
<ul className="text-lg text-gray-800 hidden lg:flex justify-center items-center gap-4">
  {[
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contacts' },
    { label: 'About', path: '/about' },
    { label: 'Sign-Up', path: '/signUp' }
  ].map((item, idx) => (
    <li
      key={idx}
      className="relative group cursor-pointer transition-all duration-300"
    >
      <Link to={item.path}>
        {item.label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
      </Link>
    </li>
  ))}
</ul>
</div>


    
          <div className="flex items-center gap-4 relative">
            <div className="relative w-full md:w-auto">
            <input
      type="text"
      placeholder="What are you looking for?"
      onChange={(e) => onSearch(e.target.value)}
      className="text-gray-600 pl-4 pr-10 py-2 rounded-lg bg-gray-100 focus:outline-none w-full md:w-72"
    />
              <FaSearch className="absolute right-3 top-2.5 text-gray-600" />
            </div>

            <FaHeart size={22} className="text-gray-700 cursor-pointer" />
            
            <div className="relative">
              <FaShoppingCart size={22} className="text-gray-700 cursor-pointer" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">4</span>
            </div>

            {/* Profile Icon */}
            <div onClick={toggleSidebar} className="cursor-pointer">
              <FaUser size={35} className="text-white p-2 bg-red-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {showSidebar && (
  <>
    {/* Backdrop */}
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={toggleSidebar}></div>

    {/* Sidebar */}
    <div className="fixed top-20 right-10 md:right-24 h-64 w-72 bg-gradient-to-tl from-black to-purple-500/80 py-4 px-6 max-w-screen-xl mx-auto rounded-lg shadow-lg p-6 transition-all z-50">
      {/* Close Button */}
      <button onClick={toggleSidebar} className="text-red-500 font-bold float-right">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </button>
      
      {/* Sidebar Menu */}
      <div className="mt-8">
        <ul className="space-y-4 text-white">
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-900 transition">
            <FaUserCog /> Manage My Account
          </li>
          <li className="flex cursor-pointer items-center gap-3 hover:text-gray-900 transition">
            <FaBoxOpen /> My Orders
          </li>
          <li className="flex items-center gap-3 hover:text-gray-900 transition">
            <FaUndoAlt /> My Cancellations
          </li>
          <li className="flex cursor-pointer items-center gap-3 hover:text-gray-900 transition">
            <FaSignOutAlt /> Log Out
          </li>
        </ul>
      </div>
    </div>
  </>
)}

    </>
  );
};

export default Navbar;
