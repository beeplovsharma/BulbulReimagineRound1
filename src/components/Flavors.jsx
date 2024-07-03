import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import "../App.css";
import { motion } from "framer-motion";
const Blank = () => {
  useGSAP(() => {
    gsap.to(".star", {
      rotate: 80,
      ease: "power2.in",
      scrollTrigger: {
        scroller: "body",
        // markers: true,
        scrub: 4,
      },
    });

    gsap.to(".rotcan", {
      rotate: 360,
      duration: 100,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div className="main relative w-full h-[180vh] sm:h-[80vh] md:h-[90vh] lg:h-[120vh] bg-[#ff5959] overflow-hidden">
      <img
        className="bg-[#333] w-full object-fill"
        src="red-border.svg"
        alt=""
      />
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="z-[99] select-none relative text-[20vmax] md:text-[12vmax] text-center leading-none font-bold text-[#ffedd7] md:p-4 bebas overflow-hidden">
          MORE FLAVORS
        </h1>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-[#ffedd7] hover:bg-[#333] hover:text-[#ffedd7] duration-300 cursor-pointer z-[999] px-10 py-4 md:py-[10px] md:text-[10px] border-none rounded-[50px]"
        >
          Shop Collection
        </motion.button>
        <div className="flex justify-center">
          <img
            src="red-star-m.png"
            className="absolute z-[1] top-[50%] sm:top-[60%] md:top-[45%] lg:top-[45%] star w-100"
            alt=""
          />
        </div>
      </div>
      <div>
        <img
          src="rotcans.png"
          className="rotcan absolute top-[40%] sm:top-[58%] md:top-[45%] left-1/2 -translate-x-[50%] z-[99] w-[1500px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Blank;
