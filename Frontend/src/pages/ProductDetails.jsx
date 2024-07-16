import React from "react";
import TopSection from "../Compoents/TopSection";
import NavBar from "../Compoents/NavBar";
import { IoIosArrowForward } from "react-icons/io";
import ProductSection from "../Compoents/ProductDetails/ProductSection";
const ProductDetails = () => {
  return (
    <div className="h-screen">
      <TopSection />
      <NavBar />
      <div className="h-[5%] container mx-auto pt-5 justify-start">
        <div className=" font-serif  flex">
          <p className="flex items-center gap-3">
            Home <IoIosArrowForward className="w-3 h-3 text-black" />{" "}
          </p>
          <p className="flex items-center gap-3">
            shop <IoIosArrowForward className="w-3 h-3 text-black" />
          </p>
          <p className="flex items-center gap-3">
            Living Room <IoIosArrowForward className="w-3 h-3 text-black" />
          </p>
          <p className="flex items-center gap-3">Product </p>
        </div>
      </div>
      <ProductSection/>
    </div>
  );
};

export default ProductDetails;
