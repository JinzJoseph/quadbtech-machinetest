import React, { useEffect, useState } from "react";
import TopSection from "../Compoents/TopSection";
import NavBar from "../Compoents/NavBar";
import { IoIosArrowForward } from "react-icons/io";
import ProductSection from "../Compoents/ProductDetails/ProductSection";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const params = useParams();
  const [data, setData] = useState(null); // Initialize as null

  const fetchData = async () => {
    try {
      const res = await axios.get(`/api/product/product/${params.id}`);
      
      if (res.status === 200) {
        setData(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching product data:", error); // More descriptive error
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  return (
    <div className="h-screen">
      <TopSection />
      <NavBar />
      <div className="h-[5%] container mx-auto pt-5 justify-start">
        <div className="font-serif flex">
          <p className="flex items-center gap-3">
            Home <IoIosArrowForward className="w-3 h-3 text-black" />
          </p>
          <p className="flex items-center gap-3">
            Shop <IoIosArrowForward className="w-3 h-3 text-black" />
          </p>
          <p className="flex items-center gap-3">
            Living Room <IoIosArrowForward className="w-3 h-3 text-black" />
          </p>
          <p className="flex items-center gap-3">Product</p>
        </div>
      </div>
      {data ? <ProductSection data={data} /> : <p>Loading...</p>} {/* Handle loading state */}
    </div>
  );
};

export default ProductDetails;
