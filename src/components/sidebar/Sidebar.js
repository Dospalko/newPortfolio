import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/links";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(40px at 48px 48px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <motion.div className="flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
        <motion.div className="z-10 fixed top-0 left-0 bottom-0 w-[300px] bg-white" variants={variants}>
          <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    );
  };
  

export default Sidebar;