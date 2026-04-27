import { motion } from "framer-motion";



const Container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5
        }
    }
}


const item = {
    hidden: {opacity: 0, y: 50},
    show: {opacity: 1, y: 0, transition: {duration: 0.9}},
}




const SocialLinks = () => {
  return (
    <>
      <motion.div className="flex ml-6 mr-6 gap-3 mb-5"
      variants={Container}
      initial= "hidden"
      whileInView= "show"
      viewport={{once: true}}
      >
        {/* facebook */}
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-8 bg-[#faefde] rounded-lg flex items-center justify-center transition-colors"
          aria-label="Facebook"
          href="https://www.facebook.com/noorulhaq.rahimi.2025"
          variants={item}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-facebook w-7 h-5   text-[#fda829]"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </motion.a>

        {/* linkedin */}
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-8 bg-[#faefde] rounded-lg flex items-center justify-center transition-colors"
          aria-label="LinkedIn"
          href="www.linkedin.com/in/noorulhaq-rahimi-843799397"
          variants={item}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-linkedin w-7 h-5 text-[#fda829]"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </motion.a>

        {/* GitHub */}
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-8 bg-[#faefde] rounded-lg flex items-center justify-center transition-colors"
          aria-label="GitHub"
          href="https://github.com/noorulhaqrahimi"
          variants={item}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-github w-7 h-5 text-[#fda829]"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </motion.a>




        {/* telegram */}
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-8 bg-[#faefde] rounded-lg flex items-center justify-center transition-colors"
          aria-label="Telegram"
          href="https://t.me/Noorulhaq_Rahimi"
          variants={item}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-7 h-5 text-[#fda829]"
          >
            <path
              d="M21.5 3.5 2.8 10.7c-1.2.5-1.2 1.4-.2 1.7l4.5 1.4 1.8 5.7c.2.5.4.7.8.7.3 0 .5-.2.7-.5l2.5-2.5 4.4 3.3c.8.5 1.4.3 1.6-.7l2.6-12.4c.3-1.3-.4-1.9-1.5-1.4Z"
              fill="currentColor"
            ></path>
            <path
              d="M9.2 17.4 9 13.8l7.4-6.7-9.1 5.7"
              fill="none"
              stroke="white"
              stroke-width="1.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </motion.a>
      </motion.div>
    </>
  );
};

export default SocialLinks;
