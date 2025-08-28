import React from 'react';
import logo from '../assets/logo.webp';
import instagram_icon from "../assets/instagram.png";
import facebook_icon from "../assets/facebook.png";
import whatsapp_icon from "../assets/whatsapp.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px] py-10 px-4 bg-white">
      
      {/* Logo Section */}
      <div className="flex items-center gap-[20px]">
        <img src={logo} alt="Logo" className="w-[50px] h-[50px]" />
        <p className="text-[#383838] text-[40px] font-bold">Swaybuy</p>
      </div>

      {/* Links */}
      <ul className="flex gap-[50px] text-[#252525] text-[20px] list-none flex-wrap justify-center">
        <Link to="/About"><li className="cursor-pointer">About</li></Link>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Help</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-[20px]">
        <div className="p-2 pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] rounded">
          <img src={instagram_icon} alt="Instagram" className="h-[30px] w-[30px]" />
        </div>
        <div className="p-2 pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] rounded">
          <img src={facebook_icon} alt="Facebook" className="h-[30px] w-[30px]" />
        </div>
        <div className="p-2 pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] rounded">
          <img src={whatsapp_icon} alt="WhatsApp" className="h-[30px] w-[30px]" />
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>© 2023 - All Rights Reserved</p>
      </div>
    </div>
  );
}
