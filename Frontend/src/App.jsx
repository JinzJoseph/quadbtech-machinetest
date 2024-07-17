import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import AdminPanel from "./pages/Admin/AdminPanel";
import EditProduct from "./pages/Admin/EditProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage/>}/>
          <Route path="/productDetails/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/admin" element={<AdminPanel/>}/>
       <Route path="/admin/edit/:id" element={<EditProduct/>}/>
        </Routes>

        
         
      </BrowserRouter>
    </>
  );
}

export default App;
