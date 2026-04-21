import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isopen, setIsopen] = useState(false);
  const location = useLocation(); // ✅ مهم

  return (
    <>
      {/* Navbar Top */}
      <div className="bg-white/50 w-full lg:h-[80px] lg:justify-evenly h-[60px] z-10 shadow-md flex backdrop-blur-lg items-center justify-between px-4 fixed top-0">
        <div className="flex items-center gap-3">
          <p className="text-[20px] font-semibold lg:text-[24px]">Noorulhaq Rahimi</p>
          <img
            src="/images/night-mode.png"
            alt="darkIcon"
            className="w-[25px] lg:ml-4 lg:w-[30px]"
          />
        </div>

        <button
          className="text-2xl mx-2 lg:hidden"
          onClick={() => setIsopen(!isopen)}
        >
          {isopen ? "✕" : "☰"}
        </button>
        <ul className="lg:flex hidden  gap-3 text-lg">
          {/* Home */}
          <li>
            <Link
              to="/"
              onClick={() => setIsopen(false)}
              className={`block w-full px-4 lg:px-6 lg:py-2 lg:text-[16px] rounded-xl ${
                location.pathname === "/"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              Home
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/about"
              onClick={() => setIsopen(false)}
              className={`block w-full lg:px-6 lg:py-2 lg:text-[16px] px-4  rounded-xl ${
                location.pathname === "/about"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              About
            </Link>
          </li>

          {/* Services */}
          <li>
            <Link
              to="/services"
              onClick={() => setIsopen(false)}
              className={`block w-full lg:px-6 lg:py-2 lg:text-[16px] px-4  rounded-xl ${
                location.pathname === "/services"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              Services
            </Link>
          </li>

          {/* Portfolio */}
          <li>
            <Link
              to="/portfolio"
              onClick={() => setIsopen(false)}
              className={`block w-full px-4 lg:px-6 lg:py-2 lg:text-[16px] rounded-xl ${
                location.pathname === "/portfolio"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              Portfolio
            </Link>
          </li>

          {/* Products */}
          <li>
            <Link
              to="/products"
              onClick={() => setIsopen(false)}
              className={`block w-full px-4 lg:px-6 lg:py-2 lg:text-[16px] rounded-xl ${
                location.pathname === "/products"
                  ? "bg-gray-200 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              Products
            </Link>
          </li>

          {/* Contact Button */}
          <li className=" flex justify-center">
            <Link
              to="/contact"
              onClick={() => setIsopen(false)}
              className=" px-5 text-center  bg-[#fda829] text-white  lg:px-7 lg:py-2 lg:ml-16 rounded-full font-semibold shadow-md hover:bg-[#fda829] transition"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isopen && (
        <div className="fixed inset-0 top-[60px] left-0 w-full bg-white/80 backdrop-blur-md px-4 py-6 z-50">
          <ul className="flex flex-col gap-3 text-lg">
            {/* Home */}
            <li>
              <Link
                to="/"
                onClick={() => setIsopen(false)}
                className={`block w-full px-4 py-3 rounded-xl ${
                  location.pathname === "/"
                    ? "bg-gray-200 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                onClick={() => setIsopen(false)}
                className={`block w-full px-4 py-3 rounded-xl ${
                  location.pathname === "/about"
                    ? "bg-gray-200 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                About
              </Link>
            </li>

            {/* Services */}
            <li>
              <Link
                to="/services"
                onClick={() => setIsopen(false)}
                className={`block w-full px-4 py-3 rounded-xl ${
                  location.pathname === "/services"
                    ? "bg-gray-200 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                Services
              </Link>
            </li>

            {/* Portfolio */}
            <li>
              <Link
                to="/portfolio"
                onClick={() => setIsopen(false)}
                className={`block w-full px-4 py-3 rounded-xl ${
                  location.pathname === "/portfolio"
                    ? "bg-gray-200 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                Portfolio
              </Link>
            </li>

            {/* Products */}
            <li>
              <Link
                to="/products"
                onClick={() => setIsopen(false)}
                className={`block w-full px-4 py-3 rounded-xl ${
                  location.pathname === "/products"
                    ? "bg-gray-200 font-medium"
                    : "hover:bg-gray-100"
                }`}
              >
                Products
              </Link>
            </li>

            {/* Contact Button */}
            <li className="mt-4 flex justify-center">
              <Link
                to="/contact"
                onClick={() => setIsopen(false)}
                className="w-[95%] text-center bg-[#fda829] text-white py-3 rounded-full font-semibold
                 shadow-md hover:bg-[#fda829] transition"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;