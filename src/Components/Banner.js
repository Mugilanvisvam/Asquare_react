import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import '../Components/Banner.css';
const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios.get("http://192.168.1.6:5000/banner")
      .then(res => {
        console.log("Banner:", res.data);
        setBanner(res.data);
      })
      .catch(err => console.error("Error fetching Banner:", err));
  }, []);

  return (
    <div className="container my-4 banner-container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          {banner.length > 0 && banner[0].image_path ? (
            <img
              src={`http://192.168.1.6:5000/${banner[0].image_path}`}
              className="img-fluid banner-img"
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

export default Banner;
