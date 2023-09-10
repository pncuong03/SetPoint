import { roadmapData } from "../../constant"
import { RoadmapCard } from "./RoadmapItem"

export const Roadmap = () => {
    return(
        <section>
            <div className="flex flex-col items-center justify-center gap-12 my-10 mx-2 lg:mx-8 mt-[10%]">
            <div className="w-full max-w-[410px]">
          <img 
            className="mx-auto my-auto" 
            src="Treaty.svg" 
            alt="" 
            />
          <div className="text-29xl text-center font-inter text-[#595A05] -m-16 ">
          Roadmap
          </div>
        </div>
            <div className="flex flex-col lg:flex-row items-center align-text-top text-center gap-4 m-[50px] w-[100%]">
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