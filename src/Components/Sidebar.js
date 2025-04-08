import React, { useState } from "react";
import { FaTimes, FaHome, FaHeart, FaEdit, FaUser, FaAngleDown } from "react-icons/fa";
import "./Sidebar.css";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom'; 

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const [moreOpen, setMoreOpen] = useState(false); 

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Asquare Mart</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
        </div>

        <nav className="sidebar-menu">
          <a href="/"><FaHome /> Home</a>
          <a href="#"><FaHeart /> About Us</a>
          <a href="#"><FaEdit /> Contact Us</a>
          <a href="#"><FaCartShopping /> Cart</a>

          {/* More Dropdown (Only for Mobile & Tablet) */}
          <div className="more-menu" onClick={() => setMoreOpen(!moreOpen)}>
            <a href="#" className="more-toggle">
              <FaUser /> More <FaAngleDown className={`arrow-icon ${moreOpen ? "open" : ""}`} />
            </a>
            {moreOpen && (
              <div className="dropdown-menu">
                <a href="/support">Support</a>
                <a href="/offers">Offers</a>
                <a href="/storelocators">Store Locators</a>
                <a href="/ordertracking">Order Tracking</a>
              </div>
            )}
          </div>
          <a href="/login"><FaUser /> Sign In</a>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
