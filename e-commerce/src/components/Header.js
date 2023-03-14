import React from "react";
import { Link } from "react-router-dom";
import { bagIcon, bagsIcon, cart, profile } from "../assets/index";

const Header = () => {
  return (
    <div className="w-ful p-8 h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
        <Link to="/" className="logo">
          <img src={bagsIcon} alt="bags icon" />
          <p>Awesome</p>
        </Link>
        <div className="flex item-center gap-8">
          <ul className="flex item-center gap-8">
            <li className="text-base text-black front-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black front-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black front-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black front-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black front-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <div className="relative flex item-center gap-5">
            <img className="w-6 h-6" src={bagIcon} alt="cartImg" />
            <span className="absolute w-6 top-1 left-0 text-sm flex items-center justify-center font-semibold">
              0
            </span>
            <img
              className="w-8 h-8 rounded-full"
              src={profile}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
