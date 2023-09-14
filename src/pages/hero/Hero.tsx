import React from "react";

export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col px-28 my-3 items-center justify-center ">
        <div className="flex flex-col-reverse items-center gap-[120px] lg:flex-row lg:items-center lg:justify-around">
          <div className="flex flex-col gap-[20px] items-center text-center w-[350px] lg:items-start lg:w-[120%] md:w-[100%]">
            <h1 className="text-4xl md:text-11xl xl:text-12xl 2xl:text-29xl  lg:text-start font-inter font-bold m-0">
              Welcome to the Treaty community! Experience bursts of luck and
              jackpots. Are you the chosen one to receive the genie's wish?
            </h1>
            <p className="text-4xl md:text-11xl  xl:text-12xl 2xl:text-29xl lg:text-start font-inter font-normal m-0">
              First Memecoin GameFi project on Sui Network
            </p>
            <div className="lg:px-0">
              <button className="lg:py-4 lg:px-4 py-2 bg-[#216BEB] font-inter text-4xl md:text-11xl  xl:text-12xl 2xl:text-29xl text-white rounded-[54px]">
                Buy $TRT
              </button>
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
