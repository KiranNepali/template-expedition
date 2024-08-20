"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Picture1 from "../../../public/Hero.jpg";
import Picture2 from "../../../public/Hero.jpg";
import Picture3 from "../../../public/Hero.jpg";

const word = "with framer-motion";

export default function Try() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];

  return (
    <div
      ref={container}
      className="min-h-screen w-full  relative flex flex-col items-start"
    >
      <div className="w-full h-full">
        <div className="flex w-full justify-center relative mt-[5vh]">
          {images.map(({ src, y }, i) => (
            <motion.div
              style={{ y }}
              key={`i_${i}`}
              className={`absolute ${
                i === 0
                  ? "h-[60vh] w-[50vh] z-[1]"
                  : i === 1
                  ? "left-[55vw] top-[15vh] h-[40vh] w-[30vh] z-[2]"
                  : "left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] z-[3]"
              }`}
            >
              <Image src={src} placeholder="blur" alt="image" fill />
            </motion.div>
          ))}
        </div>

        <h1 className="font-bold absolute bottom-[20vh] text-center left-1/2 -translate-x-1/2 uppercase text-[4vw] leading-none">
          Choose your journey
        </h1>
      </div>
    </div>
  );
}
