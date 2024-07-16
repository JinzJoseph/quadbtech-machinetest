import React from "react";

const HomeSection4 = () => {
  return (
    <div className="w-full flex h-[35%] bg-slate-300 mx-auto mt-8">
      <div className="w-1/2">
        <img
          src="https://media.glamourmagazine.co.uk/photos/65d61935e63c67f3497ab037/16:9/w_1920,h_1080,c_limit/online%20furniture%20stores%20210224%20MAIN%20SH_MODERN_COMFY_TRULLO%20SOFA_2460_F1%20COPY.jpg"
          alt="Furniture"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center space-y-3">
        <div className="text-center left-0">
          <p className="text-blue-400 gap-2 font-bold">SALE UP TO 35% OFF</p>
          <h1 className="text-3xl font-bold">HUNDREDS OF NEW LOWER PRICES!</h1>
          <p className="text-lg mt-3">
            It's more affordable than ever to give every room in your home a stylish makeover
          </p>
          <p className="mt-4 text-xl font-semibold text-blue-500 cursor-pointer underline">Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
