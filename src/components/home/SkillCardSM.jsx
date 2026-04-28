import { motion } from "framer-motion";

const Container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const SkillCardSM = () => {
  return (
    <>
      <motion.div className="mt-[80px] hidden  sm:mr-6 sm:ml-6 sm:flex sm:justify-center sm:items-center sm:flex-col"
      variants={Container}
      initial= "hidden"
      whileInView= "show"
      viewport={{once: true}}
      >
        <motion.h2 variants={item} className="text-[clamp(12px,6vw,35px)] lg:mb-9 md:text-4xl font-semibold mb-7 text-center"
        >
          Languages and Tools
        </motion.h2>
        <motion.div
        variants={item}>
            {/* 1 */}
        <div className="sm:flex sm:mr-6 sm:ml-6 sm:gap-6 mb-5">
          {/* copy 1 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/html.svg" className="w-[60px]" alt="html" />
            <p>HTML5</p>
          </div>

          {/* copy 2 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/css.svg" className="w-[60px]" alt="css" />
            <p>CSS3</p>
          </div>

          {/* copy 3 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/js.svg" className="w-[60px]" alt="javascript" />
            <p>JavaScript</p>
          </div>
        </div>

        {/* 2 */}
        <div className="sm:flex sm:mr-6 sm:ml-6 sm:gap-6 mb-5">
          {/* copy 1 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/react.svg" className="w-[60px]" alt="react" />
            <p>React</p>
          </div>

          {/* copy 2 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img
              src="/logos/tailwind.svg"
              className="w-[60px]"
              alt="tailwind css"
            />
            <p>Tailwind</p>
          </div>

          {/* copy 3 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/ts.svg" className="w-[60px]" alt="typescript" />
            <p>TypeScript</p>
          </div>
        </div>




        {/* 3 */}
         <div className="sm:flex sm:mr-6 sm:ml-6 sm:gap-6 mb-5">
          {/* copy 1 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/figma.svg" className="w-[60px]" alt="figma" />
            <p>Figma</p>
          </div>

          {/* copy 2 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img
              src="/logos/photoshop.svg"
              className="w-[60px]"
              alt="photoshop css"
            />
            <p>Photoshop</p>
          </div>

          {/* copy 3 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/illustrator.svg" className="w-[60px]" alt="illustrator" />
            <p>Illustrator</p>
          </div>
        </div>



        {/* 4 */}
         <div className="sm:flex sm:mr-6 sm:ml-6 sm:gap-6 mb-5">
          {/* copy 1 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/indesign.svg" className="w-[60px]" alt="indesign" />
            <p>Indesign</p>
          </div>

          {/* copy 2 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img
              src="/logos/lightroom.svg"
              className="w-[60px]"
              alt="lightroom css"
            />
            <p>Lightroom</p>
          </div>

          {/* copy 3 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/premiere.svg" className="w-[60px]" alt="premiere" />
            <p>Premiere</p>
          </div>
        </div>


        {/* 5 */}
         <div className="sm:flex sm:mr-6 sm:ml-6 sm:gap-6 mb-5">
          {/* copy 1 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img src="/logos/audition.svg" className="w-[60px]" alt="audition" />
            <p>Audition</p>
          </div>

          {/* copy 2 */}
          <div
            className="sm:shadow-sm sm:shadow-[0_8px_18px_rgba(253,168,41,0.08)] sm:border sm:rounded-[11px]
        sm:border-[rgba(0,0,0,0.17)] sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1 sm:h-[120px]
         sm:w-[clamp(130px,27vw,300px)]"
          >
            <img
              src="/logos/git.svg"
              className="w-[60px]"
              alt="git css"
            />
            <p>Git</p>
          </div>
        </div>
        </motion.div>
        {/* end */}
      </motion.div>
    </>
  );
};

export default SkillCardSM;
