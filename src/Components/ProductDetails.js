import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";
import CategoriesCarousel from "./CategoriesCarousel";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  if (!product) return <h2 className="text-center mt-5">Product Not Found</h2>;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAddToCartClick = () => {
    setShowQuantitySelector(true);
  };

  const handleConfirmAddToCart = () => {
    addToCart(product, quantity);
    // navigate("/cart"); // ✅ navigate to cart after adding
  };

  return (
    <div className="container">
      <CategoriesCarousel />
      <h2 className="my-4">{product?.category || "Category"}</h2>
      <div className="d-flex justify-content-center my-5">
        <div className="card shadow-lg rounded-4 overflow-hidden" style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-6 d-flex align-items-center bg-light">
              <img src={product.image} alt={product.name} className="img-fluid rounded-start w-100" style={{ maxHeight: "400px", objectFit: "cover" }} />
            </div>
            <div className="col-md-6">
              <div className="card-body d-flex flex-column justify-content-between h-100">
                <div>
                  <h3 className="fw-bold text-success">{product.name}</h3>
                  <h4 className="text-danger fw-bold">₹{product.discountedPrice}</h4>
                  <p className="text-decoration-line-through text-muted">₹{product.originalPrice}</p>

                  {showQuantitySelector && (
                    <div className="d-flex justify-content-center mt-3">
                      <button className="btn btn-outline-danger fw-bold" onClick={handleDecrease}>−</button>
                      <span className="mx-3 fs-5">{quantity}</span>
                      <button className="btn btn-outline-success fw-bold" onClick={handleIncrease}>+</button>
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  {product.inStock ? (
                    showQuantitySelector ? (
                      <button className="btn btn-warning w-100 py-2 fw-bold" onClick={handleConfirmAddToCart}>
                        <FaShoppingCart className="me-2" /> Add {quantity} to Cart
                      </button>
                    ) : (
                      <button className="btn btn-warning w-100 py-2 fw-bold" onClick={handleAddToCartClick}>
                        <FaShoppingCart className="me-2" /> Add to Cart
                      </button>
                    )
                  ) : (
                    <button className="btn btn-outline-secondary w-100 py-2" disabled>
                      <FaShoppingCart className="me-2" /> Out Of Stock
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
