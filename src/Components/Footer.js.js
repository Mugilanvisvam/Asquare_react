import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* About Section */}
      <div className="container mt-4">
        <div className="p-4 bg-light shadow-sm">
          <h3 className="text-success fw-bold">About Asquare Mart</h3>
          <p>
            Grocery shopping should be convenient, fresh, and hassle-free. At Asquare Mart, we bring you the finest quality groceries, fresh produce, and daily essentials—all under one roof.
            Our commitment is to provide fresh and high-quality products at the best prices. Whether you're looking for fresh vegetables, dairy, or household essentials, Asquare Mart is your one-stop destination.
            Visit us today and experience freshness like never before!
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer bg-dark text-light mt-5 py-4">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-md-3 mb-4">
              <h5>About Us</h5>
              <p>We Asquare Mart deliver good quality and fresh products.</p>
              <p>
                Grocery shopping should be convenient, fresh, and hassle-free. At Asquare Mart, we bring you the finest quality groceries, fresh produce, and daily essentials—all under one roof.
                Our commitment is to provide fresh and high-quality products at the best prices. Whether you're looking for fresh vegetables, dairy, or household essentials, Asquare Mart is your one-stop destination.
                Visit us today and experience freshness like never before!
              </p>
              <div className="social-icons justify-content-center d-flex gap-3">
                <a href="#" className="text-light" aria-label="Facebook">
                  <FaFacebookF className="icon" />
                </a>
                <a href="#" className="text-light" aria-label="Instagram">
                  <FaInstagram className="icon" />
                </a>
                <a href="#" className="text-light" aria-label="YouTube">
                  <FaYoutube className="icon" />
                </a>
                <a href="#" className="text-light" aria-label="Twitter">
                  <FaTwitter className="icon" />
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div className="col-md-3 mb-4">
              <h5>Important Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
                <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              </ul>
            </div>

            {/* More Pages */}
            <div className="col-md-3 mb-4">
              <h5>More Pages</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-light text-decoration-none">Terms and Conditions</a></li>
                <li><a href="#" className="text-light text-decoration-none">Refund/Cancellation Policy</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="col-md-3 mb-4">
              <h5>Contact Us</h5>
              <p><FaMapMarkerAlt className="text-success" /> <span className="text-danger">No 25, ABC Street, XYZ Road, City Name, PIN 123456</span></p>
              <p><FaPhone className="text-success" /> +91 9876543210</p>
              <p><FaEnvelope className="text-success" /> support@asquaremart.com</p>
              <p><FaClock className="text-success" /> Monday - Sunday: 8:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center mt-4">
            <hr className="border-light" />
            <p>© 2025 Asquare Mart, All rights reserved by XYZ RETAIL PVT LTD</p>
            <p>Website Developed by <span className="text-danger">ABC Technologies</span></p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
