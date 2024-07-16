import React from "react";
import Product from "../Product";

const ShopProductList = () => {
  return (
    <div className="container mx-auto pt-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ml-3 mr-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        {/* Add more Product components as needed */}
      </div>
      <div className="text-center mt-8 mb-4">
        <button className="border border-gray-300 rounded-full px-8 py-2 text-lg font-semibold bg-white text-black shadow-md hover:bg-gray-100 hover:border-gray-400 transition duration-300 ease-in-out">
          Show More
        </button>
      </div>
    </div>
  );
};

export default ShopProductList;
