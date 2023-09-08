
export const Howto = () => {
    return(
        <section>
          <div className="flex flex-col items-center justify-center gap-0">
             <div className="w-[410px] h-[157px] text-aliceblue">
          <img 
            className="mx-auto my-auto" 
            src="Treaty.svg" 
            alt="" 
            />
          <div className="text-[48px] text-center font-medium text-darkolivegreen -m-16 ">
            How to buy
          </div>
        </div>

        <div className="flex flex-row items-center justify-around gap-[80px]">
          <div className=" flex flex-col items-start justify-start w-[850px] h-[307px] gap-[10px] text-[64px]">
            <h1 className="m-0 text-[64px]">$TRT</h1>
            <p className=" m-0">
              We will have IDO on Moku Finance from Global Interlink Ecosystem
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