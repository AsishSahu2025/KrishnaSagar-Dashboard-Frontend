import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Masterpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
  // Automatically close sidebar on mobile
  return window.innerWidth >= 768; // open on desktop, closed on mobile
});


  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-grow min-w-0">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-2 flex-grow bg-gray-50">
          <Outlet /> {/* Renders PondDetails, ContactDetails, etc. */}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Masterpage;
