import { motion } from "framer-motion";


const WhatssapContact = () => {
  return (
    <>
        <motion.a
      href="https://wa.me/93748906077?text=سلام،%20وقت%20شما%20بخیر.%20من%20از%20طریق%20وبسایت%20شما%20با%20خدمات‌تان%20آشنا%20شدم%20و%20علاقه‌مند%20هستم%20در%20مورد%20همکاری%20یا%20دریافت%20خدمات%20بیشتر%20معلومات%20بگیرم.%20لطفاً%20در%20صورت%20امکان%20راهنمایی%20بفرمایید.%20سپاس"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 rounded-full shadow-xl"
      
      animate={{
        scale: [1, 1.1, 1],   // 👈 بزرگ و کوچک
      }}
      transition={{
        duration: 1.5,        // سرعت
        repeat: Infinity,     // تکرار بی‌نهایت
        ease: "easeInOut",
      }}
    >
      <img
        src="/logos/whatssap.png"
        alt="whatsapp"
        className="w-[55px]"
      />
    </motion.a>

    </>
  );
};

export default WhatssapContact;
