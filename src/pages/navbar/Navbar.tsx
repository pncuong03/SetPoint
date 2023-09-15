import { FiMenu } from "react-icons/fi";
import { useState } from "react";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-4">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between px-3 lg:px-24 xl:px-28">
        <div className="">
          <img src="/LogoTreaty.svg" className="px-4 w-40 2xl:w-auto" alt="" />
        </div>
        <FiMenu
          className="lg:hidden block h-8 w-6 cursor-pointer px-5"
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block" : "hidden"
          } h-screen lg:h-full w-full lg:flex lg:items-center lg:w-auto lg:shadow-none`}
        >
          <ul className="text-normal text-4xl xl:text-5xl lg:flex lg:justify-between lg:items-center list-none">
            <li>
              <a
                href="#"
                className="lg:px-5 py-2 block hover:text-blue-700 font-inter"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="lg:px-5 py-2 block hover:text-blue-700  font-inter no-underline"
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="lg:px-5 py-2 block  hover:text-blue-700  font-inter no-underline"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#"
                className="lg:px-5 py-2 block hover:text-blue-700  font-inter no-underline"
              >
                Community
              </a>
            </li>
            <li>
              <div className="xl:px-10 ">
                <button className="xl:py-4 xl:px-4 py-2 bg-[#216BEB] font-inter text-4xl xl:text-5xl text-white rounded-[54px]">
                  Buy $TRT
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
