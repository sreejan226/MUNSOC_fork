import { StaticImageData } from "next/image";
import React from "react";
import "@/app/index.css";
import InView from "../motion/in-view";

function CarouselCard({
  Img,
  Name,
  Position,
}: {
  Img: StaticImageData;
  Name: string;
  Position: string;
}) {
  return (
    <InView>
      <div className="my-slide w-64 rounded-lg ml-3 flex-col border-2 border-black carou-card cursor-default transition-transform duration-500 hover:scale-[1.02] hover:shadow-md">
        <div className="mx-auto w-44 mt-4 h-52 overflow-hidden rounded-lg border-2 border-black">
          <img
            src={Img.src}
            alt={Name}
            className="w-full object-cover object-top h-full"
          />
        </div>
        <div className="flex w-full justify-center items-center text-lg mt-4 font-bold font-serif">
          <h1>{Name}</h1>
        </div>
        <div className="flex w-full justify-center items-center text-md p-2 font-semibold">
          <h1>{Position}</h1>
        </div>
        <div className="flex w-full justify-center items-center text-lg pb-2 font-semibold">
          <h1>MUNSOC</h1>
        </div>
      </div>
    </InView>
  );
}

export default CarouselCard;
