import React from "react";
import Line from "./Line";
import "../App.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import FramerMagnetic from "./FramerMagnetic";
function About() {
  return (
    <>
      <div className="relative w-full h-[100vh] md:h-[70vh] bg-[#333333]">
        <div className="top-layer w-full absolute top-[-20%] sm:top-[-36px] z-[99]">
          <img
            src="black-border.svg"
            className="w-full object-contain"
            alt=""
          />
        </div>

        <div className="flex flex-col">
          <div className="py-16 px-4 bebas leading-none select-none">
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

          <div className="px-4 flex gap-6">
            <FramerMagnetic>
              <button className="bg-[#ffedd7] p-3 rounded-full">
                <a target="_blank" href="https://www.facebook.com/RedBull/">
                  <FaFacebookF size={32} />
                </a>
              </button>
            </FramerMagnetic>
            
            <FramerMagnetic>
              <button className="bg-[#ffedd7] p-3 rounded-full">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/red-bull/"
                >
                  <FaLinkedinIn size={32} />
                </a>
              </button>
            </FramerMagnetic>

            <FramerMagnetic>
              <button className="bg-[#ffedd7] p-3 rounded-full">
                <a
                  target="_blank"
                  href="https://www.instagram.com/redbull/?hl=en"
                >
                  <AiFillInstagram size={32} />
                </a>
              </button>
            </FramerMagnetic>

            <FramerMagnetic>
              <button className="bg-[#ffedd7] p-3 rounded-full">
                <a target="_blank" href="https://x.com/redbull">
                  <BsTwitterX size={32} />
                </a>
              </button>
            </FramerMagnetic>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
