import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./BottomBanner.css"; // Import the new CSS

const BottomBanner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.6:5000/bannerbottom")
      .then((res) => {
        console.log("Bannerbottom:", res.data);
        setBanner(res.data); // API returns an array
      })
      .catch((err) => console.error("Error fetching BannerBottom:", err));
  }, []);

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          {banner.length > 0 && banner[0].image_path ? (
            <img
              src={`http://192.168.1.6:5000/${banner[0].image_path}`}
              className="img-fluid rounded shadow bottom-banner"
              alt="Deal of the Day"
            />
          ) : (
            <p className="text-center">Loading banner...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
