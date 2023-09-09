import React from "react";

export const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-[126px] my-[100px]">
        <div className="flex flex-row items-center justify-around gap-[126px] m-auto ">
          <div className=" flex flex-col items-start justify-start gap-[33px] ">
            <h1 className="m-0 text-[40px] font-inter font-bold">
            Welcome to the Treaty community! Experience bursts of luck and
              jackpots. Are you the chosen one to receive the genie's wish?
            </h1>
            <p className="m-0 text-[40px] font-inter font-normal">
            First Memecoin GameFi project on Sui Network
            </p>
            <div className="text-29xl text-white text-center relative">
              <div className="rounded-[48px] bg-[#216BEB] w-[260px] h-[90px]" />
              <div className="absolute top-[16px] left-[32px]">Buy $TRT</div>
            </div>
          </div>
          <div className="w-[190%] object-cover">
            <img
              className=" w-[100%] object-cover"
              alt=""
              src="/vector-smart-object2-4@2x.png"
            />
          </div>
        </div>
      </div>

    </section>
  );
};
