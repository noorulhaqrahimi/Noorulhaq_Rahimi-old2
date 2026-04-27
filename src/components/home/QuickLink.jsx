import { Link } from "react-router-dom";

const QuickLink = () => {
  return (
    <>
      <div className="mr-6 ml-6 mt-9 flex flex-col gap-2">
        <h2 className="text-[20px] font-[600] text-[#fda829] mb-1">
          Quick Links
        </h2>

        {/* Links */}
        <Link className="font-semibold text-[17px]" to="/">Home</Link>
        <Link className="font-semibold text-[17px]" to="/about">About</Link>
        <Link className="font-semibold text-[17px]" to="/services">Services</Link>
        <Link className="font-semibold text-[17px]" to="/portfolio">Portfolio</Link>
        <Link className="font-semibold text-[17px]" to="/products">Products</Link>
        <Link className="font-semibold text-[17px]" to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default QuickLink;