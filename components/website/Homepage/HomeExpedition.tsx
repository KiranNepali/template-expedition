import React from "react";

type Props = {};

export default function HomeExpedition({}: Props) {
  return (
    <div className="py-[5rem]  flex justify-center items-center">
      <div className="grid grid-cols-8 gap-x-10 w-10/12 mx-auto h-full ">
        <div className="col-span-3 h-full justify-center flex flex-col text-white">
          <h1 className="uppercase font-bold text-[5vw] text-zinc-800 leading-none">
            Choose your next adventure
          </h1>

          <div className="w-full flex justify-start items-center mt-5">
            <button className="text-zinc-700 font-medium">View all</button>
          </div>
        </div>
        <div className="col-span-5 overflow-x-scroll gap-5 flex justify-start items-center">
          <div className="min-w-[20vw] h-[30vw] bg-black"></div>
          <div className="min-w-[20vw] h-[30vw] bg-black"></div>
          <div className="min-w-[20vw] h-[30vw] bg-black"></div>
          <div className="min-w-[20vw] h-[30vw] bg-black"></div>
        </div>
      </div>
    </div>
  );
}
