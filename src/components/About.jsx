{
  /* Import About Image */
}
import aboutImg from "../assets/about.jpg";

{
  /* Import About Text */
}
import { ABOUT_TEXT } from "../constants";

{
  /* Import Framer Motion */
}
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      {/* Title */}
      <div className="my-10 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </div>

      {/*About Image*/}
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center p-5">
            <img src={aboutImg} alt="about image" className="rounded-2xl" />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2">
          <div className="flex justify-center p-5 lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
