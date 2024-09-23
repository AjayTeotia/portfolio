{
  /*Import Constants*/
}
import { EXPERIENCES } from "../constants";

{
  /* Import Framer Motion */
}
import { animate, motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="border-b border-neutral-800 p-5 pb-4">
      {/* Title */}
      <motion.h2 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="text-center text-4xl my-20">Experiences</motion.h2>

      {/* Experiences */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year */}
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
              <p className="text-neutral-400 mb-2 text-sm">{experience.year}</p>
            </motion.div>

            {/* Role */}
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>

              {/* Description */}
              <p className="mb-4 text-neutral-400">{experience.description}</p>

              {experience.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-1 py-0.5 lg:px-2 lg:py-1 text-sm font-semibold text-purple-800"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
