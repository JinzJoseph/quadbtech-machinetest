import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";import { CiPhone } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
const HomeSection3 = () => {
  return (
    <div className="container mx-auto pt-10 flex flex-wrap gap-16 ">
      <div className="bg-slate-400 flex flex-col items-center justify-center px-20 py-20 text-center ">
        <p className="-ml-16">
          <MdOutlineLocalShipping className="w-10 h-10 text-black mb-2" />
        </p>
        <h2 className="font-bold text-2xl">Free Shipping</h2>
        <p className="text-slate-500 mt-4">order above $200</p>
      </div>
      <div className="bg-slate-400 flex flex-col items-center justify-center px-20 py-20 text-center ">
        <p className="-ml-16">
          <CiMoneyBill className="w-10 h-10 text-black mb-2" />
        </p>
        <h2 className="font-bold text-2xl">Money-back</h2>
        <p className="text-slate-500 mt-4">30 days guarantee</p>
      </div>
      <div className="bg-slate-400 flex flex-col items-center justify-center px-20 py-20 text-center ">
        <p className="-ml-16">
          <CiMoneyBill className="w-10 h-10 text-black mb-2" />
        </p>
        <h2 className="font-bold text-2xl">Secure payments</h2>
        <p className="text-slate-500 mt-4">secured</p>
      </div>

      
      <div className="bg-slate-400 flex flex-col items-center justify-center px-20 py-20 text-center ">
        <p className="-ml-16">
          <CiPhone className="w-10 h-10 text-black mb-2" />
        </p>
        <h2 className="font-bold text-2xl">24/7 support</h2>
        <p className="text-slate-500 mt-4">phone and Email support</p>
      </div>
    </div>
  );
};

export default HomeSection3;
