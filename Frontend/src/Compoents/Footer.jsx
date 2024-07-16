import React from "react";
import { CiInstagram } from "react-icons/ci";import { TbBrandFacebook } from "react-icons/tb";import { CiYoutube } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-black w-full h-[20%]">
      <div className="justify-between text-white container mx-auto pl-5  flex  pt-14">
        <div className="justify-between flex gap-5 items-center">
          <h1 className="text-2xl font-semibold">3legant.</h1>
          <div class="h-[24px]  bg-white w-[2px]"></div>
          <h5 className="font-medium ">Gift & Decorations Store </h5>
        </div>
        <div className="flex justify-between space-x-8">
          <p>Home</p>
          <p>Shop</p>
          <p>Product</p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
      </div>
      <hr className="bg-white  mt-5 container mx-auto flex w-[90%] " />

      <div className="justify-between flex container mx-auto mt-4 ">
        <div className="flex items-center justify-between">
          <p className="text-white">
            copyright@20233legant.All rights reserved
          </p>
          <p className="text-white ml-5">Privacy Policy</p>
          <p className="text-white ml-5">Terms of use</p>
          </div>
          <div className="flex justify-between gap-5 ">
            <p className="text-white w-5 text-2xl h-5 "><CiInstagram/></p>
            <p className="text-white w-5 h-5 text-2xl"><TbBrandFacebook/></p>
            <p className="text-white w-5 h-5 text-2xl"><CiYoutube/></p>
          </div>
        
      </div>
    </div>
  );
};

export default Footer;
