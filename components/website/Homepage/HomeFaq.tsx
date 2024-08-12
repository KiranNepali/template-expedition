// import React from "react";

// type Props = {};

// export default function HomeFaq({}: Props) {
//   return (
// <div className="w-full h-screen py-[5rem] flex justify-center items-center">
//   <div className="w-full grid grid-cols-8 h-full gap-10">
//     <div className="col-span-3 h-full flex justify-start items-start">
//       <h1 className="uppercase text-[5vw] text-zinc-800 font-bold leading-none">
//         Frequently asked questions
//       </h1>
//     </div>

//     <div className="col-span-5  h-full"></div>
//   </div>
// </div>
//   );
// }

"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import ContourMountain from "@/public/contour-mountain.jpg";
import SplitType from "split-type";

type Props = {};

export default function HomeFaq({}: Props) {
  const { contextSafe } = useGSAP();
  const [openAns, setOpenAns] = useState(false);
  const handleOpenAns = contextSafe((index: number) => {
    if (!openAns) {
      gsap.to(`.ans-${index}`, {
        height: "auto",
        duration: 0.2,
        ease: "sine.inOut",
      });
      setOpenAns(true);
    }
    if (openAns) {
      gsap.to(`.ans-${index}`, {
        height: 0,
        duration: 0.2,
        ease: "sine.inOut",
      });
      setOpenAns(false);
    }
  });
  const homeFaqRef = useRef(null);

  return (
    <div className="w-full py-[5rem]  relative">
      <div className="w-full   flex justify-center items-center">
        <div className="w-full grid grid-cols-8 h-full gap-10">
          <div className="col-span-3 h-full flex relative  justify-start items-start">
            <div className="sticky top-[2rem] left-0">
              <h1 className="uppercase   text-[5vw] text-zinc-800 font-bold leading-none">
                Frequently asked questions
              </h1>
              <p>
                Special occasions call for special holidays. Speak to our
                experts today.
              </p>
            </div>
          </div>

          {/* faqs  */}
          <div
            ref={homeFaqRef}
            className="col-span-5 flex flex-col justify-start w-full gap-5"
          >
            {FaqData.map((item, index) => (
              <div
                onClick={() => handleOpenAns(index)}
                key={index}
                className="w-full bg-white relative  cursor-pointer break-inside-avoid   px-5 pt-5 pb-2 flex flex-col gap-1 justify-between shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
              >
                {/* question  */}
                <div className="w-full pb-3 gap-2  flex justify-between items-center">
                  <span className="w-[95%] text-secondary-400 font-medium">
                    {item.question}
                  </span>
                  <span className="cursor-pointer overflow-hidden w-[1.5rem] h-[1.5rem]">
                    <Icon
                      icon="mdi:arrow-down-drop"
                      className="w-full h-full object-cover text-black object-center"
                    />
                  </span>
                </div>
                {/* ans  */}
                <p
                  className={`h-0 overflow-hidden leading-relaxed w-full text-sm text-secondary-400 text-start ans-${index}`}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FaqData = [
  {
    id: "1",
    question: "What are the best times of year for trekking in Nepal?",
    answer:
      "The best times for trekking in Nepal are during the pre-monsoon (March to May) and post-monsoon (September to November) seasons. During these times, the weather is generally clear and stable, offering the best views and conditions for trekking.",
  },
  {
    id: "2",
    question: "What should I pack for a trekking expedition?",
    answer:
      "You should pack essentials like sturdy hiking boots, comfortable clothing, a warm jacket, rain gear, a good backpack, a first aid kit, water purification tablets, and personal items such as sunscreen, a hat, and sunglasses.",
  },
  {
    id: "3",
    question: "Do I need a permit for trekking in Nepal?",
    answer:
      "Yes, most trekking areas in Nepal require a trekking permit. The types of permits vary depending on the region. Popular permits include the TIMS (Trekkers' Information Management System) card and specific area permits like the Annapurna Conservation Area Permit (ACAP) and the Sagarmatha National Park Permit.",
  },
  {
    id: "4",
    question: "Is it safe to trek alone in Nepal?",
    answer:
      "While many people trek alone in Nepal without issues, it's generally safer to trek with a guide or in a group. Guides can help navigate trails, provide information about the area, and assist in emergencies. Trekking with others also enhances the overall experience.",
  },
  {
    id: "5",
    question: "What other activities can I do in Nepal besides trekking?",
    answer:
      "Besides trekking, Nepal offers a range of activities including white-water rafting, jungle safaris, paragliding, cultural tours, and mountaineering expeditions. The diverse landscapes and rich culture provide endless opportunities for adventure and exploration.",
  },
];
