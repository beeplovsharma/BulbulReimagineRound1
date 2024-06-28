import React from "react";
import Line from "./Line";
import "../App.css";
function About() {
  return (
    <>
      <div className="relative w-full h-[100vh] md:h-[70vh] bg-[#333333]">
       <div className="top-layer w-full absolute top-[-20%] sm:top-[-36px] z-[99]">
          <img src="black-border.svg" className="w-full object-contain" alt="" />
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
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
