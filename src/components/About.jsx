import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa6";
import themehook from "../components/CodeContext";
import { CgProfile } from "react-icons/cg";
import photo from "../assets/about.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function About() {
  const {
    theme,
    settheme,
    logedin,
    setlogedin,
    contextusername,
    setcontextusername,
    setnavbar,
  } = themehook();
  const navigate = useNavigate();
  return (
    <div className=" sm:min-h-[94vh]">
      <div className="max-[666px]:hidden p-1 px-6 flex justify-between items-center ">
        <section
          onClick={() => {
            navigate("/");
          }}
          className=" cursor-pointer"
        >
          <section className=" flex items-center justify-center">
            <h1 className={`  font-bold text-md `}>Code</h1>
            <section>
              <FaFreeCodeCamp
                size={30}
                className={` text-green-700 mx-[2px] font-bold  `}
              />
            </section>
            <h1 className={` font-bold text-md `}>Master</h1>
          </section>
          {/* <section className=' flex  items-center justify-center mt-[-7px]'>
                            <hr className={` border-black w-8 border-t-2  `} />
                            <h1 className={` text-green-700 text-[12px] mx-[2px] font-semibold`}>learn with fun</h1>
                            <hr className={` border-black w-8 border-t-2  `} />
                        </section> */}
        </section>
        <ul className=" p-3 flex cursor-pointer ">
          <li
            className={`inline mx-2 font-semibold border-b-2 ${
              theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"
            }  hover:border-green-600`}
            onClick={() => {
              setnavbar(false);
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className={`inline mx-2 font-semibold border-b-2 ${
              theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"
            }  hover:border-green-600`}
            onClick={() => {
              setnavbar(false);
              navigate("/About");
            }}
          >
            About
          </li>
          <li
            className={`inline mx-2 font-semibold border-b-2 ${
              theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"
            }  hover:border-green-600`}
            onClick={() => {
              setnavbar(false);
              navigate("/contact");
            }}
          >
            Contact
          </li>
          <li
            className={`inline mx-2 font-semibold border-b-2 ${
              theme == "light" ? "border-[#ffffff]" : "border-[#1c232b]"
            }  hover:border-green-600`}
            onClick={() => {
              setnavbar(false);
              navigate("/feedback");
            }}
          >
            Feedback
          </li>
        </ul>
        {logedin ? (
          <section className=" flex items-center m-2 cursor-pointer">
            <CgProfile size={33} className=" " />
            <h1
              className=" text-lg"
              onClick={() => {
                setnavbar(false);
                navigate("/profile");
              }}
            >
              {contextusername}
            </h1>
          </section>
        ) : (
          <section className=" cursor-pointer">
            <button
              className=" text-black font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white"
              onClick={() => {
                setnavbar(false);
                navigate("/auth/login");
              }}
            >
              Login
            </button>
            <button
              className=" text-black mx-2 font-bold bg-[#e9ffed] rounded-3xl border-[1px] px-3 sm:px-5 py-[4px] border-gray-400 hover:bg-[#39a84b] hover:border-[#e9ffed] hover:text-white"
              onClick={() => {
                setnavbar(false);
                navigate("/auth/signup");
              }}
            >
              Signup
            </button>
          </section>
        )}
      </div>

      <div
        className={` flex sm:flex-row flex-col w-[80%] m-auto my-5 ${
          theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"
        } rounded-md sm:p-5`}
      >
        <div className="w-[100%] sm:w-[40%] flex justify-center items-center p-3">
          <LazyLoadImage src={photo} alt="" effect="blur" />
        </div>
        <div className="w-[100%] sm:w-[60%] flex flex-col justify-center items-center p-3">
          <h1 className=" font-bold text-xl sm:text-3xl text-center">About</h1>
          <p className=" text-center">
            Welcome to Code-Master our platform is designed for coding
            enthusiasts. Discover a world of coding possibilities with our
            diverse programming courses and validate your expertise through our
            certification tests. Practice your coding skills with our versatile
            online code compiler, supporting multiple languages, and participate
            in engaging discussions on our forums. Challenge yourself with a
            variety of coding questions, and stay updated with our latest
            content and events through our social media and newsletter. Your
            feedback and queries are important to us, so feel free to contact us
            at [your email address]. Join our community on [social media links]
            and embark on your coding journey with Code-Master.
          </p>
        </div>
      </div>

      <div
        className={`${
          theme == "light" ? "bg-[#f5f1f0]" : " bg-[#0c131d]"
        } flex flex-col sm:flex-row my-5 p-5 `}
      >
        <div className="w[100%] sm:w-[25%]  p-3 sm:border-r-2">
          <h1 className=" text-center font-bold text-xl">Our Team</h1>
          {/* <p className=" text-center">jdndjdncj dbdjcb cdhv</p> */}
        </div>
        <div className=" w-[100%]  sm:w-[75%]  flex flex-col sm:flex-row justify-center items-center">
          <section
            className={`${
              theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"
            } hover:bg-green-600 hover:text-white inline-block p-3 px-5 rounded-md m-2`}
          >
            <h1 className=" font-bold text-xl">Yash Vandre</h1>
            {/* <p className=' text-sm'>Web Developer</p> */}
          </section>
          <section
            className={`${
              theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"
            } hover:bg-green-600 hover:text-white inline-block p-3 px-5 rounded-md m-2`}
          >
            <h1 className=" font-bold text-xl">Shree Takalkar</h1>
            {/* <p className=' text-sm'>Web Developer</p> */}
          </section>
          <section
            className={`${
              theme == "light" ? "bg-[#ffffff]" : "bg-[#1c232b]"
            } hover:bg-green-600 hover:text-white inline-block p-3 px-5 rounded-md m-2`}
          >
            <h1 className=" font-bold text-xl">Yash Mulik</h1>
            {/* <p className=' text-sm'>Web Developer</p> */}
          </section>
        </div>
      </div>
      <div
        className={` flex w-[80%] m-auto my-5 ${
          theme == "light" ? "bg-[#f5f1f0]" : "bg-[#0c131d]"
        } rounded-md p-5`}
      >
        <div className=" flex flex-col justify-center items-center p-3">
          <h1 className=" font-bold text-xl sm:text-3xl text-center">
            Why choose us ?
          </h1>
          <p className=" text-center">
            Choose Code-Master for your coding journey because we offer an
            all-encompassing platform designed to meet your coding needs. Our
            robust tools, diverse courses, and official certifications provide a
            comprehensive learning experience. With our online compiler,
            engaging forums, and challenging coding questions, you can sharpen
            your skills and connect with a vibrant community of like-minded
            individuals. We stay at the forefront of coding trends, ensuring
            you're always updated. Your input matters, and we're committed to
            providing you with exceptional support. Join us at Code-Master,
            where your coding aspirations find the perfect home, and your path
            to success is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
