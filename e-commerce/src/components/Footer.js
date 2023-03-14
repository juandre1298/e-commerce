import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { paymentLogo } from "../assets"; /* logolight */
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 px-20 font-tittleFont">
      <div className="max-w-screen-x1 mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          {/* <img className="w-32" src={} alt="bags icon" /> */}
          <p>Awesome</p>
          <p className="text-white text-sm tracking-wide">
            awesome-fakeshop.com
          </p>
          <img
            className="w-64"
            src="https://www.graphicpear.com/wp-content/uploads/2016/08/Payment-Icons.jpg"
          />
          <div className="flex gap-5 text-lg text-gray-400">
            {" "}
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2x1 font-semibold text-white mb-4 ">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Fake, Adress, FakeLand</p>
            <p>Mobile: (+08) 00959 9249294</p>
            <p>Phone: (+08) 00959 9249294 </p>
            <p>e-mail: juandre1298@gmail.com </p>
          </div>
        </div>
        <div>
          <h2 className="text-2x1 font-semibold text-white mb-4 ">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
