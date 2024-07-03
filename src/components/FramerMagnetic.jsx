import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react'

function FramerMagnetic({children}) {
    const ref = useRef(null)
    const [position, setPosition] = useState({x:0,y:0})

    const mouseMove = (e) => {
        const {clientX, clientY} = e;
        const {width, height,left,top} = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({x, y})
    }
    const mouseLeave = (e) => {
        setPosition({x:0,y:0});
    }
    const {x,y} = position;
  return (
    <motion.div 
    onMouseMove={mouseMove}
    onMouseLeave={mouseLeave}
    animate={{x,y}}
    transition={{type:'spring',stiffness:180,damping:15,mass:0.1}}
    ref={ref} className=''>
        {children}
    </motion.div>
  )
}

export default FramerMagnetic