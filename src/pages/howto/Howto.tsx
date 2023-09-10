export const Howto = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-[120px] gap-[110px] mt-[10%]">
        <div className="w-[410px] h-[157px] ">
          <img className="mx-auto my-auto" src="Treaty.svg" alt="" />
          <div className="text-[48px] text-center font-inter text-[#595A05] -m-16 ">
            How to buy
          </div>
        </div>
        <div className="flex flex-col items-center gap-[126px] lg:flex-row lg:items-start lg:justify-around mx-4 lg:mx-8 w-[100%] ">
          <div className="flex flex-col items-center gap-[10px] lg:items-start mt-[10%]">
            <h1 className="text-31xl md:text-30xl lg:text-31xl font-inter font-bold m-0 ">
              $TRT
            </h1>
            <p className="text-31xl md:text-30xl lg:text-31xl font-inter font-normal m-0">
              We will have IDO on Moku Finance from Global Interlink Ecosystem
            </p>
          </div>
          <div className="lg:flex w-[95%] object-cover">
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
