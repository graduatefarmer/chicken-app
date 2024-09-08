import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#FFEFD9] text-black py-8 px-4 md:px-8">
      <div className="max-w-6lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-bold mb-4">Resources</h2>
          <ul className="space-y-2">
            {[
              "About Us",
              "Our Recipes",
              "Contact Us",
              "Terms And Conditions",
              "Privacy Policy",
              "Cancellation / Refund Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white text-[12px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Our Chickens</h2>
          <ul className="space-y-2">
            {[
              "Tender Country Chicken",
              "Queen of Country Chicken",
              "Classic Country Chicken",
              "Warrior Country Chicken",
              "Kadaknath Country Chicken",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white text-[12px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-4">Connect With Us</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center hover:text-white text-[12px]"
              >
                <img
                  className="w-8"
                  src="/assets/social/facebook.png"
                  alt="facebook"
                />
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-white text-[12px]"
              >
                <img
                  className="w-8"
                  src="/assets/social/instagram.png"
                  alt="Instagram"
                />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-white text-[12px]"
              >
                <img
                  className="w-8"
                  src="/assets/social/whatsapp.png"
                  alt="WhatsApp"
                />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center hover:text-white text-[12px]"
              >
                <img
                  className="w-8"
                  src="/assets/social/linkedin.png"
                  alt="WhatsApp"
                />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full border-t border-black py-5 mt-7 flex flex-col items-center ">
        <span className="text-sm">
          © 2024 Graduate Farmer | All rights are reserved
        </span>
        <a
          href="https://redrosesid.in"
          target="_blank"
          className="text-sm flex gap-x-1"
        >
          <span>Developed by</span>{" "}
          <h1 className="font-semibold"> Redrose Sid</h1>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
