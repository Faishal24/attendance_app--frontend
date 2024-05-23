import React from "react";
import { AiOutlineBell, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import Profile from "/profile.png"

const Header = () => {
  return (
    <div>
      <header
        style={{ borderBottom: "1px solid #cbd5e1" }}
        className="fixed left-64 right-0 h-16 bg-slate-100 text-slate-500 flex flex-row items-center justify-between z-10 px-6"
      >
        <AiOutlineMenu  style={{fontSize: 20}}/>
        <div className="flex flex-row items-center justify-around">
          <AiOutlineBell  style={{ fontSize: 20}}/>
          <div className="w-px bg-slate-300 h-9 mx-5"></div>
          <img src={Profile} style={{width: 40, borderRadius: 50}}/>
        </div>
      </header>
    </div>
  );
};

export default Header;
