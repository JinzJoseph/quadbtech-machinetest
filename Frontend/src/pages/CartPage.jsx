import React from "react";
import NavBar from "../Compoents/NavBar";
import CartSection from "../Compoents/CartSection";
import CouponSection from "../Compoents/CouponSection";
import Footer from"../Compoents/Footer"
const CartPage = () => {
  return (
    <div className="max-h-screen">
      <NavBar />
      <div className="container mx-auto pt-5">
        <h1 className="text-4xl font-semibold text-black text-center mt-14">
          Cart
        </h1>
        <div className="flex justify-between mt-10 items-center gap-10">
          <div className="flex items-center justify-center gap-2">
            <p className="bg-black text-white rounded-full px-2 py-1 text-center">
              1
            </p>
            <h4 className="text-xl text-black font-semibold">
              Shopping Cart
            </h4>
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="bg-gray-200 text-gray-500 rounded-full px-2 py-1 text-center">
              2
            </p>
            <h4 className="text-xl text-gray-500 font-semibold">
              Checkout Details
            </h4>
          </div>

          <div className="flex items-center justify-center gap-2">
            <p className="bg-gray-200 text-gray-500 rounded-full px-2 py-1 text-center">
              3
            </p>
            <h4 className="text-xl text-gray-500 font-semibold">
              Order Complete
            </h4>
          </div>
        </div>
      </div>
      <CartSection/>
      <CouponSection/>
      <Footer/>
    </div>
  );
};

export default CartPage;
