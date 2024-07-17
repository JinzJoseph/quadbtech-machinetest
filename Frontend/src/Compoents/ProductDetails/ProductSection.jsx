import React from "react";
import image5 from "../../assets/image5.jpg";
import { FaChevronDown } from "react-icons/fa";
import image6 from "../../assets/image6.jpg";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import ProductList from "../ProductList";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";
import { useSelector ,useDispatch} from "react-redux";
import { addTocart } from "../../redux/Cart/CartSlice";
import axios from "axios";
const ProductSection = ({ data }) => {
const {currentUser}=useSelector((state)=>state.user);
const dispatch=useDispatch()
  const {
    _id,
    productName,
    description,
    productImage,
    price,
    sellingprice,
    category,
  } = data;
  const userId=currentUser._id
  const handleAddToCart = async (id) => {
    try {
      const res = await axios.post("/api/cart/cart", {productId:id,userId}, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res.status === 200) {
        dispatch(addTocart(data));
        alert("Successfully product added to cart");
       
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mx-auto pt-5 flex w-full h-auto bg-white">
        <div className="w-[40%] grid grid-cols-2 gap-4 ml-4 mb-3">
          {/* Images */}
          {productImage.map((i, index) => (
            <div key={index} className="relative w-full h-[350px]">
              <img
                src={i}
                alt=""
                className="h-full w-full rounded-sm object-cover"
              />
            </div>
          ))}
        </div>
        <div className="w-[60%] ml-8 flex flex-col">
          {/* Product details section */}
          <div className="flex gap-3 text-center">
            <div className="flex gap-1 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <IoStar key={index} />
              ))}
            </div>
            <p className="font-bold text-sm text-gray-600">11 Reviews</p>
          </div>
          <h1 className="text-4xl mt-4 font-semibold">{productName}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="flex items-center mt-3">
            <h1 className="font-bold text-black text-2xl">${price}</h1>
            <p className="text-slate-400 line-through ml-3">${sellingprice}</p>
          </div>
          <hr className="w-full bg-slate-400 mt-4" />
          <div className="flex flex-col space-y-3 mt-4">
            <p className="font-medium text-slate-400">Measurements</p>
            <h1 className="font-bold text-black text-2xl">17 1/2 * 20 5/8 "</h1>
            <div className="flex items-center gap-2">
              <p className="font-medium text-slate-400 text-xl">Choose color</p>
              <IoIosArrowForward className="text-slate-400 w-5 h-5" />
            </div>
            <h1 className="font-medium text-2xl">Black</h1>
          </div>
          <div className="flex gap-2 mt-4 ">
            {productImage.map((i, index) => (
              <div
                key={i}
                className="bg-slate-400  m-auto justify-between"
              >
                <img
                  src={i}
                  className="w-25 h-20 object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex w-full mt-4 items-center">
            <div className="bg-slate-300 w-[30%] flex items-center justify-between border border-black rounded-md font-bold px-4 py-3">
              <p className="cursor-pointer font-bold text-lg">-</p>
              <p className="mx-4">4</p>
              <p className="cursor-pointer font-bold text-lg">+</p>
            </div>
            <div className="w-[70%] flex items-center justify-center ml-4">
              <button  
               onClick={() => handleAddToCart(_id)}
              className="flex w-full gap-2 border border-black bg-white text-black rounded-md px-6 py-3 font-bold items-center justify-center hover:bg-black hover:text-white transition-colors duration-300">
                <CiHeart className="text-2xl" />
                Add to Cart
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="text-slate-300 font-bold text-xl">SKU</p>
              <p className="font-semibold">1117</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-slate-300 font-bold text-xl">CATEGORY</p>
              <p className="text-xl">{category}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl">Additional Info</h1>
              <FaChevronDown className="text-xl" />
            </div>
            <hr className="w-full border-black mt-3" />
            <h4 className="text-slate-400 text-xl mt-4 font-semibold">
              Details
            </h4>
            <p className="text-black mt-3 tracking-wide">
              You can see the removable tray for serving. The design makes it
              easy to put the tray back after use since you place it directly on
              the table frame without having to fit it into any holes.
            </p>
            <h2 className="font-semibold text-slate-400 my-4 text-xl">
              Packaging
            </h2>
            <p className="font-medium text-black text-lg">
              Width: 20" Height: 11/2" Length: 21 1/2"
            </p>
            <p className="font-medium text-black text-lg">Weight: 7 lb 8 oz</p>
            <p className="font-medium text-black text-lg">Package(s): 1</p>
          </div>
          <div className="flex justify-between mt-4">
            <h1 className="font-bold text-2xl">Questions</h1>
            <FaChevronDown className="text-xl" />
          </div>
          <hr className="w-full border-black mt-3" />
          <div className="flex justify-between mt-4">
            <h1 className="font-bold text-2xl">Reviews(11)</h1>
            <FaChevronDown className="text-xl" />
          </div>
          <hr className="w-full border-black mt-3" />
        </div>
      </div>
      <div className="container mx-auto pt-24">
        <h1 className="text-3xl font-bold mb-6">You Might also be like</h1>
        <ProductList />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default ProductSection;
