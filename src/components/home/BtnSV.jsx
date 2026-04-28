import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const BtnSV = ()=> {
    return(
        <>
        <motion.div className="flex justify-center items-center "
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.9}}
        viewport={{once: true}}
        whileHover={{scale: 1.1}}
        >
         <Link
              to="/services"
              className="border-[#fda829] justify-center text-[#fda829] text-[clamp(14px,3vw,25px)] 
       border-[2px] w-[50%] flex justify-self-center items-center lg:w-[300px] lg:mt-[60px]
       px-8 rounded-full py-3 font-semibold"
            >
              View All Services
            </Link>
        </motion.div>
        </>
    )
}


export default BtnSV;