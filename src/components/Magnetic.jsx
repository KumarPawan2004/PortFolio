import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const Magnetic = ({ children, padding = 30 }) => {
  const ref = useRef(null);
  
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  // Spring physics for smooth magnetic snap and release
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block relative z-10"
      style={{ padding: `${padding}px`, margin: `-${padding}px` }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
