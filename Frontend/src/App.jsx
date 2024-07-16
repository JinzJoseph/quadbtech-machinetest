import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/productDetails/" element={<ProductDetails/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>

        
         
      </BrowserRouter>
    </>
  );
}

export default App;
