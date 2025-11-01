import React from "react";
import { motion, scale } from "framer-motion";
import Bus2 from "../../../assets/bus5.png";

const Hero = () => {
  const imageVariants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "3%",
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="w-full h-screen lg:px-28 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col hero relative">
      <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-11">
        <motion.div className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}>
          <motion.div className="space-y-5" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: "linear", delay: 0.2 }}>
            <motion.h1 className="text-5xl lg:text-6xl font-semibold text-neutral-50 leading-[1.15] font-quicksand">
              Reserve Your Bus <span className="text-violet-600 tracking-wider">Ticket</span>
            </motion.h1>
            <motion.p className="text-neutral-50 font-quicksand font-medium text-sm lg:text-base leading-7" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: "linear", delay: 0.1 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio dolorem aliquid nemo.
            </motion.p>
          </motion.div>

          <motion.button className="w-fit bg-violet-700 px-6 py-3 rounded-md hover:bg-violet-600 font-semibold text-white cursor-pointer">Reserve Now</motion.button>
        </motion.div>
        <div className="w-[60%] h-full rounded-lg flex items-end justify-end absolute top-0 right-0">
          <motion.img src={Bus2} alt="bus img" className="w-full  object-contain" initial="initial" animate="animate" transition={{ duration: 2, ease: "linear", delay: 0.2 }} variants={imageVariants}></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
