import Image from "next/image";
import React from "react";

type Props = {};

export default function HeroPage({}: Props) {
  return (
    <div className="w-full relative h-[60vh] flex justify-center items-center">
      <Image
        alt=""
        src=""
        className="w-full absolute brightness-50 top-0 left-0 h-full object-cover object-center"
      ></Image>

      <div className="relative gap-2 z-20 flex flex-col justify-center items-center ">
        <h1 className="font-bold text-[5vw] leading-none text-white uppercase">
          How can we help?
        </h1>
        <p className="text-white font-medium text-lg">Send us a message</p>
      </div>
    </div>
  );
}
