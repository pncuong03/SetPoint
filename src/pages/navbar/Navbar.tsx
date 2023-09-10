import React from "react";

export const Navbar = () => {
  return (
    <nav className="lg:flex items-center mx-[150px] ">
      <div className="lg:flex lg:flex-wrap lg:gap-[250px] lg:justify-around">
        <div className="flex items-center lg:ml-4">
          <img src="/Logo.svg" className="h-8 mr-3" alt="" />
        </div>
        <div className="w-full md:w-auto md:flex md:items-center md:gap-4">
          <ul className="font-inter text-5xl flex gap-4 lg:flex-row list-none">
            <li>
              <a href="#" className="text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black no-underline">
                Tokenomicts
              </a>
            </li>
            <li>
              <a href="#" className="text-black no-underline">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="text-black no-underline">
                Community
              </a>
            </li>
            <li>
              <button className="text-black bg-[#216BEB] px-2 py-2 rounded-[54px] text-5xl font-inter no-underline mt-0">
                Buy $TRT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
