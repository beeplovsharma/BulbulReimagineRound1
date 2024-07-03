import { motion } from "framer-motion";
import React, { useEffect } from "react";

export default function Loader({ percent, setPercent }) {
  useEffect(() => {
    handleTimer();
  }, []);

  const handleTimer = () =>{
    let time = 0;
    const timerInt = setInterval(() => {
      let rand = Math.floor(Math.random() * 10);
      time += rand;
      if (time > 100) {
        setPercent(100);
        clearInterval(timerInt);
      }
      else{
        setPercent(time);
        // console.log(time);
      }
    }, 300);
  }
  return (
    <>
      <div className="w-full h-screen relative bg-[#ff5959] flex justify-end items-end">
        <motion.span 
        initial={{width:0}}
        animate={{width:`${percent}%`}}
        className="absolute top-0 left-0 w-full h-[100px] bg-white"></motion.span>
        <h1 className="text-white bebas font-bold text-[14vw] p-6">{percent}%</h1>
      </div>
    </>
  );
}
