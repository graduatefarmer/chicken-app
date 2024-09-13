import { Heart, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-[#A4243D] px-4 md:px-8 lg:px-[60px] h-[80px]">
      <div className="flex items-center space-x-4">
        <Menu color="white" size={25} />
        <Link className="text-white" href={"/"}>
          SHOP
        </Link>
      </div>
      <div className="logo w-20">
        <img src="/assets/logo/logo.png" alt="logo" className="w-full" />
      </div>
      <Heart color="white" size={20} />
    </div>
  );
};

export default Navbar;
