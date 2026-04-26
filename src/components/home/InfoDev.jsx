import { motion } from "framer-motion";

const InfoDev = () => {
  return (
    <>
      <motion.div
        className="flex justify-center flex-col mx-5 items-center mb-16 mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[27px] font-[600] flex justify-center text-center mx-2 mb-2 items-center">
          Website Developer for Afghan Businesses | Web Developer Kabul
        </h2>
        <p className="flex justify-center items-center text-center">
          As a professional website designer in Afghanistan and web developer
          Afghanistan, I provide complete web solutions for Afghan businesses in
          Kabul and across Afghanistan. Web Development, Logo Design, Social
          Media Poster Design, social media services, and Video Editing - I
          provide all the services Afghan businesses need to succeed online.
        </p>
      </motion.div>
    </>
  );
};

export default InfoDev;