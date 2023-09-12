import React from "react";

export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col px-28 my-3 items-center justify-center ">
        <div className="flex flex-col items-center gap-[120px] lg:flex-row lg:items-center lg:justify-around">
          <div className="flex flex-col gap-[20px] items-center text-center w-[350px] lg:items-start lg:w-[120%] md:w-[100%]">
            <h1 className="text-4xl md:text-11xl lg:text-12xl 2xl:text-29xl  lg:text-start font-inter font-bold m-0">
              Welcome to the Treaty community! Experience bursts of luck and jackpots. Are you the chosen one to receive the genie's wish?
            </h1>
            <p className="text-4xl md:text-11xl lg:text-12xl 2xl:text-29xl lg:text-start font-inter font-normal m-0">
              First Memecoin GameFi project on Sui Network
            </p>
            <div className="text-4xl lg:text-12xl text-white lg:items-start text-center relative">
              <div className="rounded-[48px] bg-[#216BEB] w-[110px] h-[50px] lg:w-[200px] lg:h-[70px]" />
              <div className="absolute top-[14px] left-[10px] lg:left-[20px] font-inter">Buy $TRT</div>
            </div>
          </div>
          <div className="lg:flex w-[100%] lg:w-[100%] object-cover">
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