import React from "react";
import Line from "./Line";
import "../App.css";
function About() {
  return (
    <>
      <div className="relative w-full h-[130vh] md:h-[100vh] bg-[#333333]">
        <div className="absolute w-full top-[-20%] md:top-[-6%] z-[99]">
          <img src="black-border.svg" className="w-full" alt="" />
        </div>
  
        <div>
          <div className="py-16 px-4 bebas leading-none">
            <h1 className="text-[#ffedd7] text-[5vmax] font-bold">
              INTRODUCING
            </h1>
            <h1 className="text-[#ffedd7] text-[10vmax] font-bold">
              THE SPINE-CHILLING
            </h1>
            <h1 className="text-[#ff5959] text-[10vmax] font-bold">
              ENERGY DRINK
            </h1>
            <Line />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
