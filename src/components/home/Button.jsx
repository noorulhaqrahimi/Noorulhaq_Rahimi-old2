import { Link } from "react-router-dom";

const Button = function () {
  return (
    <>
      <div className="flex justify-center mt-5 gap-4 mb-7 mr-3 ml-3">
        <Link to="/portfolio"
         className="border-[#fda829] justify-center text-[#fda829] text-[14px] 
         border-[1px] w-[80%] flex justify-self-center items-center px-8 rounded-full font-semibold">
          View My Work
        </Link>
        <Link to="/contact"
               className=" w-[80%] shadow-md items-center text-[14px] justify-center flex justify-self-center bg-[#fda829] py-3 px-8
               rounded-full  text-white font-semibold">
          Contact Me
        </Link>
      </div>
    </>
  );
};

export default Button;