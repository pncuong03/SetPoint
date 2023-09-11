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
    <div className="font-inter rounded-31xl bg-white flex-1 self-stretch shadow-lg">
      <h5 className="font-inter text-11xl text-[#636363] font-bold mt-[30px] min-w-[400px]">{data.heading}</h5>
      <p className="font-inter text-30xl text-[#00126F] font-medium m-0 mt-16">{data.title}</p>
      <p className="font-inter text-xs text-[#35CE72] font-medium mb-[80px]">{data.des}</p>
      {data.content.length > 0 &&
        data.content.map((subContent, index) => (
          <div className="flex items-center gap-0.5 px-8">
            <img
              className="w-55 h-5 mx-6"
              alt=""
              src="/Check-icon-1.png"
            />
            <p className=" text-secondaryDark font-medium text-mid leading-[100%]" key={index}>{subContent.title}</p>
          </div>
            
    
        ))}
    </div>
  );
};
