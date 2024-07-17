import React from "react";
import { FaStar } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import axios from "axios";
import { addTocart } from "../redux/Cart/CartSlice";
import { useDispatch,useSelector } from "react-redux";
const Product = ({ item }) => {
  const dispatch = useDispatch();
  const {currentUser}=useSelector((state)=>state.user)
  const {
    _id,
    productName,
    productImage,
    category,
    description,
    price,
    sellingPrice,
  } = item;
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
        alert("Successfully product added to cart");
        dispatch(addTocart(item));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Link to={`/productDetails/${_id}`}>
      <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md overflow-x-auto translate-all  scrollbar-none">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
            src={productImage[0]}
            alt="product image"
          />
          <div className="absolute top-0 left-0 m-2  px-2 text-center text-sm font-medium text-white">
            <p className="text-2xl font-bold bg-slate-300 text-black px-5 rounded">
              New
            </p>
            <p className="bg-green-500 text-white gap-4 mt-3 rounded">-50%</p>
          </div>
          <div className="absolute top-0 right-0 mt-4 py-3 px-3 mr-4 rounded bg-slate-300 text-center">
            <p>
              <TbJewishStar className="w-5 h-5" />
            </p>
          </div>
        </a>

        <div className="mt-4 px-5 pb-5">
          <button
            onClick={() => handleAddToCart(_id)}
            href="#"
            className="flex items-center justify-center w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
          <div className="flex  m-4 gap-2">
            <FaStar className="h-5 w-5 text-black" />
            <FaStar className="h-5 w-5 text-black" />
            <FaStar className="h-5 w-5 text-black" />
            <FaStar className="h-5 w-5 text-black" />
          </div>

          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              {productName}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900">
                ${price}
              </span>
              <span className="text-2xl text-slate-300 line-through ml-3 ">
                ${sellingPrice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
