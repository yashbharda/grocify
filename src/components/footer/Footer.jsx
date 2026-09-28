import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 md:py-20 py-10">
      <div className="flex flex-wrap gap-y-12 max-w-350 mx-auto px-10">
        <div className="flex-1 basis-75">
          <a className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-175">
            Bred for a high content of beneficial substances.
            <br /> Our products are all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6">2026 &copy; All Rights Reserved</p>
        </div>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>

          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-orange-500">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>

          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-orange-500">
              Support Center
            </a>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-6">
            <a href="" className="text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            {" "}
            Question or Feedback?
            <br /> we'd love to hear from you.
          </p>
          <div className="flex p-1 rounded-lg mt-6">
            <input
              type="email"
              name="email"
              id="emai"
              autoComplete="off"
              placeholder="Email Address"
              className="h-[6vh] pl-4 flex-1 bg-white rounded-l-lg focus: outline-none" 
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 p-2 rounded-r-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
