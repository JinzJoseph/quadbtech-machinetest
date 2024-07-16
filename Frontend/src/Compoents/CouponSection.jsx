import React from "react";
import { BiScan } from "react-icons/bi";
const CouponSection = () => {
  return (
    <div className="container mx-auto pt-8 w-full  mb-5 mt-10 justify-start ">
      <div className="w-[50%] flex flex-col ">
        <h4 className="font-bold text-xl">Have a coupon ?.</h4>
        <p p className="mt-2 text-slate-300">
          {" "}
          Add your code for an instant cart discount
        </p>

        <div className="flex justify-between mt-3 border border-1 w-[50%] px-2 py-3  border-black">
          <div className="flex gap-3 items-center ">
            <p>
              <BiScan className="w-6 h-6 font-bold text-slate-300" />
            </p>
            <h1 className=" text-slate-300 ">Coupon code</h1>
          </div>
          <p className="font-bold">Apply</p>
        </div>
      </div>
    </div>
  );
};

export default CouponSection;
