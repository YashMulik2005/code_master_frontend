import React, { useState } from "react";
import themehook from "./CodeContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import {
  AiFillGoogleCircle,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { PulseLoader } from "react-spinners";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loader, setloader] = useState(false);
  const [err, seterr] = useState(false);
  const { theme, setcontextusername, setlogedin, setnavbar } = themehook();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const url = import.meta.env.VITE_BACKEND;

  const handlenav = () => {
    setnavbar(false);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setloader(true);
    const data = {
      username: username,
      password: password,
    };
    try {
      const result = await axios.post(`${url}/user/login`, { data: data });
      console.log(result);
      if (result.data.data.success) {
        localStorage.setItem("username", username);
        setloader(false);
        setcontextusername(username);
        setlogedin(true);
        navigate("/");
      } else {
        setlogedin(false);
        seterr(true);
      }
    } catch (error) {
      console.log(error.response.data);
    }
    setloader(false);
    setusername("");
    setpassword("");
  };
  return (
    <div className=" sm:p-2">
      {loader ? (
        <section className=" text-center">
          <PulseLoader size={15} color="green" />
        </section>
      ) : (
        <section
          className={` ${
            err ? "" : "hidden"
          } p-1 px-3 flex justify-between items-center bg-green-600 text-white rounded-lg `}
        >
          <h1 className=" text-center font-semibold text-md">
            Username or password is invalid.
          </h1>
          <GiCancel
            size={20}
            onClick={() => {
              seterr(false);
            }}
          />
        </section>
      )}
      <form action="" onSubmit={handlesubmit}>
        <h1 className=" font-bold text-xl my-3">Username:</h1>
        <input
          type="text"
          name="username"
          className={` ${
            theme == "light"
              ? "focus:bg-[#f5f1f0]"
              : "bg-[#0c131d] border-none focus:bg-[#0c131d]"
          } w-[100%] p-2 rounded-2xl border-2 px-4 focus:outline-none  `}
          value={username}
          placeholder="Enter username"
          onChange={(e) => {
            setusername(e.target.value);
            seterr(false);
          }}
        />
        <h1 className=" font-bold text-xl my-3">Password:</h1>
        <input
          type="password"
          name="password"
          className={` ${
            theme == "light"
              ? "focus:bg-[#f5f1f0]"
              : "bg-[#0c131d] border-none focus:bg-[#0c131d]"
          } w-[100%] p-2 rounded-2xl border-2 px-4 focus:outline-none  `}
          value={password}
          placeholder="Enter password"
          onChange={(e) => {
            setpassword(e.target.value);
            seterr(false);
          }}
        />
        <br />
        <section className=" flex flex-col justify-center items-center">
          <input
            type="submit"
            className="bg-green-600 p-1 py-[6px] w-[90%] cursor-pointer rounded-2xl text-white font-semibold mt-6"
          />
          <h1 className=" font-semibold">or</h1>
          <h1 className=" font-semibold">If don't have account then signup</h1>
        </section>
      </form>
    </div>
  );
}

export default Login;
