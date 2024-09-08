import { Heart, Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#A4243D] px-4 md:px-8 lg:px-[120px] py-4">
      <Menu color="white" size={20} />
      <div className="logo w-16">
        <img src="/assets/logo/logo.png" alt="logo" className="w-full" />
      </div>
      <Heart color="white" size={20} />
    </div>
  );
};

export default Navbar;
