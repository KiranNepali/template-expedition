import Image from "next/image";
import React from "react";
import ExpeditionImg from "@/public/Hero.jpg";
import Link from "next/link";

type Props = {};

export default function Expedition({}: Props) {
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  return (
    <>
      {/* HERO  */}
      <div className="w-full relative h-screen flex justify-center items-center">
        <Image
          alt=""
          src={ExpeditionImg}
          className="w-full absolute top-0 left-0 h-full object-cover object-center"
        ></Image>

        <div className="relative">
          <h1 className="font-bold text-[5vw] text-white uppercase">
            Expedition
          </h1>
        </div>
      </div>

      {/* category  */}
      <div className="grid grid-cols-4 py-[5rem] w-10/12 mx-auto gap-5">
        {ExpeditionCategoryData.map((item, index) => (
          <Link
            href={`/expedition/${slugify(item.name)}`}
            key={index}
            className="w-full h-[30vw] cursor-pointer group relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <h2 className="uppercase  text-[2vw] leading-none font-semibold text-white">
                {item.name}
              </h2>
            </div>
            <Image
              alt="category-img"
              src={item.img}
              className="w-full h-full group-hover:brightness-50 duration-500 object-cover object-center brightness-75"
            />
          </Link>
        ))}
      </div>
    </>
  );
}

const ExpeditionCategoryData = [
  { name: "Over 8000 Meters", img: ExpeditionImg },
  { name: "Over 7000 Meters", img: ExpeditionImg },
  { name: "Over 6000 Meters", img: ExpeditionImg },
  { name: "Over 5000 Meters", img: ExpeditionImg },
  { name: "Over 4000 Meters", img: ExpeditionImg },
];
