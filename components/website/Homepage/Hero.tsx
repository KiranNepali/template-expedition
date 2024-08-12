import Image from "next/image";
import React from "react";

import HeroImg from "@/public/Hero.jpg";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center relative ">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <Image
          alt="hero-img"
          src={HeroImg}
          className="w-full h-full object-cover  object-center"
        ></Image>
      </div> */}
      <div className="w-full grid gap-2 h-screen grid-cols-2">
        <div className="bg-black h-[50vh]"></div>
        <div className="bg-black h-[50vh]"></div>
        <div className="bg-black h-[50vh]"></div>
      </div>
    </div>
  );
}
