"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import HomeBanner from "./HomeBanner";
import HomeExpedition from "./HomeExpedition";
import HomeFaq from "./HomeFaq";
import HomeCto from "./HomeCto";
import Image from "next/image";
import Lenis from "lenis";
import { Container } from "postcss";
import { useScroll, useTransform, motion } from "framer-motion";
import Try from "./Try";

type Props = {};

export default function HomePageMain({}: Props) {
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );

  // lenis scroll
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Transform for Hero section
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // Opposite Transform for HomeAbout section
  const aboutScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const aboutRotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <>
      <div ref={container} className="relative  bg-black">
        {/* Hero Section */}
        <motion.div
          style={{ scale: heroScale, rotate: heroRotate }}
          className="sticky top-0"
        >
          <Hero />
        </motion.div>

        {/* HomeAbout Section with opposite transformations */}
        <motion.div
          style={{ scale: aboutScale, rotate: aboutRotate }}
          className="w-full h-screen  mx-auto bg-white relative"
        >
          <HomeAbout />
        </motion.div>
      </div>

      <Try />

      <div className="w-10/12 mx-auto">
        <HomeServices />
      </div>

      <div className="overflow-x-hidden w-full">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex justify-center items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Render image section */}
            <div
              className={`w-[60vw] ${
                index % 2 === 0 ? "ml-[-20%]" : "mr-[-20%]"
              } h-screen flex justify-center items-center relative`}
            >
              <div className="absolute top-0 left-0 w-[60vw] h-[50vw]">
                {/* Hero Image */}
                <Image
                  src={section.imageSrc}
                  alt="Hero Image"
                  className="w-full h-full object-cover object-center"
                  width={5000}
                  height={5000}
                />
                <Image
                  alt=""
                  src={section.brushSrc}
                  className="w-full absolute top-0 left-0 bg-white mix-blend-screen h-full object-cover object-center"
                  width={5000}
                  height={5000}
                />
              </div>
            </div>
            {/* Render text section */}
            <div className="w-[40vw] flex justify-center items-start flex-col gap-2">
              <h1 className="font-semibold uppercase text-[3vw]">
                {section.textTitle}
              </h1>
              <p className="text-[1.5vw] text-zinc-700">
                {section.textContent}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-100/50 w-full">
        <HomeExpedition />
      </div>

      <HomeBanner />
      <div className="w-10/12 mx-auto">
        <HomeFaq />
      </div>

      <div className="bg-zinc-100/50 w-full">
        <HomeCto />
      </div>
    </>
  );
}

const sections = [
  {
    imageSrc: "/Hero.jpg",
    brushSrc: "/brush1.png",
    textTitle: "Title topic",
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Perferendis dignissimos, quia distinctio vel eaque similique 
    tempore quasi obcaecati suscipit? Sunt. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Esse, voluptates.`,
  },
  {
    imageSrc: "/Hero.jpg",
    brushSrc: "/brush2.png",
    textTitle: "Title topic",
    textContent: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Perferendis dignissimos, quia distinctio vel eaque similique 
    tempore quasi obcaecati suscipit? Sunt. Lorem ipsum dolor sit amet 
    consectetur adipisicing elit. Esse, voluptates.`,
  },
  // Add more sections as needed
];
