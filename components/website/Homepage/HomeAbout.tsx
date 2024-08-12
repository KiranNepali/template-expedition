import React from "react";

type Props = {};

export default function HomeAbout({}: Props) {
  return (
    <div className="w-full py-[5rem]">
      <div className="w-full relative border-b-2 border-spacing-10  border-dotted border-zinc-300 mb-5  pb-[7rem] flex justify-center items-center overflow-visible">
        <div className="w-full flex justify-center items-center flex-col gap-2">
          <h1 className="font-semibold uppercase text-[3vw]">Logo</h1>
          <p className=" w-[70%] text-center mx-auto text-[2vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            dignissimos, quia distinctio vel eaque similique tempore quasi
            obcaecati suscipit? Sunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Esse, voluptates.
          </p>
        </div>

        {/* experience  */}
        <div className="absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-1/2 flex justify-center items-center gap-5 ">
          <div className="w-[12vw] h-[12vw] rounded-full border-2 border-spacing-10 border-dotted border-zinc-300  bg-white p-4 flex flex-col gap-1 justify-center items-center">
            <span className="font-semibold text-[2vw]">96%</span>
            <span className="text-center text-sm font-medium text-zinc-700">Expedition success rate</span>
          </div>
          <div className="w-[12vw] h-[12vw] rounded-full border-2 border-spacing-10 border-dotted border-zinc-300  bg-white p-4 flex flex-col gap-1 justify-center items-center">
            <span className="font-semibold text-[2vw]">90%</span>
            <span className="text-center text-sm font-medium text-zinc-700">Climber summit rate</span>
          </div>
          <div className="w-[12vw] h-[12vw] rounded-full border-2 border-spacing-10 border-dotted border-zinc-300  bg-white p-4 flex flex-col gap-1 justify-center items-center">
            <span className="font-semibold text-[2vw]">200+</span>
            <span className="text-center text-sm font-medium text-zinc-700">Total Expedition over 8000m</span>
          </div>
        </div>
      </div>
    </div>
  );
}
