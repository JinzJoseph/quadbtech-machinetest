import React from "react";
import { FiEye } from "react-icons/fi";
import {Link} from "react-router-dom"
const SignUpPage = () => {
  return (
    <div className=" ">
      <div className="container mx-auto mt-28   ">
        <div className="flex ">
          <div className="flex shadow-lg rounded-full w-[50%]">
            <img
              src="https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo="
              alt=""
              className=" object-fill"
            />
          </div>

          <div class="bg-grey-lighter min-h-screen flex flex-col w-[50%]">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div class="bg-white px-6 py-8 rounded  text-black w-full">
                <h1 class="mb-8 text-2xl text-center font-sm">Sign up</h1>
                <Link to="/login" className="mb-3">
                  Already have an account?
                  <span className="text-green-400">sign in</span>
                </Link>
                <form action="" className="mt-4 pt-4">
                  <input
                    type="text"
                    class="block border  border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Your  Name"
                  />
                  <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="text"
                    placeholder="Username"
                  />
                  <input
                    type="email"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email address"
                  />
                  <div className="relative flex flex-row justify-between items-center">
                    <input
                      type="password"
                      className="block border border-grey-light w-full p-3 rounded mb-4 pr-10"
                      name="password"
                      placeholder="Password"
                    />
                    <FiEye className="absolute right-3 cursor-pointer " />
                  </div>
                  <div class=" flex  gap-2 text-center text-sm text-grey-dark mt-4">
                    <input type="checkbox" name="" id="" className="gap-2" />
                    <p>
                      I agrree with{" "}
                      <span className="font-bold">privacy Policy</span>and{" "}
                      <span className="font-bold">Terms of use</span>
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-black mt-2 text-white  focus:outline-none my-1"
                  >
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
