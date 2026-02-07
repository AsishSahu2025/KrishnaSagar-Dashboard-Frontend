import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaBars, FaHome, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/imgs/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();

  // Function to close sidebar after clicking a menu item (only on mobile)
  const handleMenuClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Floating Menu Button (Top-left) */}
      <button
        onClick={toggleSidebar}
        className="fixed top-19 left-1 z-50 p-2 rounded-full text-gray-700 focus:outline-none md:hidden"
        aria-label="Toggle sidebar"
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-40 bg-[#fffbfb] shadow-lg flex flex-col items-center py-10
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:flex
          w-48
          z-[2000]
        `}
      >
        {/* Close Button for Mobile */}
        <div className="w-full flex justify-end px-4 mb-6 md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 text-2xl focus:outline-none"
            aria-label="Close sidebar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-4xl border-2 border-blue-500">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-4xl border overflow-hidden">
              <img
                src={logo}
                alt="Logo"
                // className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-black">Bfl Labs</p>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start mt-6 gap-2 w-full px-4">
          <Link
            to="/masterpage/PondDetails"
            className="flex items-center gap-3 text-black hover:bg-gray-200 p-2 rounded-md w-full"
            onClick={handleMenuClick}
          >
            <FaHome className="text-xl flex" />
            <span>Location Info</span>
          </Link>

          <Link
            to="/masterpage/contactdetails"
            className="flex items-center gap-3 text-black hover:bg-gray-200 p-2 rounded-md w-full"
            onClick={handleMenuClick}
          >
            <FaPhoneAlt className="text-lg" />
            <span>Contact details</span>
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-[999] md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
