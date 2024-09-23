{
  /* Import Constants */
}
import { CONTACT } from "../constants";

{
  /* Import Framer Motion */
}
import { animate, motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-20 p-5">
      {/* Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl my-10"
      >
        Get In Touch
      </motion.h2>

      {/* Content */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        {/* Contact Phone Number */}
        <p className="my-4">{CONTACT.phoneNo}</p>

        {/* Contact Email */}
        <a href={`mailto:{CONTACT.email}`} className="border-b ">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
