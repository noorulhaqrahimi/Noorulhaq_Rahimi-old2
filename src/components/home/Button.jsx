import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Button = function () {
  return (
    <>
      <div className="flex justify-center mt-2 gap-4 mb-7 mr-3 ml-3">
        <MotionLink
          to="/portfolio"
          className="border-[#fda829] justify-center text-[#fda829] text-[clamp(14px,3vw,25px)] 
       border-[1px] w-[48%] flex justify-self-center items-center
       px-8 rounded-full py-3 font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 0.90 }}
          >
          View My Work
        </MotionLink>
        <MotionLink
          to="/contact"
          className=" w-[48%] shadow-md items-center text-[clamp(14px,3vw,25px)]
          justify-center flex justify-self-center bg-[#fda829] py-3 px-8
          rounded-full  text-white font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          whileHover={{ scale: 0.90 }}
        >
          Contact Me
        </MotionLink>
      </div>
    </>
  );
};

export default Button;