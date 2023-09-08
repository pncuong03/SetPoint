import React from "react";

export const Hero = () => {
  return (
    // <section>
    //   <div className="flex flex-row items-center justify-around gap-[70px] text-29xl m-auto">
    //     <div className=" flex flex-col items-start justify-start w-[845px] gap-[30px]">
    //       <h1 className=" text-[50px] m-0">
    //         Welcome to the Treaty community! Experience bursts of luck and
    //         jackpots. Are you the chosen one to receive the genie's wish?
    //       </h1>
    //       <p className="m-0">First Memecoin GameFi project on Sui Network</p>
    //       <div className="w-[287px] h-[90px] text-29xl text-white relative">
    //         <div className="rounded-[48px] bg-royalblue w-[287px] h-[90px]" />
    //         <div className="absolute top-[16px] left-[32px]">Buy $TRT</div>
    //       </div>
    //     </div>
    //     <img
    //       className="w-[698px] h-[806px] object-cover"
    //       alt=""
    //       src="/vector-smart-object2-4@2x.png"
    //     />
    //   </div>
    // </section>
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-around gap-[80px] text-29xl m-auto ">
          <div className=" flex flex-col items-start justify-start w-[845px] h-[324px] gap-[33px]">
            <h1 className="m-0 text-[50px]">
              Welcome to the Treaty community! Experience bursts of luck and
              jackpots. Are you the chosen one to receive the genie's wish?
            </h1>
            <p className="m-0 text-[50px]">
              First Memecoin GameFi project on Sui Network
            </p>
            <div className="w-[287px] h-[90px] text-29xl text-white relative">
              <div className="rounded-[48px] bg-royalblue w-[287px] h-[90px]" />
              <div className="absolute top-[16px] left-[32px]">Buy $TRT</div>
            </div>
          </div>
          <img
            className="w-[698px] h-[806px] object-cover"
            alt=""
            src="/vector-smart-object2-4@2x.png"
          />
        </div>
      </div>
    </section>
  );
};
