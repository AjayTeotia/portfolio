{
  /* Import Constants */
}
import { PROJECTS } from "../constants";

{
  /* Import Framer Motion */
}
import { animate, motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 p-5">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl my-20"
      >
        Project
      </motion.h2>

      {/* Projects */}
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/*Project Image*/}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                height={200}
                width={200}
                className="mb-6 rounded"
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/*Project Title*/}
              <h6 className="font-semibold mb-2">{project.title}</h6>

              {/*Project Description*/}
              <p className="text-neutral-400 mb-4">{project.description}</p>

              {/* Project Technologies */}
              {project.technologies.map((technology, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-1 py-0.5 lg:px-2 lg:py-1 text-sm font-medium text-purple-900"
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

export default Project;
