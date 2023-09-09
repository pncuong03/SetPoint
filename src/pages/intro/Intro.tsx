export const Intro = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-[105px] my-[150px] gap-[110px]">
        <div className="w-[495px] h-[165px]">
            <img className="mx-auto my-auto" src="$Treaty.svg" alt="" />
            <div className="text-[48px] text-center font-inter text-darkolivegreen -m-16 ">
              Why Treaty?
            </div>
          </div>
        <div className="flex flex-row items-center justify-around gap-[80px] m-auto">
        <div className=" w-[50%] object-cover">
            <img
              className="w-[100%] object-cover rounded-full"
              alt=""
              src="/Vector-Smart-Object2-3.svg"
            />
          </div>
          <div className=" flex flex-col items-start justify-start gap-[33px] m-0 w-[50%]">
            <h1 className="m-0 text-[50px] text-inter fold-bold">
            Treaty is a first Memecoin GameFi on Sui Network
            </h1>
            <p className="m-0 text-[50px] text-inter font-normal">
            With a long-term development plan, new themes and many incentives
              for the community
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};
