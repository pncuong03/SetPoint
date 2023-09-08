export const Intro = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-0">
        <div className="w-[495px] h-[165px]">
          <img className="mx-auto my-auto" src="$Treaty.svg" alt="" />
          <div className="text-[48px] text-center font-medium text-darkolivegreen -m-16 ">
            Why Treaty?
          </div>
        </div>

        <div className="flex flex-row items-center justify-around gap-[110px]">
          <img
            className="w-[782px] h-[903px] object-cover rounded-full"
            alt=""
            src="/Vector-Smart-Object2-3.svg"
          />
          <div className=" flex flex-col items-start justify-start h-[300px] w-[850px] gap-[30px]">
            <h1 className=" text-[64px] m-0">
              Treaty is a first Memecoin GameFi on Sui Network
            </h1>
            <p className=" text-[64px] m-0">
              With a long-term development plan, new themes and many incentives
              for the community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
