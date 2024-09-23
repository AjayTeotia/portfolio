{
  /*Import Logo*/
}
import logo from "../assets/ajLogo.png";

{
  /*Import Social Icons*/
}
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

{
  /*Import Constants*/
}
import { SOCIALLINK } from "../constants";

{
  /* Import Framer Motion */
}
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mb-10 py-3  ">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-shrink-0 items-center"
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "120px", height: "120px" }}
        />
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="flex items-center justify-center gap-4 m-8 text-xl lg:text-2xl"
      >
        {/* LinkedIn Icon*/}
        <a href={SOCIALLINK.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        {/* Github Icon*/}
        <a href={SOCIALLINK.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        {/* Instagram Icon*/}
        <a
          href={SOCIALLINK.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        {/* Twitter Icon*/}
        <a href={SOCIALLINK.twitter} target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>

        {/* Leetcode Icon*/}
        <a href={SOCIALLINK.leetcode} target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>
      </motion.div>
    </nav>
  );
};

export default Navbar;
