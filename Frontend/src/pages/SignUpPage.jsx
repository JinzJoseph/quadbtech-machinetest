import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username, email, password);
      const res = await axios.post(
        "/api/user/signup",
        { username, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        navigate("/login");
      } else {
        alert(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
                <form action="" className="mt-4 pt-4" onSubmit={handlesubmit}>
                  <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                  />
                  <input
                    type="email"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email address"
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
                 Sign up
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
