"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import CurvedArrow from "@/public/Curved_Arrow.svg";
import Image from "next/image";

type Props = {};

export default function HomeExpedition({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const controls = useAnimation();
  const slideRef = useRef<HTMLDivElement>(null);

  const sliderData = [
    {
      id: 1,
      text: "Slider1",
      img: "url('https://plus.unsplash.com/premium_photo-1676464886254-ab4ed19e5161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D')",
    },
    {
      id: 2,
      text: "Slider2",
      img: "url('https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TU9VTlRBSU58ZW58MHx8MHx8fDA%3D')",
    },
    {
      id: 3,
      text: "Slider3",
      img: "url('https://images.unsplash.com/photo-1654118723055-a5c5cbf681e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fDRrJTIwbW91bnRhaW58ZW58MHx8MHx8fDA%3D%3D')",
    },
    {
      id: 4,
      text: "Slider4",
      img: "url('https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TU9VTlRBSU58ZW58MHx8MHx8fDA%3D')",
    },
  ];

  const cloneSlides = [
    sliderData[sliderData.length - 1],
    ...sliderData,
    sliderData[0],
  ];

  useEffect(() => {
    if (slideRef.current) {
      setSlideWidth(slideRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    controls.start({
      x: `-${slideWidth}px`,
      transition: { duration: 0 },
    });
  }, [slideWidth, controls]);

  const handlePrev = () => {
    controls
      .start({
        x: `-${(currentIndex + 1) * slideWidth}px`,
        transition: { duration: 0.5 },
      })
      .then(() => {
        setCurrentIndex((prev) => {
          const newIndex = prev > 0 ? prev - 1 : sliderData.length - 1;
          controls.start({
            x: `-${(newIndex + 1) * slideWidth}px`,
            transition: { duration: 0 },
          });
          return newIndex;
        });
      });
  };

  const handleNext = () => {
    controls
      .start({
        x: `-${(currentIndex + 2) * slideWidth}px`,
        transition: { duration: 0.5 },
      })
      .then(() => {
        setCurrentIndex((prev) => {
          const newIndex = prev < sliderData.length - 1 ? prev + 1 : 0;
          controls.start({
            x: `-${(newIndex + 1) * slideWidth}px`,
            transition: { duration: 0 },
          });
          return newIndex;
        });
      });
  };

  return (
    <div className="py-[10rem] overflow-hidden flex justify-center items-center">
      <div className="grid grid-cols-8 gap-x-10 w-10/12 mx-auto h-full">
        <div className="col-span-3 relative h-full flex flex-col justify-center text-white">
          <h1 className="uppercase relative font-bold text-[5vw] text-zinc-800 leading-none">
            Choose your next adventure
            <div className="absolute w-20 bottom-0 mb-2 right-0 -rotate-[10deg]">
              <Image src={CurvedArrow} alt="curved-arrow" />
            </div>
          </h1>

          <div className="w-full flex justify-start items-center mt-5">
            <Button text="View all" />
          </div>
          <div className="flex mt-10 text-black gap-3">
            <button
              onClick={handlePrev}
              className="cursor-pointer hover:scale-95 duration-300 hover:bg-zinc-800 bg-zinc-700 rounded-full p-3 text-white font-semibold"
            >
              <Icon icon="guidance:right-arrow" className="w-7 h-7" />
            </button>
            <button
              onClick={handleNext}
              className="cursor-pointer hover:scale-95 duration-300 hover:bg-zinc-800 bg-zinc-700 rounded-full p-3 text-white font-semibold"
            >
              <Icon icon="guidance:left-arrow" className="w-7 h-7" />
            </button>
          </div>
        </div>

        <div className="col-span-5 relative flex overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={controls}
            initial={{ x: 0 }}
          >
            {cloneSlides.map((slider, index) => (
              <div
                key={index}
                ref={slideRef}
                className="h-[30vw] group cursor-pointer overflow-hidden hover:scale-95 duration-300"
                style={{ minWidth: "20vw" }}
              >
                <div
                  className="h-full w-full transform transition-transform duration-300 ease-linear group-hover:rotate-3 group-hover:scale-105"
                  style={{
                    backgroundImage: slider.img,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-[0.5] duration-300"></div>
                  <div className="flex justify-center items-center relative h-full text-white bg-opacity-70 font-semibold uppercase text-xl">
                    {slider.text}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
