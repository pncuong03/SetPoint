export const Tokenomic = () => {
    return(
        <section>
          <div className="flex flex-col items-center justify-center gap-0">
             <div className="w-[410px] h-[157px] text-aliceblue">
          <img 
            className="mx-auto my-auto" 
            src="Treaty.svg" 
            alt="" 
            />
          <div className="text-[48px] text-center font-medium text-darkolivegreen -m-16">
            Tokenomics
          </div>
        </div>
        <div className="flex flex-row items-center justify-around gap-[80px] text-29xl m-auto ">
          <div className=" flex flex-col items-start justify-start w-[850px] h-[394px] gap-[10px]">
            <h1 className="m-0 text-[64px]">Tokenomics</h1>
            <p className="m-0 text-[55px]">
              Total Supply 1,000,000,000,000 $TRT Burned: 99%
            </p>
          </div>
          <img
            className="w-[698px] h-[806px] object-cover"
            alt=""
            src="/vector-smart-object2-4@2x.png"
          />
        </div>
        </div>
        </section>
    ) 
    
}