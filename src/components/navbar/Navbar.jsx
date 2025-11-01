import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { LiaTimesSolid } from "react-icons/lia";
import { FaBars, FaPhone } from "react-icons/fa";
import { useState } from "react";
import Theme from "../theme/Theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/bus", label: "Bus" },
    { href: "/services", label: "Services" },
  ];

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 fixed top-0 right-0 z-40">
      <Link to="/" className="mr-12">
        <img src={Logo} alt="" className="w-24 h-auto object-cover object-center" />
      </Link>

      <button onClick={handleClick} className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-500 ease-in-out flex justify-end items-center">
        {open ? <LiaTimesSolid className="text-xl" /> : <FaBars className="text-xl" />}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          open ? "flex absolute top-14 left-0 w-full h-auto md:h-auto md:relative" : "hidden"
        } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-2 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-neutral-100 md:shadow-none shadow-md rounded-md`}
      >
        <ul className="list-none font-quicksand flex md:items-center items-start gap-5 gap-y-2 flex-wrap md:flex-row flex-col text-base text-neutral-600 dark:text-white font-semibold">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className="hover:text-violet-500 ease-in-out duration-300 transition-all">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex md:items-center items-start gap-x-5 flex-wrap md:flex-row flex-col text-base font-medium text-neutral-800">
          <div className="relative bg-violet-600 rounded-lg px-8 py-2 w-fit cursor-pointer">
            <div className="absolute top-[50%] -left-6 translate-y-[50%] w-9 h-9 rounded-full bg-violet-500 border-4 border-white flex items-center justify-center">
              <FaPhone className="text-neutral-200 text-sm" />
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold">Need Help?</p>
              <p className="text-xs font-normal text-neutral-50 tracking-wide">+91 1234567890</p>
            </div>
          </div>
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
