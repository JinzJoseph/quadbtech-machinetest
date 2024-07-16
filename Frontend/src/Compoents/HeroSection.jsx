import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import image1 from "../assets/image1.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";

const HeroSection = () => {
  const desktopImages = [image1, image5, image6];
  const [currentImage, setCurrentImage] = useState(0);

  const nextImg = () => {
    if (desktopImages.length - 1 > currentImage) {
      setCurrentImage((prev) => prev + 1);
    }
  };

  const prevImg = () => {
    if (currentImage !== 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };

  return (
    <div className="container mx-auto  py-2 rounded ">
      <div className="h-82 md:h-96 w-full bg-slate-200 relative">
        <div className="absolute z-10 h-full w-full md:flex items-center justify-between hidden">
          <button
            onClick={prevImg}
            className="bg-white shadow-md rounded-full p-2 m-2"
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={nextImg}
            className="bg-white shadow-md rounded-full p-2 m-2"
          >
            <FaAngleRight />
          </button>
        </div>
        <div className="hidden md:flex h-full w-full overflow-hidden">
          {desktopImages.map((img, index) => (
            <div
              className="flex w-full h-full min-h-full min-w-full transition-transform duration-500"
              key={index}
              style={{ transform: `translateX(-${currentImage * 100}%) ` }}
            >
              <img
                src={img}
                className="w-full h-full object-fill"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
