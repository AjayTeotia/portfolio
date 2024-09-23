{
  /* Import Constants */
}
import { HERO_CONTENT } from "../constants";

{
  /* Import Profile Picture */
}
import profilePic from "../assets/ajayPfp.jpg";

{
  /* Import Framer Motion */
}
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Title */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl font-thin pb-5 lg:pb-16 tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ajay Teotia
            </motion.h1>

            {/* Subtitle */}
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl p-5 tracking-tight lg:text-4xl"
            >
              MERN Stack Developer
            </motion.span>

            {/* Content */}
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tight p-6"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              src={profilePic}
              alt="Profile Pic"
              className="w-2/3 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
