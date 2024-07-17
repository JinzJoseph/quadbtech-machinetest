import axios from "axios";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/User/UserSlice";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data.rest);
      if (res.status === 200) {
        dispatch(signInSuccess(res.data.rest));
        navigate("/");
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" ">
      <div className="container mx-auto mt-28 w-full   ">
        <div className="flex ">
          <div className="flex   w-[50%]">
            <img
              src="https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo="
              alt=""
              className=" object-fill"
            />
          </div>

          <div class="bg-grey-lighter min-h-screen flex flex-col justify-center w-[50%]">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div class="bg-white px-6 py-8 rounded  text-black w-full">
                <h1 class="mb-8 text-2xl text-center font-sm">Sign in</h1>
                <Link to="/signup" className="mb-3">
                  Dont't have an account yet?
                  <span className="text-green-400">sign up</span>
                </Link>
                <form action="" className="mt-4 pt-4" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    class="block border  border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Your  Name or email address"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />

                  <div className="relative flex flex-row justify-between items-center">
                    <input
                      type="password"
                      className="block border border-grey-light w-full p-3 rounded mb-4 pr-10"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                    <FiEye className="absolute right-3 cursor-pointer " />
                  </div>
                  <div className=" flex  gap-2 text-center text-sm text-grey-dark mt-4">
                    <input type="checkbox" name="" id="" className="gap-2" />
                    <p>Remember me </p>
                    <p className="font-bold">Forgot password ?</p>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-center py-3 rounded bg-black mt-2 text-white  focus:outline-none my-1"
                  >
                    Sign in
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

export default LoginPage;
