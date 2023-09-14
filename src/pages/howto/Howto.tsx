export const Howto = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-24 py-20 pt-16 min-h-screen">
        <div className="">
          <img className="w-[300px] sm:w-[400px]" src="Treaty.svg" alt="" />
          <div className="text-12xl sm:text-29xl text-center font-inter text-[#595A05] -my-[45px] sm:-my-[60px] mx-0">
            How to buy
          </div>
        </div>
        <div className="flex flex-col-reverse items-center gap-[120px] lg:flex-row lg:items-center lg:justify-around mt-28">
          <div className="flex flex-col gap-[10px] items-center text-center w-[350px] lg:items-start lg:w-[110%] md:w-[100%]">
            <h1 className="text-4xl md:text-11xl lg:text-12xl 2xl:text-45xl lg:text-start font-inter font-bold m-0">
              $TRT
            </h1>
            <p className="text-4xl md:text-11xl lg:text-12xl 2xl:text-45xl lg:text-start font-inter font-normal m-0 ">
              We will have IDO on Moku Finance from Global Interlink Ecosystem
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
