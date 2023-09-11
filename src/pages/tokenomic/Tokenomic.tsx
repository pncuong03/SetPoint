export const Tokenomic = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-[126px] py-20 pt-16 min-h-screen ">
      <div className="">
          <img className="mx-auto my-auto" src="Treaty.svg" alt="" />
          <div className="text-29xl text-center font-inter text-[#595A05] -my-[60px] mx-0">
          Tokenomics
          </div>
        </div>
        <div className="flex flex-col items-center gap-[120px] lg:flex-row lg:items-center lg:justify-around mt-28">
          <div className="flex flex-col gap-[20px] items-center text-center w-[350px] lg:items-start lg:w-[120%]">
            <h1 className="text-4xl lg:text-45xl lg:text-start font-inter font-bold m-0">
            Tokenomics
            </h1>
            <p className="text-4xl lg:text-45xl lg:text-start font-inter font-normal m-0">
            Total Supply 1,000,000,000,000 $TRT Burned: 99%
            </p>
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
