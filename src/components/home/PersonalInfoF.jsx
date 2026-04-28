import { motion } from "framer-motion";



const Container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5
        }
    }
}


const item = {
    hidden: {opacity: 0, y: 50},
    show: {opacity: 1, y: 0, transition: {duration: 0.9}},
}



const PersonalInfoF = function () {
  return (
    <>
      <motion.div className="ml-6 mr-6 mt-28 mb-6"
      variants={Container}
      initial= "hidden"
      whileInView= "show"
      viewport={{once: true}}
      >
        <motion.h2 className="text-[30px] lg:text-[50px] font-semibold mb-2"
        variants={item}
        >Noorulhaq Rahimi</motion.h2>
        <motion.p className="text-justify font-semibold text-[16px] lg:text-[24px]"
        variants={item}
        >
          I'm Noorulhaq Rahimi and I'm Web Application Developer in Kabul,
          Afghanistan. I build fast, secure, and modern websites and web
          applications for your company.I'm a Full Stack Website and Web
          Application Developer in Kabul, Afghanistan. I build fast, secure, and
          modern websites and web applications for your company.
        </motion.p>
      </motion.div>
    </>
  );
};

export default PersonalInfoF;