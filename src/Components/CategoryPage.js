import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CategoriesCarousel from "./CategoriesCarousel";

const CategoryPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const category = location.state?.category;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.1.6:5000/categories/${id}/products`)
      .then((res) => {
        console.log("Products:", res.data); // Log the fetched products data
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [id]);

  const handleCustomize = (product) => {
    // Handle the "Customize" button click, e.g., open a modal, add to cart, etc.
    console.log(`Customizing product: ${product.name}`);
  };

  return (
    <div className="container">
      <CategoriesCarousel />
      <h2 className="my-4">{category?.name || "Category"}</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card p-3 shadow-sm">
              <img
                src={`http://192.168.1.6:5000/${product.image_path}`}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex flex-wrap mb-2 bg-danger justify-content-center shadow-sm rounded ">
                  <span className="badge badge-primary mr-2">
                    <strong>Net Weight:</strong> {product.net_weight}
                  </span>
                  <span className="badge badge-warning">
                    <strong>Offer:</strong> ₹{product.offer_amount} off
                  </span>
                </div>
                <p className="card-text">
                  <strong>Price:</strong> ₹{product.price}{" "}
                  <span className="text-muted">
                    <del>₹{product.previous_price}</del>
                  </span>
                </p>
                {/* Customize Button */}
                <button
                  className="btn btn-warning"
                  onClick={() => handleCustomize(product)}
                >
                  Customize
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
