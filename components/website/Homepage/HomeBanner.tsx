import Image from "next/image";
import React from "react";
import BannerImg from "@/public/Banner.jpeg";
type Props = {};

export default function HomeBanner({}: Props) {
  return (
    <div className="h-[90vh] w-full relative flex justify-center items-center">
      <div className="absolute bottom-0 left-0 z-10 w-full h-[40%] bg-gradient-to-t from-white to-transparent"></div>
      <Image
        src={BannerImg}
        className="absolute brightness-[0.5]  top-0  left-0 w-full h-full"
        alt="banner-img"
      ></Image>
      <div className="relative z-20 w-6/12 text-center flex justify-center items-center flex-col gap-5">
        <div className="rounded-full overflow-hidden w-[8vw] h-[8vw] bg-white"></div>
        <div className=" flex flex-col">
          <h1 className="uppercase font-bold text-[3vw] text-zinc-50">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-zinc-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quos vel accusantium facilis ab ipsa deleniti quas
            consectetur provident velit.
          </p>

          <button className="text-white mt-10">Get in touch ?</button>
        </div>
      </div>
    </div>
  );
}
