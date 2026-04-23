import { useEffect, useState } from "react";

const images = [
  "/images/Noorulhaq.jpg",
  "/images/Noorulhaq.jpg",
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in
      }, 2000);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" m-7 mt-[35px] flex justify-self-center items-center overflow-hidden rounded-xl shadow-md">
      <img
        src={images[index]}
        alt="slider"
        className={`w-[clamp(300px,20vw,1300)] shadow-sm shadow-[0_4px_12px_rgba(253,168,41,0.08)]  transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}