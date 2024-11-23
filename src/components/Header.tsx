import React from "react";
import { IoNotifications } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="p-3 bg-white shadow-sm h-20 flex ">
      <nav className="flex gap-4 items-center justify-around w-full">
        <div>
          <FaPinterest className="h-6 w-6 text-red-600" />
        </div>

        <div className="font-semibold text-gray-800">Home</div>
        <div className="font-semibold text-gray-800">Explore</div>
        <div className="font-semibold text-gray-800">Create</div>
        <div className="bg-slate-200 rounded-full p-1 w-1/4">
          <div className="flex gap-1 items-center text-gray-900">
            <FaSearch color="#8e8e8e" /> Explore
          </div>
        </div>
        <div>
          <IoNotifications className="h-6 w-6 text-gray-500" />
        </div>
        <div>
          <IoChatbubbleEllipsesSharp className="h-6 w-6 text-gray-500" />
        </div>
        <div>
          <CgProfile className="h-6 w-6 text-gray-500 " />
        </div>
        <div>
          <IoIosArrowDown className="h-6 w-6 text-gray-500" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
