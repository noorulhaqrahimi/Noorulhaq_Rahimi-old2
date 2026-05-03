import React from "react";

export default function ImageSlider() {
  return (
    <div className=" m-7 mt-[35px] lg:w-[620px] lg:absolute lg:bottom-[1px]
    lg:left-[750px] flex justify-self-center items-center overflow-hidden
    rounded-xl shadow-md">
      <img
        src="/images/Noorulhaq.jpg"
        alt="noorulhaq rahimi"
        className="w-[clamp(300px,20vw,1300)] sm:w-[600px] md:w-[744px]
        shadow-sm shadow-[0_4px_12px_rgba(253,168,41,0.08)]  transition-opacity"
      />
    </div>
  );
}