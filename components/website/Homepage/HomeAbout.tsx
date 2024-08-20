import Image from "next/image";
import React from "react";

type Props = {};

export default function HomeAbout({}: Props) {
  return (
    <div className="w-10/12 mx-auto  mb-[5rem]  border-b-2 border-spacing-10  border-dotted  relative">
      <div className="grid w-full grid-cols-2 gap-x-5">
        <div className="relative flex justify-center  items-center">
          {/* Brush Image */}
          <div className="w-[75vw] h-[40vw] relative flex justify-center items-center overflow-hidden">
            {/* Hero Image */}
            <Image
              src="/Hero.jpg"
              alt="Hero Image"
              className=" w-[50vw] h-[40vw] object-cover object-center"
              width={5000}
              height={5000}
            />
            <Image
              alt="Brush Stroke"
              src="/brush.avif"
              className="w-[50vw]  h-[40vw] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] mix-blend-screen"
              width={5000}
              height={5000}
            />
          </div>
        </div>

        <div className="w-full relative   border-zinc-300 mb-5   flex justify-center items-center overflow-visible">
          <div className="w-full  relative z-20 flex   justify-center items-start  flex-col gap-2">
            <h1 className="font-semibold uppercase text-[3vw]">Logo</h1>
            <p className="z-40  text-[1.5vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis dignissimos, quia distinctio vel eaque similique
              tempore quasi obcaecati suscipit? Sunt. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse, voluptates.
            </p>
          </div>
        </div>
      </div>
      {/* experience  */}
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2 translate-y-1/2 flex justify-center items-center gap-5 ">
        <div className="w-[12vw] h-[12vw] rounded-full border-2 border-spacing-10 border-dotted border-zinc-300  bg-white p-4 flex flex-col gap-1 justify-center items-center">
          <span className="font-semibold text-[2vw]">96%</span>
          <span className="text-center text-sm font-medium text-zinc-700">
            Expedition success rate
          </span>
        </div>
        <div className="w-[12vw] h-[12vw] rounded-full border-2 border-spacing-10 border-dotted border-zinc-300  bg-white p-4 flex flex-col gap-1 justify-center items-center">
          <span className="font-semibold text-[2vw]">90%</span>
          <span className="text-center text-sm font-medium text-zinc-700">
            Climber summit rate
          </span>
        </div>
        <div className="w-[12vw] h-[12vw] rounded-full border-2 border-spacing-10 border-dotted border-zinc-300  bg-white p-4 flex flex-col gap-1 justify-center items-center">
          <span className="font-semibold text-[2vw]">200+</span>
          <span className="text-center text-sm font-medium text-zinc-700">
            Total Expedition over 8000m
          </span>
        </div>
      </div>
    </div>
  );
}
