import React from "react";
import { IoNotifications } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Header1 = () => {
  return (
    <header className="p-3 bg-white shadow-sm h-20 flex flex-col ">
      <nav className="flex items-center flex-row justify-around w-full text-gray-500 mx-auto">
        <div>
          <FaPinterest color="red" className="h-7 w-7" />
        </div>

        <div className="">
          <ul className="flex flex-col  ">
            <li>Home</li>
            <li>Explore</li>
            <li>Create</li>
          </ul>
        </div>

        <div className="flex gap-1 items-center bg-slate-200 rounded-full p-2">
          <FaSearch />
          Explore
        </div>

        <div className="flex gap-1">
          <div className="">
            <IoNotifications className="h-7 w-7" />
          </div>
          <div>
            <IoChatbubbleEllipsesSharp className="h-7 w-7" />
          </div>
          <div>
            <CgProfile className="h-7 w-7" />
          </div>
          <div>
            <IoIosArrowDown className="h-7 w-7" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header1;
