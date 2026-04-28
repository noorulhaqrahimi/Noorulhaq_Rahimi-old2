import { motion } from "framer-motion";

const ServiceCardLG = () => {
  return (
    <motion.div className="hidden lg:flex lg:justify-center lg:gap-6 lg:px-6"
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.9}}
    viewport={{once: true}}
    >

      {/* Card 1 */}
      <motion.div
        className="lg:w-[400px] hover:border hover:border-[#fda829] hover:rounded-[10px]">
        <div className="w-full rounded-[9px] overflow-hidden shadow bg-white">
          <div className="w-full h-[120px] bg-[#fbd9bd]" />
          <div className="px-4 py-4">
            <h2 className="text-[18px] font-semibold">Website Design</h2>
            <p className="text-[14px] text-gray-500 mt-2">
              Expert website design services...
            </p>
            <motion.button
              className="mt-4 w-full h-[44px] bg-[#fda829] text-white rounded-[9px]"
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div className="lg:w-[400px] hover:border hover:border-[#fda829] hover:rounded-[10px]">
        <div className="w-full rounded-[9px] overflow-hidden shadow bg-white">
          <div className="w-full h-[120px] bg-[#fbd9bd]" />
          <div className="px-4 py-4">
            <h2 className="text-[18px] font-semibold">Website Development</h2>
            <p className="text-[14px] text-gray-500 mt-2">
              Fast, modern websites...
            </p>
            <motion.button className="mt-4 w-full h-[44px] bg-[#fda829] text-white rounded-[9px]"
            whileTap={{ scale: 0.9 }}>
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div className="lg:w-[400px] hover:border hover:border-[#fda829] hover:rounded-[10px]">
        <div className="w-full rounded-[9px] overflow-hidden shadow bg-white">
          <div className="w-full h-[120px] bg-[#fbd9bd]" />
          <div className="px-4 py-4">
            <h2 className="text-[18px] font-semibold">Logo Design</h2>
            <p className="text-[14px] text-gray-500 mt-2">
              Unique logos for your brand...
            </p>
            <motion.button className="mt-4 w-full h-[44px] bg-[#fda829] text-white rounded-[9px]"
            whileTap={{ scale: 0.9 }}>
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div className="lg:w-[400px] hover:border hover:border-[#fda829] hover:rounded-[10px]">
        <div className="w-full rounded-[9px] overflow-hidden shadow bg-white">
          <div className="w-full h-[120px] bg-[#fbd9bd]" />
          <div className="px-4 py-4">
            <h2 className="text-[18px] font-semibold">Social Ads Design</h2>
            <p className="text-[14px] text-gray-500 mt-2">
              High-converting ads...
            </p>
            <motion.button className="mt-4 w-full h-[44px] bg-[#fda829] text-white rounded-[9px]"
            whileTap={{ scale: 0.9 }}>
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default ServiceCardLG;