import React from "react";
import TopSection from "../Compoents/TopSection";
import NavBar from "../Compoents/NavBar";
import ShopBanner from "../Compoents/ShopPage/ShopBanner";
import ShopSection1 from "../Compoents/ShopPage/ShopSection1";
import ShopProductList from "../Compoents/ShopPage/ShopProductList";
import NewsLetter from "../Compoents/NewsLetter";
import Footer from "../Compoents/Footer";

const ShopPage = () => {
  return (
    <div className="h-screen">
      <TopSection />
      <NavBar />
      <ShopBanner/>
      <ShopSection1/>
      <ShopProductList/>
      <NewsLetter/>
      <Footer/>

    </div>
  );
};

export default ShopPage;
