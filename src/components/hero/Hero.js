import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="z-0 h-[100vh] overflow-hidden bg-[linear-gradient(180deg, #0c0c1d, #111132)] relative flex items-center justify-center">
      <div className="w-full max-w-[1366px] z-40 px-4">
        <motion.div
          className="w-[50%] h-[100%] z-40 2xl:gap-[20px] 2xl:items-center 2xl:text-center flex flex-col justify-center gap-[40px]"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="text-[30px]">
            Dominik Palo
          </motion.h2>
          <motion.h1 className="text-[88px] " variants={textVariants}>
            Full stack web developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              className="p-[20px] border-2 border-white rounded-full bg-transparent text-white mr-[20px] hover:bg-white hover:text-black transition duration-200 ease-in-out pointer font-semibold"
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="p-[20px] border-2 border-white rounded-full bg-transparent text-white mr-[20px] hover:bg-white hover:text-black transition duration-200 ease-in-out pointer font-semibold"
              variants={textVariants}
            >
              Contact Me
            </motion.button>{" "}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            className="w-[50px] ml-20 mt-0"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute -z-1 text-[50vh] bottom-[-20px] whitespace-nowrap text-white/10 w-1/2 font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        FULLSTACK
      </motion.div>
      <div className="h-[100%] absolute top-0 right-0">
        <img
          className="w-[100%] h-[100%] object-cover"
          src="/hero.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
