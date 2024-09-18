"use client";
import { Heart, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sidebar]);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-[#A4243D] px-4 md:px-8 lg:px-[60px] h-[80px]">
        <div className="flex items-center space-x-4 cursor-pointer">
          <Menu
            color="white"
            size={25}
            className=""
            onClick={() => setSidebar(!sidebar)}
          />
          <Link className="text-white" href="/">
            SHOP
          </Link>
        </div>
        <div className="logo w-20">
          <img src="/assets/logo/logo.png" alt="logo" className="w-full" />
        </div>
        <Heart color="white" size={20} />
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
          sidebar ? "opacity-100 z-[998]" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebar(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-[#A4243D] z-[999] transition-transform duration-300 ease-in-out ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white w-full h-[60px] flex justify-center items-center font-semibold">
          <span>Graduate Farmers</span>
        </div>
        <div className="w-full h-full px-5 pt-5 flex justify-center">
          <div className="text-white font-light flex flex-col space-y-3">
            <Link href={"/"}>Our Offerings</Link>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/privacy-policy"}>Privacy Policy</Link>
            <Link href={"/terms-and-condition"}>Terms & Condition</Link>
            <Link href={"/contact-us"}>Contact Us</Link>
            <Link href={"/blog"}>Blog</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
