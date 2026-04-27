import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Button = function () {
  return (
    <>
      <div className="flex justify-center mt-2 gap-4 mb-7 sm:ml-6 sm:mr-6 mr-3 ml-3">
        {/* Btn 1 */}
        <MotionLink
          to="/portfolio"
          className="border-[#fda829] justify-center text-[#fda829] text-[clamp(14px,3vw,25px)] 
       border-[1px] w-[48%] flex justify-self-center items-center sm:w-[200px] sm:text-[16px]
       px-8 rounded-full py-3 font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          View My Work
        </MotionLink>

        {/* Btn 2 */}
        <MotionLink
          to="/services"
          className=" w-[48%] hidden shadow-md items-center text-[clamp(14px,3vw,25px)]
          justify-center justify-self-center bg-[#fda829] py-3 px-8 sm:w-[200px] sm:text-[18px] sm:block sm:text-center
          rounded-full  text-white font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          whileHover={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          Services
        </MotionLink>

        {/* Btn 3 */}
        <MotionLink
          to="/contact"
          className=" w-[48%] shadow-md items-center text-[clamp(14px,3vw,25px)]
          justify-center flex justify-self-center bg-[#fda829] py-3 px-8 sm:w-[200px] sm:text-[18px]
          rounded-full  text-white font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          whileHover={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          Contact Me
        </MotionLink>

        {/* End */}
      </div>
    </>
  );
};

export default Button;
