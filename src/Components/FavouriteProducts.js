import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";

const FavouriteProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://192.168.1.6:5000/products");
        const formattedProducts = res.data.map((product) => ({
          id: product.id,
          name: product.name,
          image: `http://192.168.1.6:5000/${product.image_path}`,
          weight: product.net_weight,
          category: product.category_name,
          benefits: product.benefits,
          originalPrice: product.previous_price,
          discountedPrice: product.price,
          offer: product.offer_amount ? `₹${product.offer_amount} OFF` : null,
          inStock: product.price > 0,
        }));
        console.log('DetailsProduct:',res.data);
        
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    console.log('DetailsProduct:',product);

    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="container my-5">
      <h3 className="fw-bold text-success text-start">FAVOURITE PRODUCTS</h3>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-lg-4 d-flex"
            onClick={() => handleProductClick(product)} // Add click event
            style={{ cursor: "pointer" }}
          >
            <div className="card shadow-sm rounded mb-4 w-100 d-flex flex-column position-relative">
              {product.offer && (
                <span className="badge bg-danger position-absolute top-0 start-0 m-2 px-3 py-2">
                  {product.offer}
                </span>
              )}
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                loading="lazy"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column flex-grow-1">
                <h6 className="text-success">{product.name}</h6>
                <span>Net Weight: {product.weight}</span>
                <div className="mt-2">
                  <span className="text-decoration-line-through text-muted">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-danger fw-bold ms-2">
                    ₹{product.discountedPrice}
                  </span>
                </div>
                <div className="mt-auto">
                  <div className="card-footer bg-white p-0 border-0">
                    {product.inStock ? (
                      <button className="btn btn-warning w-100">
                        <FaShoppingCart className="me-2" /> Add to Cart
                      </button>
                    ) : (
                      <button className="btn btn-outline-secondary w-100" disabled>
                        <FaShoppingCart className="me-2" /> Out Of Stock
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteProducts;
