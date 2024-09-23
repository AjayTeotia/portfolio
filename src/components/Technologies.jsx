{
  /*Import Icons*/
}
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJs } from "react-icons/fa";

{
  /* Import Framer Motion */
}
import { animate, motion } from "framer-motion";

const iconsVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Title */}
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h2>

      {/* Technologies Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/*React Icon*/}
        <motion.div
          variants={iconsVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/*Node Icon*/}
        <motion.div
          variants={iconsVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <RiNodejsLine className="text-7xl text-green-500" />
        </motion.div>

        {/*MongoDB Icon*/}
        <motion.div
          variants={iconsVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/*Express Icon*/}
        <motion.div
          variants={iconsVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiExpress className="text-7xl " />
        </motion.div>

        {/*Tailwind Icon*/}
        <motion.div
          variants={iconsVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiTailwindcss className="text-7xl text-cyan-500" />
        </motion.div>

        {/*HTML Icon*/}
        <motion.div
          variants={iconsVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiHtml5 className="text-7xl text-red-500" />
        </motion.div>

        {/*CSS Icon*/}
        <motion.div
          variants={iconsVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        {/*JS Icon*/}
        <motion.div
          variants={iconsVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <FaJs className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
