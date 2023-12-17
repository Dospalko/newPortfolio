import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Service = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      className="bg-[linear-gradient(180deg, #0c0c1d, #111132)] flex flex-col justify-center items-center h-screen"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "visible" : "initial"}
    >
      <motion.div className="flex-1 flex self-end  items-center gap-[20px]" variants={variants}>
        <p className="font-bold text-[20px] mt-1 text-gray-200 text-right">
          I focus on creating new AI ideas
          <br /> and move forward
        </p>
        <hr className="w-[500px]  boder-t-1 border-gray-200" />
      </motion.div>
      <motion.div className="flex-1 flex flex-col items-center" variants={variants}>
        <div className="flex items-center gap-[50px]">
          <img src="/people.webp" className="w-[300px] h-[100px] rounded-[50px] object-cover" alt="" />
          <h1 className="text-[96px] font-thin">
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="flex-2 flex gap-[40px] items-center mb-20">
          <h1 className="text-[96px] font-thin">
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button className="w-[300px] h-[100px] rounded-xl border-none bg-orange-400 text-[24px] pointer">WHAT WE DO?</button>
        </div>
      </motion.div>
      {/* <motion.div className="flex-2 flex max-w-[1200px] m-auto" variants={variants}>
        <motion.div
          className="p-[50px] border-[0.5px] boder-solid border-gray flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p classname="font-bold text-[20px] text-gray text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className="p-[10px] bg-orange-700 border-none pointer">Go</button>
        </motion.div>
        <motion.div
          className="p-[50px] border-[0.5px] boder-solid border-gray flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p classname="font-bold text-[20px] text-gray text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className="p-[10px] bg-orange-700 border-none pointer">Go</button>
        </motion.div>
        <motion.div
          className="p-[50px] border-[0.5px] boder-solid border-gray flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p classname="font-bold text-[20px] text-gray text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className="p-[10px] bg-orange-700 border-none pointer">Go</button>
        </motion.div>
        <motion.div
          className="p-[50px] border-[0.5px] boder-solid border-gray flex flex-col justify-between"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p classname="font-bold text-[20px] text-gray text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button className="p-[10px] bg-orange-700 border-none pointer">Go</button>
        </motion.div>
      </motion.div> */}
    </motion.div>
  );
};

export default Service;