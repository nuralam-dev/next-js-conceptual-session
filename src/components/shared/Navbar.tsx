import logo from "@/assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] container mx-auto flex justify-between items-center space-y-1.5 mt-2.5 p-2">
      {/* logo */}
      <div className="flex items-center gap-1">
        <Image src={logo} alt="logo" width={30} height={30}></Image>
        <h2 className="bg-gradient-to-r from-[#632DF8] to-[#A020F0] bg-clip-text text-transparent font-bold">
          HERO.IO
        </h2>
      </div>
      {/* nav */}
      <ul className="flex gap-4">
        <li>
          <Link
            href="./"
            className="relative py-1 font-semibold text-gray-800 transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#632DF8] hover:to-[#A020F0] hover:bg-clip-text hover:text-transparent"
          >
            Home
            {/* Hover Gradient Underline */}
            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#632DF8] to-[#A020F0] transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            href="./"
            className="relative py-1 font-semibold text-gray-800 transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#632DF8] hover:to-[#A020F0] hover:bg-clip-text hover:text-transparent "
          >
            Apps
            {/* Hover Gradient Underline */}
            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#632DF8] to-[#A020F0] transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            href="./"
            className="relative py-1 font-semibold text-gray-800 transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#632DF8] hover:to-[#A020F0] hover:bg-clip-text hover:text-transparent "
          >
            Installation
            {/* Hover Gradient Underline */}
            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#632DF8] to-[#A020F0] transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
      {/* btn */}
      <button className="btn bg-gradient-to-r from-[#9747FF] to-[#AB64F6] text-white font-bold">
        <FaGithub />
        Contribute
      </button>
    </div>
  );
};

export default Navbar;
