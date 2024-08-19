import Image from "next/image";
import React from "react";

import HeroImg from "@/public/Hero.jpg";
import { Icon } from "@iconify/react";
type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full mx-auto h-screen flex justify-center items-center relative ">
      <Image
        className="absolute top-0 brightness-75 left-0 w-full h-full object-cover object-center"
        alt="hero-img"
        src={HeroImg}
      ></Image>

      <Image
        width={5000}
        height={5000}
        src="/divider2.svg"
        className="absolute bottom-0 object-cover object-center  left-[50%] translate-x-[-50%] w-full h-[8vh] z-20"
        alt=""
      ></Image>

      <div className="flex flex-col gap-2 relative justify-center items-center">
        <h1 className="uppercase text-white font-bold   text-[6vw] text-center leading-none">
          Discover Your Next <br /> <span>Expedition</span>
        </h1>
        <p className="text-center text-zinc-200 w-[70%]">
          {`
         "Join us on thrilling expeditions, uncovering breathtaking landscapes
          and unforgettable experiences."
         `}
        </p>

        <span className="border-b-2  border-white mt-10 text-white">
          Get involved
        </span>

        <div className=" z-10   text-white flex flex-col gap-1 items-center bottom-5 left-[50%] mt-10 ">
          <Icon
            icon="uil:mouse-alt"
            className=" w-7 h-7   object-cover  rounded-full object-center"
          />
          <span className="font-medium text-sm">Scroll down</span>
        </div>
      </div>
    </div>
  );
}
