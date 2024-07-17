import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
const ProductList = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/product/products");
      if (res.status === 200) {
        setdata(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto  pt-5 flex gap-5   overflow-x-auto translate-all relative scrollbar-none mb-8">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <Product item={item} />
            </div>
          );
        })}
      </div>
      <hr className=" container   justify-center mx-auto  mt-3  w-full   border-b-1 border-black " />
    </>
  );
};

export default ProductList;
