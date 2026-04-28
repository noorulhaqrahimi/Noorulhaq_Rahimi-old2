import { motion } from "framer-motion";

const CardsPCY = () => {
  return (
    <>
      <div className="flex justify-center items-center justify-self-center flex-wrap sm:gap-[clamp(12px,3vw,24px)]
      sm:ml-6 sm:mr-6 mx-4 gap-[clamp(12px,4vw,24px)] mt-[clamp(20px,5vw,40px)] lg:left-[-450px] lg:relative">
        {/* کارت ۱ */}
        <motion.div
          className="rounded-xl border border-border/50 bg-card/50 
        h-[clamp(80px,20vw,100px)] w-[clamp(90px,27vw,200px)] text-center
        shadow-sm shadow-[0_4px_12px_rgba(253,168,41,0.08)] md:h-[clamp(100px,15vw,500px)] md:w-[clamp(140px,27vw,500px)]
        flex flex-col justify-center items-center lg:w-[120px] lg:h-[90px]"
        initial={{opacity: 0, y: 80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.9,delay: 0.2}}
        whileHover={{ scale: 0.90 }}
        viewport={{once: true}}
        >
          <p className="text-[clamp(24px,4vw,24px)] lg:text-[20px] md:text-[30px] font-bold text-foreground">
            7+
          </p>
          <p className="text-[clamp(11px,2.5vw,13px)] lg:text-[12px] md:text-[14px] md:text-[14px] tracking-wide text-muted-foreground uppercase mt-1">
            Projects
          </p>
        </motion.div>

        {/* کارت ۲ */}
        <motion.div
          className="rounded-xl border border-border/50 bg-card/50 
        h-[clamp(80px,20vw,100px)] w-[clamp(90px,27vw,200px)] text-center
        shadow-sm shadow-[0_4px_12px_rgba(253,168,41,0.08)] md:h-[clamp(100px,15vw,500px)] md:w-[clamp(140px,27vw,500px)]
        flex flex-col justify-center items-center lg:w-[120px] lg:h-[90px]"
        initial={{opacity: 0, y: 80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.9, delay: 0.6}}
        whileHover={{ scale: 0.90 }}
        viewport={{once: true}}
        >
          <p className="text-[clamp(24px,4vw,24px)] lg:text-[20px] md:text-[30px] font-bold text-foreground">
            5+
          </p>
          <p className="text-[clamp(11px,2.5vw,13px)] lg:text-[12px] md:text-[14px] tracking-wide text-muted-foreground uppercase mt-1">
            CLIENTS
          </p>
        </motion.div>

        {/* کارت ۳ */}
        <motion.div
          className="rounded-xl border border-border/50 bg-card/50 
        h-[clamp(80px,20vw,100px)] w-[clamp(90px,27vw,200px)] text-center
        shadow-sm shadow-[0_4px_12px_rgba(253,168,41,0.08)] md:h-[clamp(100px,15vw,500px)] md:w-[clamp(140px,27vw,500px)]
        flex flex-col justify-center items-center lg:w-[120px] lg:h-[90px]"
        initial={{opacity: 0, y: 80}}
        whileInView={{opacity: 1, y: 0 }}
        transition={{duration: 0.9, delay: 0.9}}
        whileHover={{scale: 0.90}}
        viewport={{once: true}}
        >
          <p className="text-[clamp(24px,4vw,24px)] lg:text-[20px] md:text-[30px] font-bold text-foreground">
            1+
          </p>
          <p className="text-[clamp(11px,2.5vw,13px)] lg:text-[12px] md:text-[14px] tracking-wide text-muted-foreground uppercase mt-1">
            YEARS
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default CardsPCY;
