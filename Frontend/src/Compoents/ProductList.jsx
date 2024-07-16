import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <>
      <div className="container mx-auto  pt-5 flex gap-5   overflow-x-auto translate-all relative scrollbar-none mb-8">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <hr className=" container   justify-center mx-auto  mt-3  w-full   border-b-1 border-black " />
    </>
  );
};

export default ProductList;
