import React from "react";

export const Hero = () => {
  return (
    <section>
      <div className="lex flex-col items-center justify-center mx-[126px] my-[70px] lg:h-[700px]">
        <div className="flex flex-col items-center gap-[120px] lg:flex-row lg:items-start lg:justify-around mx-4 lg:mx-8 w-[100%] ]">
          <div className="flex flex-col items-center gap-[30px] lg:items-start mt-[80px]">
            <h1 className=" text-12xl lg:text-12xl font-inter font-bold m-0 ">
              Welcome to the Treaty community! Experience bursts of luck and
              jackpots. Are you the chosen one to receive the genie's wish?
            </h1>
            <p className="text-12xl lg:text-12xl font-inter font-normal m-0">
              First Memecoin GameFi project on Sui Network
            </p>
            <div className="text-12xl text-white text-center relative">
              <div className="rounded-[48px] bg-[#216BEB] w-[200px] h-[70px]" />
              <div className="absolute top-[14px] left-[25px]">Buy $TRT</div>
            </div>
          </div>
          <div className="lg:flex lg:w-[150%] object-cover">
            <img
              className="w-[100%] object-cover"
              alt=""
              src="/vector-smart-object2-4@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
