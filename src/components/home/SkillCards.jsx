import { motion } from "framer-motion";


const SkillCards = () => {
  return (
    <>
      <div className="mt-[80px]">
        <h2 className="text-[clamp(12px,6vw,35px)] md:text-4xl font-semibold mb-7 text-center">
          Languages and Tools
        </h2>
        {/* 1 */}
        <div className="flex justify-center gap-6 mb-6">
          {/* 1 copy */}
          <div
            className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]"
          >
            <img src="/logos/html.svg" alt="html5" className="w-[clamp(35px,9vw,80px)] mb-1" />
            <p className="text-[16px]">HTML5</p>
          </div>
          {/* 2 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]"  
          >
            <img src="/logos/css.svg" alt="css3" className="w-[clamp(35px,9vw,80px)] mb-1" />
            <p className="text-[16px]">CSS3</p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex justify-center gap-5 mb-6">
          {/* 1 copy */}
          <div
            className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/js.svg"
              alt="javascript"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">JavaScript</p>
          </div>
          {/* 2 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img src="/logos/react.svg" alt="react" className="w-[clamp(35px,9vw,80px)] mb-1" />
            <p className="text-[16px]">React</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex justify-center gap-5 mb-6">
          {/* 1 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/tailwind.svg"
              alt="Tailwind css"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">Tailwind</p>
          </div>
          {/* 2 copy */}
          <div
          className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/ts.svg"
              alt="Typescript"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">TypeScript</p>
          </div>
        </div>
        {/* 4 */}
        <div className="flex justify-center gap-5 mb-6">
          {/* 1 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img src="/logos/figma.svg" alt="figma" className="w-[clamp(35px,9vw,80px)] mb-1" />
            <p className="text-[16px]">Figma</p>
          </div>
          {/* 2 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/photoshop.svg"
              alt="photoshop"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">Photoshop</p>
          </div>
        </div>
        {/* 5 */}
        <div className="flex justify-center gap-5 mb-6">
          {/* 1 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/illustrator.svg"
              alt="illustrator"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">Illustrator</p>
          </div>
          {/* 2 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/indesign.svg"
              alt="indesign"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">InDesign</p>
          </div>
        </div>
        {/* 6 */}
        <div className="flex justify-center gap-5 mb-6">
          {/* 1 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/lightroom.svg"
              alt="Lightroom"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">Lightroom</p>
          </div>
          {/* 2 copy */}
          <div
            className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/premiere.svg"
              alt="Premiere"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">Premiere</p>
          </div>
        </div>
        {/* 7 */}
        <div className="flex justify-center gap-5 mb-6">
          {/* 1 copy */}
          <div
           className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img
              src="/logos/audition.svg"
              alt="audition"
              className="w-[clamp(35px,9vw,80px)] mb-1"
            />
            <p className="text-[16px]">Audition</p>
          </div>
          {/* 2 copy */}
          <div
            className="bg-white h-[clamp(90px,20vw,300px)] rounded-[11px] flex justify-center items-center flex-col border border-[rgba(0,0,0,0.17)]
                shadow-sm shadow-[0_8px_18px_rgba(253,168,41,0.08)] w-[clamp(140px,40vw,550px)]" 
          >
            <img src="/logos/git.svg" alt="git" className="w-[clamp(35px,9vw,80px)] mb-1" />
            <p className="text-[16px]">Git</p>
          </div>
        </div>
        {/* Cards End */}
      </div>
    </>
  );
};

export default SkillCards;