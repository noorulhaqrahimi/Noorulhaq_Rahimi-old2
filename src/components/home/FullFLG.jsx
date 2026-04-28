import { Link } from "react-router-dom";

const FullFLG = () => {
  return (
    <>
    <div className="lg:flex lg:gap-[400px] lg:justify-center hidden">


    {/* Quick Links */}
      <div className="mr-6 ml-6 mt-9 flex flex-col gap-2">
        <h2 className="text-[20px] font-[600] text-[#fda829] mb-1 lg:text-[30px]">
          Quick
        </h2>
        <Link className="font-semibold text-[17px] lg:text-[20px] lg:mt-2" to="/">
          Home
        </Link>
        <Link className="font-semibold text-[17px] lg:text-[20px] lg:mt-2" to="/about">
          About
        </Link>
        <Link className="font-semibold text-[17px] lg:text-[20px] lg:mt-2" to="/services">
          Services
        </Link>
        <Link className="font-semibold text-[17px] lg:text-[20px] lg:mt-2" to="/portfolio">
          Portfolio
        </Link>
        <Link className="font-semibold text-[17px] lg:text-[20px] lg:mt-2" to="/products">
          Products
        </Link>
        <Link className="font-semibold text-[17px] lg:text-[20px] lg:mt-2" to="/contact">
          Contact
        </Link>
      </div>





      {/* products */}
        <div className="mr-6 ml-6 mt-9 flex flex-col gap-2 lg:text-[30px]">

            <h2 className="text-[20px] font-[600] text-[#fda829] mb-1">My Prouducts</h2>

            <a href="#" className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Nawisa</a>
            <a href="#" className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Calculator</a>
            <a href="#" className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Photography</a>
            <a href="#" className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Image Album</a>
            <a href="#" className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Speculation</a>
            <a href="#" className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Log In Form</a>
            <a href="#" className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Hero Page</a>
        </div>

        {/* contact */}
         <div className="mr-6 ml-6 mt-9 flex flex-col gap-2 lg:text-[30px]">
        <h2 className="text-[20px] font-[600] text-[#fda829] mb-1">Contact</h2>
        <p className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">noorulhaqrahimi11@gmail.com</p>
        <p className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">+93 748 906 077</p>
        <p className="font-semibold text-[17px]  lg:text-[20px] lg:mt-2">Kabul, Afghanistan</p>
      </div>


    </div>
    


      {/* end */}

    </>
  );
};

export default FullFLG;
