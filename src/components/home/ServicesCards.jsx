import { motion } from "framer-motion";

const ServicesCards = function () {
  return (
    <>
    <div className="flex mx-1 lg:hidden sm:mr-6 lg:flex-row lg:gap-3 lg:justify-center  sm:ml-6 justify-center items-center flex-col">

       {/* 1 Card Copy */}
      <motion.div
        className="w-[clamp(320px,93vw,620px)] lg:w-[400px] mb-7 sm:w-[clamp(400px,92vw,800px)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="w-full lg:w-[360px] rounded-[9px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white">
          {/* قسمت بالا */}
          <div className="w-full h-[120px] bg-[#fbd9bd]" />

          {/* محتوا */}
          <div className="px-[16px] pt-[14px] pb-[16px]">
            <h2 className="text-[18px] font-semibold text-[#111] leading-[24px]">
              Website Design
            </h2>

            <p className="text-[14px] text-[#6b7280] mt-[6px] leading-[20px]">
              Expert website design services. I create
              custom, responsive websites that look...
            </p>

            {/* دکمه */}
            <motion.button
              className="mt-[12px] w-full h-[44px] bg-[#fda829] 
           hover:bg-[#fda829] text-white text-[14px] 
            font-medium rounded-[9px] transition "
              whileTap={{ scale: 0.8 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* 2 Card Copy */}
      <motion.div
        className="w-[clamp(320px,93vw,620px)] lg:w-[360px] mb-7 sm:w-[clamp(400px,92vw,800px)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="w-full lg:w-[400px] sm:w-[clamp(400px,92vw,800px)] rounded-[9px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white">
          {/* قسمت بالا */}
          <div className="w-full h-[120px] bg-[#fbd9bd]" />

          {/* محتوا */}
          <div className="px-[16px] pt-[14px] pb-[16px]">
            <h2 className="text-[18px] font-semibold text-[#111] leading-[24px]">
              Website Development
            </h2>

            <p className="text-[14px] text-[#6b7280] mt-[6px] leading-[20px]">
             Fast, modern, and responsive websites for
              your business...
            </p>

            {/* دکمه */}
            <motion.button
              className="mt-[12px] w-full h-[44px] bg-[#fda829] 
           hover:bg-[#fda829] text-white text-[14px] 
            font-medium rounded-[9px] transition"
              whileTap={{ scale: 0.8 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>


      {/* 3 Card copy */}
      <motion.div
        className="w-[clamp(320px,93vw,620px)] lg:w-[360px] mb-7 sm:w-[clamp(400px,92vw,800px)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="w-full rounded-[9px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white">
          {/* قسمت بالا */}
          <div className="w-full h-[120px] bg-[#fbd9bd]" />

          {/* محتوا */}
          <div className="px-[16px] pt-[14px] pb-[16px]">
            <h2 className="text-[18px] font-semibold leading-[24px]">
              Logo Design
            </h2>

            <p className="text-[14px] text-[#6b7280] mt-[6px] leading-[20px]">
              Unique, memorable logos that define your brand...
            </p>

            {/* دکمه */}
            <motion.button
              className="mt-[12px] w-full h-[44px] bg-[#fda829] 
           hover:bg-[#fda829] text-white text-[14px] 
            font-medium rounded-[9px] transition"
              whileTap={{ scale: 0.8 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>



      {/* 4 Card copy */}
       <motion.div
        className="w-[clamp(320px,93vw,620px)] lg:w-[360px] mb-7 sm:w-[clamp(400px,92vw,800px)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <div className="w-full rounded-[9px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] bg-white">
          {/* قسمت بالا */}
          <div className="w-full h-[120px] bg-[#fbd9bd]" />

          {/* محتوا */}
          <div className="px-[16px] pt-[14px] pb-[16px]">
            <h2 className="text-[18px] font-semibold text-[#111] leading-[24px]">
              Social Ads Design
            </h2>

            <p className="text-[14px] text-[#6b7280] mt-[6px] leading-[20px]">
              Scroll-stopping ads that boost revenue and turn clicks into profit...
            </p>

            {/* دکمه */}
            <motion.button
              className="mt-[12px] w-full h-[44px] bg-[#fda829] 
           hover:bg-[#fda829] text-white text-[14px] 
            font-medium rounded-[9px] transition"
              whileTap={{ scale: 0.8 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
      {/* End */}

    </div>
    </>
  );
};

export default ServicesCards;