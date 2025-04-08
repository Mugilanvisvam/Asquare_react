import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CertificateBanner.css"
const CertificateBanner = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left: Certificate Banner */}
        <div className="col-md-9">
          <div className="certificate-card p-4 text-center position-relative">
            <h5 className="fw-bold text-warning mb-2">CERTIFICATE</h5>
            <h2 className="fw-bold text-gold">WE LIKE TO SHOW OUR CERTIFICATE</h2>
            <button className="btn btn-success mt-3 fw-bold">
              CLICK HERE <span role="img" aria-label="click">👉</span>
            </button>
            <div className="seal">
              <img src="/path-to-seal.png" alt="Certificate Seal" className="seal-image" />
            </div>
          </div>
        </div>

        {/* Right: App Promotion */}
        <div className="col-md-3 text-center">
          <h4 className="text-success fw-bold">Experience The Freshness</h4>
          <img src="/path-to-app-image.png" alt="Mobile App" className="img-fluid my-3" />
          <div className="d-flex flex-column">
            <a href="#" className="mb-2">
              <img src="/path-to-google-play.png" alt="Google Play" className="store-badge" />
            </a>
            <a href="#">
              <img src="/path-to-app-store.png" alt="App Store" className="store-badge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateBanner;
