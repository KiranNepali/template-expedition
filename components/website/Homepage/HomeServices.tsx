import React from "react";

type Props = {};

export default function HomeServices({}: Props) {
  return (
    <div className="w-full py-[5rem]">
      {/* title  */}
      <div className="flex w-full justify-between gap-10 items-end">
        <h1 className="font-bold uppercase text-[4vw] w-[50%] leading-none">
          Convenient booking and services
        </h1>
        <p className="w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          officiis? Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* cards services  */}
      <div className="grid grid-cols-4 mt-10  gap-5">
        {ServicesData.map((item, index) => (
          <>
            <div
              key={index}
              className="border-2 border-dotted border-spacing-10 w-full py-9  p-5 flex flex-col gap-1"
            >
              <span className="mb-5 rounded-full bg-white border w-10 h-10 flex justify-center items-center text-[8px]">
                icon
              </span>
              <h2 className="font-bold uppercase text-lg">{item.name}</h2>
              <p className="text-zinc-700 text-[1vw]">{item.desc}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

const ServicesData = [
  {
    id: 1,
    // icon: Service1,
    name: "Hassle-Free Travel",
    desc: "Experience seamless travel with our meticulously planned and executed trips, ensuring you focus only on enjoying your journey.",
  },
  {
    id: 2,
    // icon: Service2,
    name: "Eco-Friendly Service",
    desc: "Embrace nature responsibly with our eco-friendly services designed to minimize environmental impact and promote sustainability.",
  },
  {
    id: 3,
    // icon: Service5,
    name: "Local Himalayan Experts",
    desc: "Explore the majestic Himalayas with our local experts who bring insider knowledge and unique insights to every adventure.",
  },
  {
    id: 4,
    // icon: Service6,
    name: "100% Personalized Trips",
    desc: "Customize every aspect of your trip to fit your preferences, ensuring a unique and unforgettable experience tailored just for you.",
  },
  //   {
  //     id: 5,
  //     // icon: Service4,
  //     name: "5 Stars Service",
  //     desc: "Enjoy top-notch service and amenities throughout your journey, ensuring a luxurious and comfortable experience.",
  //   },
  //   {
  //     id: 6,
  //     // icon: Service3,
  //     name: "Safety and Trust",
  //     desc: "Travel with peace of mind knowing that your safety is our top priority, backed by our trusted and experienced team.",
  //   },
];
