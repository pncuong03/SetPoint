import { roadmapData } from "../../constant";
import { RoadmapCard } from "./RoadmapItem";

export const Roadmap = () => {
  return (
    <section className="px-4">
      <div className="flex flex-col items-center justify-around gap-10 mt-8 lg:gap-16 lg:mt-[10%]">
        <div className="">
          <img className="mx-auto my-auto" src="Treaty.svg" alt="" />
          <div className="text-29xl text-center font-inter text-[#595A05] -my-[60px] mx-0">
            Roadmap
          </div>
        </div>
        <div className="flex flex-wrap items-center text-center gap-4 mt-12 ">
          {roadmapData.map((item) => (
            <RoadmapCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
