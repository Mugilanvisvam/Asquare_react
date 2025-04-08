import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CategoryGrid.css";

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    axios
      .get("http://192.168.1.6:5000/categories")
      .then((res) => {
        console.log("CategoriesGrid:", res.data);
        setCategories(res.data);
      })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.id}`, { state: { category } });
  };

  return (
    <div className="container mt-4">
      <h3 className="fw-bold text-start" style={{ color: "#FF9933" }}>
        SHOP BY CATEGORY
      </h3>
      <div className="row">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              key={index}
              className="col-6 col-sm-6 col-md-3 mb-4"
              onClick={() => handleCategoryClick(category)} // Add click event
              style={{ cursor: "pointer" }} // Change cursor to pointer
            >
              <div className="card shadow-sm">
                <img
                  src={`http://192.168.1.6:5000/${category.image_path}`}
                  className="card-img-top"
                  alt={category.name}
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">{category.name}</h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-3">Loading categories...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryGrid;
