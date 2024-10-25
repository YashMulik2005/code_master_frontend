import React, { useEffect, useRef } from "react";
import themehook from "../components/CodeContext";
import { Link, useParams } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";

function Rules() {
  const { theme } = themehook();
  const { id } = useParams();
  console.log(id);

  const div1 = useRef(null);
  const div2 = useRef(null);
  const div3 = useRef(null);
  const div4 = useRef(null);
  const isInView1 = useInView(div1, { once: false });
  const isInView2 = useInView(div2, { once: false });
  const isInView3 = useInView(div3, { once: false });
  const isInView4 = useInView(div4, { once: false });
  // const div1Controls = useAnimation()
  // const div2Controls = useAnimation()

  const animateleft = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };

  const animateright = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  };
  const animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const transition = {
    duration: 0.5,
  };
  const transition2 = {
    duration: 0.5,
    delay: 0.5,
  };

  return (
    <div className=" flex flex-col sm:flex-row">
      <div
        className={` w-[100%] sm:w-[30%] sm:h-[100vh] flex justify-center items-center p-4 flex-col bg-green-700  text-white`}
      >
        <h1 className="text-[24px] font-bold text-center">
          Codemaster Certify
        </h1>
        <h1 className="font-semibold text-[15px] text-center">
          Unlock Your Potential with Code Master certification.
        </h1>
        <h1 className="font-semibold text-[15px] text-center">
          {" "}
          Certify Your Skills, Showcase Your Hard Work, and Validate Your
          Knowledge. Elevate Your Career with Confidence!
        </h1>
      </div>

      <div className=" w-[100%] sm:w-[70%] sm:h-[100vh] sm:mt-0 mt-4 p-3 sm:overflow-y-auto flex flex-col justify-center items-center">
        <h1
          class={`text-xl font-bold text-center $${
            theme == "light" ? "text-black" : "text-white"
          } mb-10`}
        >
          Rules for Certification
        </h1>
        <section className=" flex justify-center">
          <ul class="list-disc list-inside px-4 space-y-4">
            <li>
              Solve both questions fully and click the <strong>Finish</strong>{" "}
              button to submit for certification.
            </li>

            <li>
              If you don’t finish by clicking <strong>Finish</strong>, your
              attempt won’t count, and you won’t receive a certificate.
            </li>

            <li>
              Clicking the <strong>Stop</strong> button terminates the
              assessment, and you won’t get certified. Avoid pressing back or
              refreshing the page.
            </li>

            <li>
              You have <strong>15 minutes</strong> per question. Complete both
              within the time limit for certification.
            </li>
          </ul>
        </section>

        <section className=" flex justify-center">
          <button className=" border-[1px] hover:bg-green-600 hover:text-white hover:border-none px-6 py-[3px] border-gray-300 rounded-3xl font-semibold my-4 ">
            <Link to={`/certificate/dashboard/${id}`}> start </Link>
          </button>
        </section>
      </div>
    </div>
    //  <section className=" flex justify-center">
    //       <button className=" border-[1px] hover:bg-green-600 hover:text-white hover:border-none px-6 py-[3px] border-gray-300 rounded-3xl font-semibold my-4 ">
    //         <Link to={`/certificate/dashboard/${id}`}> start </Link>
    //       </button>
    //     </section>
  );
}

export default Rules;
