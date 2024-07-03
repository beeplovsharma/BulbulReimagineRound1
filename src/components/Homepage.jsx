import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { IoCartOutline } from "react-icons/io5";
import "../App.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
const Homepage = () => {
  useGSAP(() => {
    gsap.to(".star", {
      rotate: 80,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".star",
        scroller: "body",
        start: "20% 20%",
        end: "60%",
        // markers: true,
        scrub: 0.5,
      },
    });
  });
  return (
    <>
      <div className="homepage relative w-full h-[130vh] sm:h-[80vh] bg-[#ffec85] overflow-hidden">
        <div className="nav z-[999999] relative p-4 flex justify-between">
          <img src="redbull-1.png" className="w-24 h-fit md:w-17" alt="" />
          <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer hover:bg-[#333] hover:text-[#ffedd7] duration-300 flex justify-center items-center gap-1 rounded-3xl px-8 py-2 bg-[#fff] border-[1px] border-black"
            >
              <IoCartOutline />
              Cart
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", duration: 0.1, velocity: 0 }}
              className="cursor-pointer hover:bg-[#333] hover:text-[#ffedd7] duration-300 gap-1 rounded-3xl px-4 py-2 bg-[#fff] border-[1px] border-black"
            >
              <RxHamburgerMenu />
            </motion.button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="flex justify-center">
            <img
              src="yellow-star-m.png"
              className="star absolute top-[35%]"
              alt=""
            />
          </div>
        </div>

        <div className="main-text text-center relative bebas leading-[15vmax] text-[20vmax] sm:text-[11vmax] md:text-[25vmax] md:leading-[20vmax] sm:leading-none font-bold mt-24 text-[#333]">
          <h1>THE EXPLOSIVE</h1>
          <h1>ENERGY DRINK</h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
