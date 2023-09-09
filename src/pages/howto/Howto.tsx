export const Howto = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center mx-[120px] gap-[110px] my-[100px]">
        <div className="w-[410px] h-[157px] ">
          <img className="mx-auto my-auto" src="Treaty.svg" alt="" />
          <div className="text-[48px] text-center font-inter text-darkolivegreen -m-16 ">
            How to buy
          </div>
        </div>
        <div className="flex flex-row items-center justify-around gap-[126px]  m-auto ">
          <div className=" flex flex-col items-start justify-start gap-[10px]">
            <h1 className="m-0 text-[50px] font-inter font-bold">$TRT</h1>
            <p className="m-0 text-[50px] font-inter font-normal">
              We will have IDO on Moku Finance from Global Interlink Ecosystem
            </p>
          </div>
          <div className="w-[90%] object-cover">
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
