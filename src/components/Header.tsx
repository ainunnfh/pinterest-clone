import React from "react";
import { IoNotifications } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="p-3 bg-white shadow-sm h-20 flex items-center justify-around">
      <div>
        <FaPinterest />
      </div>
      <div>Home</div>
      <div>Explore</div>
      <div>Create</div>
      <div className="bg-slate-200 rounded-full p-1 w-1/4">
        <div className="flex gap-1 items-center text-[#8e8e8e]">
          <FaSearch color="#8e8e8e" /> Explore
        </div>
      </div>
      <div>
        <IoNotifications />
      </div>
      <div>
        <IoChatbubbleEllipsesSharp />
      </div>
      <div>
        <CgProfile />
      </div>
      <div>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default Header;
