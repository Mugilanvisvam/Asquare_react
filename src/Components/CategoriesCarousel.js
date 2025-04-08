import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import axios from "axios";
import "./CategoriesCarousel.css"; // Import custom styles
import { useNavigate } from "react-router-dom";

const CategoriesCarousel = () => {
  const navigate = useNavigate(); // Add this line
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios.get("http://192.168.1.6:5000/categories")
      .then(res => {
        console.log("Categories:", res.data);
        setCategories(res.data);
      })
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.id}`, { state: { category } });
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="position-relative container">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="btn btn-light position-absolute start-0 top-50 translate-middle-y shadow rounded-circle"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Scrollable Categories List */}
      <div
        ref={scrollRef}
        className="d-flex overflow-auto gap-3 px-5 py-3 custom-scroll"
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
      >
        {categories.map((category) => (
          <div key={category.id}
            onClick={() => handleCategoryClick(category)}
            className="d-flex flex-column align-items-center p-2 bg-white shadow rounded"
            style={{ width: "143px" }}>
            <img
              className="category-img"
              src={`http://192.168.1.6:5000/${category.image_path}`}
              alt={category.name}
              width="120"
              height="120"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
            <p className="small fw-bold text-dark mt-2">{category.name}</p>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="btn btn-light position-absolute end-0 top-50 translate-middle-y shadow rounded-circle"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CategoriesCarousel;
