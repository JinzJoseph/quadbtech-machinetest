import React from "react";
import { FaSortAmountDown } from "react-icons/fa";

const ShopSection1 = () => {
  return (
    <div className="container mx-auto pt-8 flex justify-between items-center">
      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">CATEGORIES</p>
          <select
            name="categories"
            id="categories"
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Price</p>
          <select
            name="price"
            id="price"
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <input
          type="text"
          placeholder="Sort"
          className="border border-gray-300 rounded-md p-2"
        />
        <div className="flex gap-2 text-lg">
          <FaSortAmountDown className="cursor-pointer hover:text-gray-600" />
          <FaSortAmountDown className="cursor-pointer hover:text-gray-600" />
          <FaSortAmountDown className="cursor-pointer hover:text-gray-600" />
          <FaSortAmountDown className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ShopSection1;
