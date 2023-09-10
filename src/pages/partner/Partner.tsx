export const Partner = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-around gap-10 lg:gap-16 lg:mt-[10%]">
        <div className="hidden lg:block w-[410px] h-[157px">
          <img className="mx-auto my-auto" src="Treaty.svg" alt="" />
          <div className="text-[48px] text-center font-inter text-[#595A05] -m-16 ">
            Partner
          </div>
        </div>
        <img className="hidden lg:flex w-[70%]" src="/Frame-24.svg" alt="" />
      </div>
    </section>
  );
};
