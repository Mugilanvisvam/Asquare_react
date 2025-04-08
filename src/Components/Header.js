import React, { useState,useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaBars, FaWhatsapp, FaUser, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Sidebar from "./Sidebar";
import { CartContext } from "./CartContext"; // Import CartContext

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cart } = useContext(CartContext); // Get cart state

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="left-links hide-on-mobile">
          <span>Download Our App: <i className="android-icon">🤖</i></span>
          <a href="/support">Support</a>
          <a href="/offers">Offers</a>
          <a href="/storelocators">Store Locators</a>
          <a href="/ordertracking">Order Tracking</a>
        </div>
        <div className="right-info">
          <span><FaWhatsapp className="whatsapp-icon" /> 9876543210</span>
          <span className="delivery-info">🚚 120 Minutes Delivery</span>
        </div>
      </div>

      {/* Navbar */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand href="#" className="logo">
            <span className="asquare-mart-title">Asquare mart</span>
          </Navbar.Brand>

          {/* Toggle Sidebar on Mobile Click */}
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            aria-label="Toggle navigation menu" 
            onClick={toggleSidebar} 
          />

          {/* Hide Navbar Collapse in Mobile & Tablet View */}
          <Navbar.Collapse id="navbar-nav" className="hide-on-mobile">
            <Nav className="ms-auto nav-icons">
              <Nav.Link href="#" aria-label="Search"><FaSearch /> <span className="nav-text">Search</span></Nav.Link>
              
              <Nav.Link href="/login" className="hide-on-mobile" aria-label="Sign In">
                <FaUser /> <span className="nav-text">Sign In</span>
              </Nav.Link>

              <Nav.Link href="/cart" className="cart-link hide-on-mobile" aria-label="Cart">
                <FaShoppingCart /> 
                <span className="nav-text">Cart</span>
                <span className="cart-count">{cart.length}</span> {/* Show cart count */}
              </Nav.Link>
              <Nav.Link onClick={toggleSidebar} className="menu-toggle">
                {sidebarOpen ? <FaTimes /> : <FaBars />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar Component */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
