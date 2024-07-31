import "./App.css";
import Homepage from "./components/Homepage";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flavors from "./components/Flavors";
import Energy from "./components/Energy";
import LocomotiveScroll from "locomotive-scroll";
import About from "./components/About";
import Three from "./components/Three";
import Loader from "./components/Loader";
import { useState } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const scroll = new LocomotiveScroll();

  const [percent, setPercent] = useState(0);
  return (
    <>
      {percent !== 100 ? (
        <Loader percent={percent} setPercent={setPercent} />
      ) : (
        <>
          <Three />
          <Homepage />
          <Energy />
          <div className="z-20 relative">
            <Flavors />
            <About />
          </div>
        </>
      )}
    </>
  );
}

export default App;
