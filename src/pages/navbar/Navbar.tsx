import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <header className="">
        <nav className="flex justify-between items-center w-[1300px] h-[97px] mx-auto ">
          <div>
            <img
              className="w-[120px] cursor-pointer"
              src="/Logo.svg"
              alt="..."
            />
          </div>
          <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto flex items-center px-5 text-[24px] font-inter">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 list-none">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Tokenomicts
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Roadmap
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Community
                </a>
              </li>
              <li>
                <button className="bg-[#216BEB] text-white px-4 py-3 rounded-[54px] text-[24px] font-inter">
                  Buy $TRT
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </nav>
  );
};
