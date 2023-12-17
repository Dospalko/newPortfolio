import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setOffsetY(-rect.top);
    }
  };

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={ref} 
      className="relative flex items-center justify-center overflow-hidden w-full h-screen"
    
    >
      {/* Text Content */}
      <motion.h1
        className="text-white text-6xl z-10"
        style={{ transform: `translateY(${offsetY * -1}px)` }}
      >
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>

      {/* Static Mountains Background */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: "url('/mountains.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      {/* Parallax Stars or Sun */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${type === "services" ? "/stars.png" : "/sun.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offsetY * 1}px)`
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
