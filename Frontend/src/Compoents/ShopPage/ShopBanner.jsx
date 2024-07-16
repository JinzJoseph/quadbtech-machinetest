import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ShopBanner = () => {
  return (
    <div className="container mx-auto pt-5">
      <div className="relative bg-white w-full">
        <img
          className="object-cover w-full h-80 md:h-96"
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?cs=srgb&dl=pexels-eric-mufasa-578798-1350789.jpg&fm=jpg"
          alt=""
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center   text-black">
          <p className="text-2xl">
            <span className="text-slate-400">Home</span>
            <IoIosArrowForward className="inline-block mt-1 mx-2" />
            <span className="text-black">Shop</span>
          </p>
          <h1 className="text-5xl md:text-6xl font-medium mt-4">Shop Page</h1>
          <p className="text-lg font-semibold mt-2">
            Let's design the place you always imagined
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
