import Image from "next/image";
import React from "react";
import ContactImg from "@/public/Hero.jpg";
import { Icon } from "@iconify/react";
import Instagram from "@/public/Social/instagram.png";
import Facebook from "@/public/Social/facebook.png";
import Whatsapp from "@/public/Social/whatsapp.png";
type Props = {};

export default function ContacPage({}: Props) {
  return (
    <>
      {/* HERO  */}
      <div className="w-full relative h-[60vh] flex justify-center items-center">
        <Image
          alt=""
          src={ContactImg}
          className="w-full absolute brightness-50 top-0 left-0 h-full object-cover object-center"
        ></Image>

        <div className="relative gap-2 z-20 flex flex-col justify-center items-center ">
          <h1 className="font-bold text-[5vw] leading-none text-white uppercase">
            How can we help?
          </h1>
          <p className="text-white font-medium text-lg">Send us a message</p>
        </div>
      </div>

      {/* contact  */}
      <div className="w-10/12 mx-auto py-[5rem] grid grid-cols-8 gap-x-5">
        <div className="col-span-5">
          <div className="grid gap-2 gap-y-3 grid-cols-2">
            {/* Name */}
            <div className="flex gap-1 col-span-2 flex-col overflow-hidden w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Name
              </span>
              <input
                type="text"
                placeholder="Balen Shah"
                className="outline-none rounded-md w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>

            {/* Email */}
            <div className="flex gap-1 col-span-2 flex-col overflow-hidden w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Email
              </span>
              <input
                type="email"
                placeholder="balen@gmail.com"
                className="outline-none rounded-md w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>

            {/* Address */}
            <div className="flex gap-1 col-span-2 flex-col overflow-hidden w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Address
              </span>
              <input
                type="text"
                placeholder="Lazimpat"
                className="outline-none rounded-md w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>

            {/* Phone number */}
            <div className="flex gap-1 col-span-2 flex-col overflow-hidden w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Phone number
              </span>
              <input
                type="number"
                placeholder="+977-9843456456"
                className="outline-none rounded-md w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>

            {/* Message */}
            <div className="flex gap-1 col-span-2 flex-col overflow-hidden w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Message
              </span>
              <textarea
                className="w-full h-full outline-none rounded-md p-3 text-sm placeholder:text-sm bg-gray-100"
                placeholder="Write something here"
              ></textarea>
            </div>

            {/* Button */}
            {/* <button
              className="flex cursor-pointer py-2 px-3 group text-zinc-800 duration-200 rounded-md gap-2 items-center"
              type="submit"
            >
              <span className="font-semibold">Submit</span>
            </button> */}
            <div className="w-full justify-start items-center">
              <button className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-zinc-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-zinc-700 group-hover:bg-zinc-700"></span>
                <span className="relative text-zinc-800 group-hover:text-white">
                  Submit
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* map  */}
        <div className="col-span-3 flex flex-col gap-2">
          <div className="w-full h-[25vw] bg-zinc-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3694673569767!2d85.31530117618843!3d27.736748024192952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19db1ac7cfc1%3A0x3f3557a1377b8d05!2sWebX%20Nepal%20%7C%20Creative%20Website%20Design%20in%20Nepal!5e0!3m2!1sen!2snp!4v1723460781189!5m2!1sen!2snp"
              width="600"
              height="450"
              loading="lazy"
              className="w-full h-full object-cover object-center"
              //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex text-zinc-700 font-medium flex-col">
            <span>Kapan-3, Kathmandu</span>
            <span>+977 **********</span>

            {/* social  */}
            <div className="flex gap-2 mt-5">
              <div className="w-[1.5rem] h-[1.5rem] hover:scale-105 cursor-pointer duration-200">
                <Image
                  src={Instagram}
                  alt="social-icon"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-[1.5rem] h-[1.5rem] hover:scale-105 cursor-pointer duration-200">
                <Image
                  src={Facebook}
                  alt="social-icon"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-[1.5rem] h-[1.5rem] hover:scale-105 cursor-pointer duration-200">
                <Image
                  src={Whatsapp}
                  alt="social-icon"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
