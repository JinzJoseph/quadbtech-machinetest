import React, { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/User/UserSlice";
import axios from "axios";
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [menuOpen, SetMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      dispatch(signoutSuccess());
      const res = await axios.post("/api/user/signout");
      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container mx-auto pt-3 flex justify-between items-center h-[8%] z-20">
        <Link to="/">
          <h1 className="text-3xl font-bold">3legant</h1>
        </Link>
        <div className="flex gap-6 pt-2">
          {/* content */}
          <Link to="/" className="text-lg font-semibold text-slate-400">
            Home
          </Link>
          <Link to="/shop" className="text-lg font-semibold text-slate-400">
            Shop
          </Link>
          <Link to="/cart" className="text-lg font-semibold text-slate-400">
            Cart
          </Link>
          <p className="text-lg font-semibold text-slate-400">Contact Us</p>
        </div>
        <div className="flex justify-between gap-5 items-center">
          {/* items */}
          <p className="text-2xl text-black">
            <CiSearch />
          </p>

          <button
            className="text-black relative text-2xl focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            onClick={toggleDrawer}
          >
            <CiShoppingCart />
            {currentUser ? (
              <span className="absolute top-0 right-5 mt-3 transform -translate-y-1/2 translate-x-1/2 bg-black text-white px-1 rounded-full text-xs">
                2
              </span>
            ) : (
              ""
            )}
          </button>

          <p
            className="text-2xl text-black"
            onClick={() => SetMenuOpen(!menuOpen)}
          >
            <CgProfile />
          </p>
          {menuOpen && (
            <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
              <nav>
              {/* {currentUser === false && (
                  <div>
                    <button
                      className="whitespace-nowrap bg-black text-white px-4 py-1 font-bold hidden md:block  p-2 text-2xl"
                      onClick={() => navigate("/login")}
                    >
                      login
                    </button>
                  </div>
                )} */}

                {currentUser?.isAdmin ? (
                  <div>
                    <Link
                      to={"/admin"}
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2 text-2xl"
                      onClick={() => SetMenuOpen(!menuOpen)}
                    >
                      Admin Panel
                    </Link>

                    <button
                      className="whitespace-nowrap bg-black text-white px-4 py-1 font-bold hidden md:block  p-2 text-2xl"
                      onClick={handleLogout}
                    >
                      logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      className="whitespace-nowrap bg-black text-white px-4 py-1 font-bold hidden md:block  p-2 text-2xl"
                      onClick={handleLogout}
                    >
                      logout
                    </button>
                  </div>
                )}
                
              </nav>
            </div>
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <div
          id="drawer-navigation"
          className="fixed top-0 right-0 z-40 w-[20%] h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800"
          aria-labelledby="drawer-navigation-label"
        >
          <div className="flex justify-between">
            <h5
              id="drawer-navigation-label"
              className="text-3xl font-bold  text-black   mt-6"
            >
              Cart
            </h5>
            <button
              type="button"
              onClick={toggleDrawer}
              aria-controls="drawer-navigation"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoMdClose className="w-10 h-10 text-white bg-black " />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div class="mx-auto mt-8 max-w-md md:mt-12">
            <div class="rounded-3xl bg-white ">
              <div class="px-4 py-6 sm:px-8 sm:py-10">
                <div class="flow-root">
                  <ul class="-my-8">
                    <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                      <div class="shrink-0 relative">
                        <div className="bg-slate-400 w-28  h-32">
                          <img
                            class="h-28 w-24 max-w-full object-cover mx-auto pt-4"
                            src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                            alt=""
                          />
                        </div>
                      </div>

                      <div class="relative flex flex-1 flex-col justify-between">
                        <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                          <div class="pr-8 sm:pr-5">
                            <p class="text-base font-semibold text-gray-900">
                              Nike Air Max 2019
                            </p>
                            <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                              Color:Black
                            </p>
                            <div className="flex items-center border border-1 justify-between border-black rounded-md font-bold mt-1 px-4 py-1.5">
                              <p>-</p>
                              <p>4</p>
                              <p>+</p>
                            </div>
                          </div>

                          <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                            <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              $1259.00
                            </p>
                          </div>
                        </div>

                        <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                          <button
                            type="button"
                            class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                          >
                            <svg
                              class="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                                class=""
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                    {/* <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0 relative">
                  <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=150&q=60" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">Nike Air Max 2019</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">$1259.00</p>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="block h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </li> */}
                  </ul>
                </div>

                <hr class="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />

                <div class="mt-6 space-y-3 border-t border-b py-8">
                  <div class="flex items-center justify-between">
                    <p class="text-gray-400">Subtotal</p>
                    <p class="text-lg font-semibold text-gray-900">$2399.00</p>
                  </div>
                  <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm font-medium text-gray-900">Total</p>
                    <p class="text-2xl font-semibold text-gray-900">
                      <span class="text-xs font-normal text-gray-400">$</span>{" "}
                      2499.00
                    </p>
                  </div>
                </div>

                <div class="mt-6 text-center">
                  <button
                    type="button"
                    class="group inline-flex w-full items-center justify-center rounded-md bg-black px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    checkout
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                  <p className="text-center text-xl text-black underline mt-3 ">
                    View cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
