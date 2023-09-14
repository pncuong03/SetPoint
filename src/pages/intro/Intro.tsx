export const Intro = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-24 py-20 pt-16 min-h-screen"> 
      <div className="">
          <img className="w-[300px] sm:w-[400px]" src="$Treaty.svg" alt="" />
          <div className="text-12xl sm:text-29xl text-center nt-inter text-[#595A05] -my-[45px] sm:-my-[60px] mx-0">
          Why Treaty?
          </div>
        </div>
        <div className="flex flex-col items-center gap-[120px] lg:flex-row lg:items-center lg:justify-around mt-28">
        <div className="lg:flex w-[100%] lg:w-[100%] object-cover">
            <img
              className="w-[100%] object-cover rounded-full"
              alt=""
              src="/Vector-Smart-Object2-3.svg"
            />
          </div>
          <div className="flex flex-col gap-[20px] items-center text-center w-[350px] lg:items-start lg:w-[120%] md:w-[100%] lg:pt-8">
            <h1 className="text-4xl md:text-11xl lg:text-12xl 2xl:text-45xl lg:text-start font-inter font-bold m-0">
            Treaty is a first Memecoin GameFi on Sui Network
            </h1>
            <p className="text-4xl md:text-11xl lg:text-12xl 2xl:text-45xl lg:text-start font-inter font-normal m-0">
            With a long-term development plan, new themes and many incentives for the community
            </p>
            <div className="text-4xl lg:text-12xl text-white lg:items-start text-center relative">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
