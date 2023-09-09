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
    <div className="font-inter rounded-31xl bg-white w-[500px] h-[796px] shadow-lg">
      <h5 className="font-inter text-11xl text-[#636363] font-bold ">{data.heading}</h5>
      <p className="font-inter text-30xl text-[#00126F] font-medium m-0">{data.title}</p>
      <p className="font-inter text-xs text-[#35CE72] font-medium mb-[100px]">{data.des}</p>
      {data.content.length > 0 &&
        data.content.map((subContent, index) => (
          
            <p className="text-[17px] text-secondaryDark font-medium font-sans leading-[150%] gap-[20px]" key={index}>{subContent.title}</p>
    
        ))}
    </div>
  );
};
