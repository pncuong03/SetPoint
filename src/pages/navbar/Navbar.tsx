import { FiMenu } from "react-icons/fi";
import { useState } from "react"
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-4">
      <div className="flex items-center justify-between lg:px-[10%] flex-wrap ">
        <div className="">
        <img src="/LogoTreaty.svg" className="w-[300px] m-3 lg:m-0" alt="" />
        </div>
          
          <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer px-10" onClick={()=> setOpen(!open)}/>
            <nav className={`${ open ? "block" : "hidden"} w-full lg:flex flex-col lg:flex-row lg:items-center lg:w-auto `}>
            <ul className="text-normal w-auto text-5xl lg:flex lg:justify-between lg:list-none list-none gap-4">
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700 font-inter">Home</a>
              </li>
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700  font-inter">Tokenomics</a>
              </li>
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700  font-inter">Roadmap</a>
              </li>
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700  font-inter">Community</a>
              </li>
              <li>
                  <a href="#" className="lg:px-5 lg:py-4 py-2 px-4 bg-[#216BEB] font-inter text-white rounded-[54px]">Buy $TRT</a>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
};
