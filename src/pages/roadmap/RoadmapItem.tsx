import React from "react";

interface Item {
  title: string;
}

interface RoadmapCardPorps {
  data: {
    id: number;
    heading: string;
    title: string;
    des: string;
    content: Item[];
  };
}

export const RoadmapCard = ({ data }: RoadmapCardPorps) => {
  return (
    <div className="rounded-[50px] bg-slate-400 w-[500px] h-[796px]">
      <h5 className="text-[30px] text-[#636363] font-[700] ">{data.heading}</h5>
      <p className="text-[45px] text-[#00126F] font-[500] m-0">{data.title}</p>
      <p className="text-[12px] text-[#35CE72] font-[500] mb-[100px]">{data.des}</p>
      {data.content.length > 0 &&
        data.content.map((subContent, index) => (
          <p className="text-[17px] text-primary-dark font-[500] font-sans leading-[150%]" key={index}>{subContent.title}</p>
        ))}
    </div>
  );
};
