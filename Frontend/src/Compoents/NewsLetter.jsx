import React from "react";
import { BiSolidMessageDetail } from "react-icons/bi";
const NewsLetter = () => {
  return (
    <div className="flex items-center justify-between w-full  h-[25%] bg-slate-200 mx-auto ">
      <div className="w-[25%] h-full object-cover">
        {/* first image */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsVQPqmxL7psT20FWF129ZklG5bNUA6mA9Ng&s"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-[50%] items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Join Our Newsletter</h1>
        <p className="text-center font-medium gap-2 mt-3">
          sign up for deals, new products and promotions
        </p>
        <div className="flex justify-center items-center space-x-2 mt-10">
          <BiSolidMessageDetail className="text-gray-500 w-8 h-8" />
          <div className="relative">
            <input
              type="text"
              className="bg-transparent border-b-2 border-gray-400 outline-none focus:border-blue-500 transition-colors duration-300 w-64"
              placeholder="Email Address"
            />
          
          </div>
          <button
            type="submit"
            className="border-0 text-slate-400 py-1 px-4 text-2xl  hover:bg-slate-200 transition-colors duration-300"
          >
            Signup
          </button>
        </div>
      </div>
      <div className="w-[25%] h-full object-cover">
        {/* first image */}
        <img
          src="https://media.istockphoto.com/id/968086564/photo/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-to-grey-couch-real-photo.jpg?s=612x612&w=0&k=20&c=TfE8sZbX_XC4yIYEaRAJHrdIWjZqvRx3Crn0ygcr-h0="
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
