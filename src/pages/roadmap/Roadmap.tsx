import { roadmapData } from "../../constant"
import { RoadmapCard } from "./RoadmapItem"

export const Roadmap = () => {
    return(
        <section >
            <div className="flex flex-col items-center justify-center gap-[70px] my-[150px]">
            <div className="w-[410px] h-[157px] ">
          <img 
            className="mx-auto my-auto" 
            src="Treaty.svg" 
            alt="" 
            />
          <div className="text-29xl text-center font-inter text-darkolivegreen -m-16 ">
          Roadmap
          </div>
        </div>
            <div className="flex flex-row align-text-top text-center gap-[20px] m-[50px] w-[100%]">
        {
            roadmapData.map((item) => 
            <RoadmapCard  data={item} key={item.id}/>
            )
        }
        </div>
        </div>
        </section>
    ) 
    
}