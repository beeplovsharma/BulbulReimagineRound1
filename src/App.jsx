import "./App.css";
import Homepage from "./components/Homepage";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flavors from "./components/Flavors";
import Energy from "./components/Energy";
gsap.registerPlugin(useGSAP, ScrollTrigger);
import LocomotiveScroll from "locomotive-scroll";
import About from "./components/About";
import Three from "./components/Three";
import Loader from "./components/Loader";
import { useState } from "react";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [percent, setPercent] = useState(0);
  return (
    <>
      {percent !== 100 ? (
        <Loader percent={percent} setPercent={setPercent} />
      ) : (
        <div className="w-full">
          <Three />
          <Homepage />
          <Energy />
          <div className="z-20 relative">
            <Flavors />
            <About />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
