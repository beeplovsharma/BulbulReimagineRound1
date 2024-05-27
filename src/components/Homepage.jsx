import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { IoCartOutline } from "react-icons/io5";
import "../App.css";
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
        <div>
          <img
            src="yellow-star-m.png"
            className="star absolute left-[5%] md:top-[35%] md:left-0 -translate-x-[50%]"
            alt=""
          />
        </div>

        <div className="nav z-[999] p-4 flex justify-between">
          <img src="redbull-1.png" className="w-24 h-fit md:w-16" alt="" />
          <div className="cursor-pointer">
            <button className="flex justify-center items-center gap-1 rounded-3xl px-8 py-2 bg-[#fff] border-[1px] border-black">
              <IoCartOutline />
              Cart
            </button>
          </div>
        </div>
        <div className="main-text text-center relative bebas leading-[15vmax] text-[20vmax] sm:text-[12vmax] sm:leading-none font-bold mt-24 text-[#333]">
          <h1>THE EXPLOSIVE</h1>
          <h1>ENERGY DRINK</h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
