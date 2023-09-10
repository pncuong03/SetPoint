export const Intro = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center  mx-[120px] gap-[110px]">
        <div className="w-[410px] h-[157px] ">
          <img className="mx-auto my-auto" src="$Treaty.svg" alt="" />
          <div className="text-[48px] text-center font-inter -m-16 text-[#595A05]">
          Why Treaty?
          </div>
        </div>
        <div className="flex flex-col items-center gap-[100px] lg:flex-row lg:items-start lg:justify-around mx-4 lg:mx-8 w-[110%] ">
        <div className="lg:flex w-[100%] object-cover ">
            <img
              className="w-[100%] object-cover rounded-full"
              alt=""
              src="/Vector-Smart-Object2-3.svg"
            />
          </div>
          <div className="flex flex-col items-center gap-[10px] lg:items-start mt-[7%] w-[120%]">
            <h1 className="text-31xl lg:text-31xl font-inter font-bold m-0 ">
            Treaty is a first Memecoin GameFi on Sui Network
            </h1>
            <p className="text-31xl lg:text-31xl font-inter font-normal m-0">
            With a long-term development plan, new themes and many incentives for the community
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
