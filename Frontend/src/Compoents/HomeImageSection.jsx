import React from "react";
import image1 from "../assets/image1.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
const HomeImageSection = () => {
  return (
    <div className="md:w-[80%] mx-auto  my-10 container ">
      <div className="md:grid grid-cols-2 items-center justify-center  gap-4">
        <div className="mb-4 md:mb-0 relative">
          <img
            src={image1}
            alt=""
            className="md:h-[720px] w-full mx-auto  rounded-sm"
          />
          <div className="absolute top-0 m-5 pt-5"> <p className="text-3xl font-bold space-x-2 mb-2  ">Living Room </p> <span className="text-black underline">Shop Now</span></div>
        </div>
        <div className="gap-4 grid grid-cols-1 items-start ">
          <div className="relative">
            <img
              src={image5}
              alt=""
              className="md:h-[340px] w-full h-full mx-auto rounded-sm"
            />
             <div className="absolute top-14 pt-14  mx-20 my-24 "> <p className="text-3xl font-bold space-x-2 mb-2  ">Bedroom Room </p> <span className="text-black underline">Shop Now</span></div>
          </div>
          <div className="relative">
            <img
              src={image6}
              alt=""
              className="md:h-[360px] w-full mx-auto rounded-sm"
            />
              <div className="absolute top-14 pt-14  mx-20 my-28 "> <p className="text-3xl font-bold space-x-2 mb-2  ">Kitchen</p> <span className="text-black underline">Shop Now</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImageSection;
