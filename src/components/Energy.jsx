import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { IoBatteryCharging } from "react-icons/io5";
import { GiDiamondsSmile } from "react-icons/gi";
import { GiSpikyWing } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../App.css";
function Black() {
  useGSAP(() => {
    gsap.to(".drinks img", {
      x: "-120%",
      duration: 25,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <>
      <div className="w-full bg-[#333] relative">
        <div className="top-layer w-full absolute top-[-6%] sm:top-[-36px]">
          <img src="black-border.svg" className="w-full object-contain" alt="" />
        </div>

        <div className="relative flex justify-center items-center">
          <img className="boom-layer " src="boom_layer.svg" alt="" />
          <img
            className="top-layer absolute top-0 -translate-x-[50%] left-1/2 z-20"
            src="top_layer.svg"
            alt=""
          />
        </div>
        <div className="z-20 relative bg-[#333]">

          <div className="bebas md:flex md:flex-col md:items-center font-bold text-[#ffedd7] leading-[28vmax] text-[30vmax] sm:text-[10vmax] md:text-[14vmax] md:leading-none px-4 py-12">
            <h1>GIVES YOU</h1>
            <h1 className="flex items-center gap-6 overflow-hidden">
              WIIINGS <GiSpikyWing />
            </h1>
          </div>

          <div className="flex md:flex-col md:gap-8 justify-between px-10 pb-12 text-white">
            <span className="flex flex-col md:items-center gap-4">
              <FaLeaf size={50} color="#ffedd7" className="opacity-50" />
              <h1 className="font-[gilroy] text-4xl md:text-center opacity-50 font-medium leading-none">
                Proudly made with <br /> natural ingredients
              </h1>
            </span>
            <hr className="hidden md:flex" />
            <span className="flex flex-col md:items-center gap-4">
              <IoBatteryCharging
                size={50}
                color="#ffedd7"
                className="opacity-50"
              />
              <h1 className="font-[gilroy] text-4xl md:text-center opacity-50 font-medium leading-none">
                Keeps you mentally <br /> charged and ready
              </h1>
            </span>
            <hr className="hidden md:flex" />
            <span className="flex flex-col md:items-center gap-4">
              <GiDiamondsSmile size={50} color="#ffedd7" className="opacity-50" />
              <h1 className="font-[gilroy] text-4xl md:text-center opacity-50 font-medium leading-none">
                Your cheerful pick
                <br />
                -me-up
              </h1>
            </span>
          </div>

          <div className="drinks px-6 left-0 z-[99] flex gap-6 overflow-x-hidden">
            <img
              src="redbull-y.png"
              className="w-[450px] md:w-[200px] rounded-xl"
              alt=""
            />
            <img
              src="redbull-r.png"
              className="w-[450px] md:w-[200px] rounded-xl"
              alt=""
            />
            <img
              src="redbull-s.png"
              className="w-[450px] md:w-[200px] rounded-xl"
              alt=""
            />
            <img
              src="redbull-b.png"
              className="w-[450px] md:w-[200px] rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Black;
