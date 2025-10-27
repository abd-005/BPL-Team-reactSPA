import React from "react";
import Logo from "../assets/logo.png";
import Dollar from "../assets/dollar-1.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-[1200px] mx-auto">
        <div className="flex-1">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex gap-2 items-center">
          <span>0</span>
          <span>Coin</span>
          <img src={Dollar} alt="Dollar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
