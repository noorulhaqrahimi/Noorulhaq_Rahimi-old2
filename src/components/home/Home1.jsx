import { useState, useEffect } from "react";

const Home1 = () => {
  const texts = [
    "Top Website Designer",
    "Profissional Web Developer",
    "Professional Frontend Developer",
    "React Tailwind Expert",
    "Professional Logo Designer",
    "Top Graphic Designer",
    "Profissional Video Editor",
    "Social Media Poster Designer",
  ];

  const [index, setIndex] = useState(0); 
  const [displayText, setDisplayText] = useState(""); 
  const [charIndex, setCharIndex] = useState(0); 

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50); 

      return () => clearTimeout(timeout);
    } else {
  
      const wait = setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setDisplayText("");
        setCharIndex(0);
      }, 2000);

      return () => clearTimeout(wait);
    }
  }, [charIndex, index]);

  return (
    <div className="flex flex-col items-center mt-[90px] lg:mt-[110px]">
      <h1 className="text-[clamp(18px,4vw,35px)] mb-1 font-semibold">
        Website Developer in Afghanistan
      </h1>

      <p
        className="
        text-orange-500 text-[clamp(18px,4vw,25px)] mt-[clamp(15px,4vw,35px)] font-semibold
        transform transition-all duration-500
        translate-y-0 opacity-100
      "
        key={index}
      >
        {displayText}
        <span className="animate-pulse ">|</span>
      </p>
      <div className="text-[clamp(10px,3vw,18px)] mt-7 bg-[#FAF6F5] py-[2px] text-orange-500 px-2 rounded-full border-[1px]">
        Website Developer For Afghan Businesses | Web Developer Kabul
      </div>
      <div className="mt-1">
        <p className="text-justify p-6 text-[clamp(18px,4vw,23px)]">
          I'm a professional website designer in Afghanistan and web developer
          based in Kabul, with one years of experience creating websites and
          web applications for Afghan businesses worldwide. I offer website
          design, Website development, Logo Design, Social Media Banner Design,
          Video Editor, Graphic Designer, and Ads Editor For Social Media. If you’re looking for a
          website freelancer in Kabul (or want online website design in Kabul),
          we can work remotely with a clear plan and fast delivery.
        </p>
      </div>
    </div>
  );
};

export default Home1;
