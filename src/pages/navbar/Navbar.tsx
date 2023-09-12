import { FiMenu } from "react-icons/fi";
import { useState } from "react"
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-4">
      <div className="flex items-center justify-between px-3 lg:px-40 flex-wrap ">
        <div className="px-4">
        <img src="/LogoTreaty.svg" className="w-56 xl:w-auto" alt="" />
        </div>
          
          <FiMenu className="lg:hidden block h-8 w-6 cursor-pointer px-10" onClick={()=> setOpen(!open)}/>
            <nav className={`${ open ? "block" : "hidden"} w-full 2xl:flex 2xl:items-center 2xl:w-auto shadow-md lg:shadow-none`}>
            <ul className="text-normal lg:text-5xl lg:flex lg:justify-between lg:items-center list-none">
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700 font-inter">Home</a>
              </li>
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700  font-inter no-underline">Tokenomics</a>
              </li>
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700  font-inter no-underline">Roadmap</a>
              </li>
              <li>
                  <a href="#" className="lg:px-5 py-2 block hover:text-blue-700  font-inter no-underline">Community</a>
              </li>
              <li>
                <div className="lg:px-14">
                <button  className="lg:py-4 lg:px-4 py-1.5 bg-[#216BEB] font-inter text-[16px] lg:text-5xl text-white rounded-[54px]">Buy $TRT</button>
                </div>
                 
              </li>

            </ul>
          </nav>
      </div>
    </header>
  );
};
