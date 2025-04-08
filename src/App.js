import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.js";
import CategoriesCarousel from "./Components/CategoriesCarousel.js";
import CategoryGrid from "./Components/CategoryGrid.js";
import Banner from "./Components/Banner.js";
import FavouriteProducts from "./Components/FavouriteProducts.js";
import CertificateBanner from "./Components/CertificateBanner.js";
import Footer from "./Components/Footer.js";
import BottomBanner from "./Components/BottomBanner.js";
import CategoryPage from "./Components/CategoryPage.js";
import ProductDetails from "./Components/ProductDetails.js";
import LoginCreateAccount from "./Pages/LoginCreateAccount.js";
import Cart from "./Components/Cart.js";
function App() {
  return (
    <Router> {/* ✅ Wrap everything inside <Router> */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<> 
            <CategoriesCarousel />
            <Banner />
            <CategoryGrid />
            <BottomBanner />
            <FavouriteProducts />
          </>} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:name" element={<ProductDetails />} />
          <Route path="/login" element={<LoginCreateAccount />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <CertificateBanner /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
