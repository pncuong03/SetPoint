import { roadmapData } from "../../constant"
import { RoadmapCard } from "./RoadmapItem"

export const Roadmap = () => {
    return(
        <section >
            <div className="flex flex-row align-text-top text-center gap-[20px] m-[50px] ">

        {
            roadmapData.map((item) => 
            <RoadmapCard data={item} key={item.id}/>
            )
        }
        </div>
        </section>
    ) 
    
}