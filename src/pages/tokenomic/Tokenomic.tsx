export const Tokenomic = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-[120px] gap-[112px] mt-[10%] bg-tokenomicBg bg-no-repeat md:bg-cover lg:bg-contain">
        <div className="w-[410px] h-[157px] ">
            <img className="mx-auto my-auto" src="Treaty.svg" alt="" />                         
            <div className="text-[48px] text-center font-inter text-[#595A05] -m-16  ">
            Tokenomics
            </div>
          </div>
        <div className="flex flex-col items-center gap-[126px] lg:flex-row lg:items-start lg:justify-around mx-4 lg:mx-8 w-[100%] ">
          <div className="flex flex-col items-center gap-[10px] lg:items-start mt-[10%]">
            <h1 className="text-31xl lg:text-31xl font-inter font-bold m-0 ">
              Tokenomics
            </h1>
            <p className="text-31xl lg:text-31xl font-inter font-normal m-0">
              Total Supply 1,000,000,000,000 $TRT Burned: 99%
            </p>
          </div>
          <div className="lg:flex w-[80%] object-cover">
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
