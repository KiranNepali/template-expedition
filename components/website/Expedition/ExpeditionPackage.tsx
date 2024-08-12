import Image from "next/image";
import React from "react";
import ExpeditionImg from "@/public/Hero.jpg";
import Link from "next/link";
import ExpeditionData from "@/data/ExpeditionData";
import { Icon } from "@iconify/react";
type Props = {};

export default function ExpeditionPackage({}: Props) {
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  return (
    <>
      {/* HERO  */}
      <div className="w-full relative h-[60vh] flex justify-center items-center">
        <Image
          alt=""
          src={ExpeditionImg}
          className="w-full absolute top-0 left-0 h-full object-cover object-center"
        ></Image>

        <div className="relative flex justify-center items-center ">
          {/* <Icon icon="iconoir:trekking" className=" w-16 h-16 text-white" /> */}
          <h1 className="font-bold text-[5vw] text-white uppercase">
            Over 8000 Meters
          </h1>
        </div>
      </div>

      <div className="w-full mx-auto py-[5rem] bg-zinc-100/50">
        <p className="w-10/12 mx-auto text-gray-700">
          Earth is a beautiful planet with wonderful natural elements. Although
          there are numerous attractive vast oceans, mesmerizing seas,
          mind-blowing raging rivers, and striking islands, the Himalayas are
          incomparable in serenity, natural purity, and adventure. While there
          are thousands of snow-capped mountains around the world, majestic are
          those who stand above 8000m. And only 14 peaks fall in the category of
          8000m, Mt. Everest or Sagarmatha at 8848.86 m being the highest of
          them all. The other 8000m peaks are Mt. K2 (8611m) in Pakistan,
          Kanchenjunga (8586 m), Lhotse (8516 m), Mt. Makalu (8463 m),Mt. Cho
          Oyu (8201 m), Mt. Dhaulagiri (8167 m),Mt. Manaslu (8163 m), Nanga
          Parbat (8125 m) in Pakistan, Annapurna (8091 m), Gasherbrum I (8068 m)
          (China/Pakistan), Broad Peak (8047 m) (Pakistan/China), Gasherbrum II
          (8035 m) (China/Pakistan), Sisha Pangma (8013 m) (Tibet). The
          expeditions to 8000m need special permits from the concerned
          authorities and also requires the climbers to pay a certain amount of
          Royalty to the Government of Nepal. Peaks over 8000m require sound
          mountaineering skills, the experience of climbing 7000m peaks, high
          endurance in the Himalayas, and proper physical strength and fitness.
        </p>
      </div>

      <div className="w-10/12 mx-auto flex py-[3rem] flex-col gap-5">
        <h1 className="uppercase font-bold text-[3vw]">
          Over 8000 Meters Packages
        </h1>

        {/* packages  */}
        <div className="grid grid-cols-4  w-full  gap-5">
          {ExpeditionData.map((item, index) => (
            <Link
              href={`/trip-detail/${slugify(item.name)}`}
              key={index}
              className="w-full"
            >
              <div className="relative h-[25vw]">
                <div className="absolute bottom-4 left-4 text-white font-semibold text-sm  z-10">
                  58 days
                </div>
                <Image
                  alt="category-img"
                  src={item.img}
                  className="w-full h-full group-hover:brightness-50 duration-500 object-cover object-center brightness-75"
                />
              </div>

              <div className="flex flex-col py-3 gap-1">
                <h2 className="font-semibold text-[1.5vw] leading-none">
                  Package name
                </h2>
                <div className="w-full flex justify-between items-center">
                  <button className="">View details</button>

                  <button className="font-medium">Book now</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
