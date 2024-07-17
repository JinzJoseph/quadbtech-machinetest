import axios from "axios";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { removeItem } from "../redux/Cart/CartSlice";

const CartSection = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  const totalprice = cart.reduce((acc, item) => acc + parseInt(item.price), 0);
  const lastprice =totalprice+100
  const handleDelete=async(id)=>{
    try {
      const res = await axios.delete(`/api/cart/cart/${id}`);
      if (res.status === 200) {
        dispatch(removeItem(id));
        alert("Removed Product from cart");
      }
    } catch (error) {
      console.log("something went wrong");
    }
  }
  return (
    <div className="container pt-5 mx-auto w-full h-[50%]">
      <div className="w-full h-full flex">
        <div className="w-[60%] h-full">
          {/* items */}

          <div className=" py-3">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full ">
                    <table className="w-full h-full">
                      <thead>
                        <tr>
                          <th className="text-left font-semibold">Product</th>
                          <th className="text-left font-semibold">Quantity</th>
                          <th className="text-left font-semibold">Price</th>
                          <th className="text-left font-semibold">Total</th>
                        </tr>
                      </thead>

                      <tbody>
                      
                        {cart.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td className="py-4">
                                <div className="flex  flex-col-2 w-[20%] h-[25%] bg-slate-400 items-center">
                                  <img
                                    className="h-30 w-20 mr-4 object-contain"
                                    src={item.productImage[0]}
                                    alt="Product"
                                  />
                                  <div className="w-[5%]">
                                    <span className="font-semibold">
                                      {item.productName}
                                    </span>
                                    <p>Black</p>
                                    <p>
                                      <MdDelete
                                      onClick={()=>handleDelete(item._id)}
                                      className="w-8 h-8 text-black" />
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-4">
                                <div className="flex items-center">
                                  <button className="border rounded-md py-2 px-4 mr-2">
                                    -
                                  </button>
                                  <span className="text-center w-8">1</span>
                                  <button className="border rounded-md py-2 px-4 ml-2">
                                    +
                                  </button>
                                </div>
                              </td>
                              <td className="py-4">${item.price}</td>
                              <td className="py-4">${item.sellingPrice}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full flex flex-col bg-white  p-4 border border-1 border-black">
          {/* Placeholder for additional content */}
          <p className="">Cart Summary</p>
          {/* Add your payment section content here */}
          <div className="flex mt-5 gap-4  border border-1 border-black py-3 p-3 justify-between">
            <div className="flex ">
              <input type="checkbox" width="5" />
              <p className="gap-4 font-serif ml-2">Free shipping</p>
            </div>
            <div className="flex">
              <p>$0.01</p>
            </div>
          </div>
          <div className="flex mt-5 gap-4  border border-1 border-black py-3 p-3 justify-between">
            <div className="flex ">
              <input type="checkbox" width="5" />
              <p className="gap-4 font-serif ml-2">Express shipping</p>
            </div>
            <div className="flex">
              <p>+$0.01</p>
            </div>
          </div>
          <div className="flex mt-5 gap-4  border border-1 border-black py-3 p-3 justify-between">
            <div className="flex ">
              <input type="checkbox" width="5" />
              <p className="gap-4 font-serif ml-2">pick up</p>
            </div>
            <div className="flex">
              <p>$21%</p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <p className="font-mono text-lg">subtotal</p>
            <p className="font-mono text-lg">${totalprice}</p>
          </div>
          <hr className="w-full border border-1 mt-2 border-slate-400" />
          <div className="flex justify-between mt-2">
            <p className="font-mono text-xl font-bold">Total</p>
            <p className="font-mono text-xl font-bold">${lastprice}</p>
          </div>
          <button className="w-full bg-black text-white py-4 items-center rounded mt-2 font-bold">
            checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
