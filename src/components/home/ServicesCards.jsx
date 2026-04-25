import { motion } from "framer-motion";

const ServicesCards = function () {
  return (
    <>
      <motion.div
        className="w-[310px] flex justify-self-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.9 }}
        viewport={{once: true}}
      >
        <div className="w-f rounded-[9px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white">
          {/* قسمت بالا */}
          <div className="w-full h-[140px] bg-[#fbd9bd]" />

          {/* محتوا */}
          <div className="px-[16px] pt-[14px] pb-[16px]">
            <h2 className="text-[18px] font-semibold text-[#111] leading-[24px]">
              Website Design
            </h2>

            <p className="text-[14px] text-[#6b7280] mt-[6px] leading-[20px]">
              Expert website design services in Kabul, Afghanistan. I create
              custom, responsive websites that look...
            </p>

            {/* دکمه */}
            <motion.button
              className="mt-[12px] w-full h-[44px] bg-[#fda829] 
           hover:bg-[#fda829] text-white text-[14px] 
            font-medium rounded-[9px] transition"
            whileTap={{scale: 0.8}}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ServicesCards;
