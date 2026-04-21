import { Link } from "react-router-dom";

const Button = function () {
  return (
    <>
      <div className="flex justify-center mt-7 gap-4 mb-[30px]">
        <Link to="/portfolio"
         className="border-[#fda829] text-[#fda829] text-[15px] border-[1px]  py-3 px-8 rounded-full font-semibold">
          View My Work
        </Link>
        <Link to="/contact"
               className=" shadow-md bg-[#fda829] py-3 px-8 rounded-full text-[15px] text-white font-semibold">
          Contact Me
        </Link>
      </div>
    </>
  );
};

export default Button;