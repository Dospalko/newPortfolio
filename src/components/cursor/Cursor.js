import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX - 25, y: e.clientY - 25 }); // Center the cursor
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
    className="cursor w-[50px] h-[50px] bg-transparent rounded-full border border-white fixed z-50 pointer-events-none"
    animate={{ x: position.x, y: position.y }}
    style={{ translateX: '-50%', translateY: '-50%' }}
  ></motion.div>
);
};

export default Cursor;
