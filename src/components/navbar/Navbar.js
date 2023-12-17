import Sidebar from "../sidebar/Sidebar";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="h-[100px]">
      {/* Sidebar */}
      <Sidebar/>
      {/* <div className="max-w-[1366px] m-auto flex items-center justify-between h-[100%]">
        <motion.span
          className="bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lama Dev
        </motion.span>
        <div className="flex gap-[20px]">
          <a href="#">
            <img src="/facebook.png" className="w-[18px] h-[18px]" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" className="w-[18px] h-[18px]" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png"className="w-[18px] h-[18px]" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" className="w-[18px] h-[18px]" alt="" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;