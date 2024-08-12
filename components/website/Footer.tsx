import Image from "next/image";
import React from "react";
import FooterImg from "@/public/FooterImg.jpg";
import Link from "next/link";

type Props = {};

const footerLinks = {
  expedition: [
    "Expedition Overview",
    "Expedition Details",
    "Destinations",
    "Gallery",
    "FAQ",
  ],
  trekking: [
    "Trekking Overview",
    "Trekking Trails",
    "Equipment",
    "Gallery",
    "FAQ",
  ],
  useful: [
    "About Us",
    "Contact Us",
    "Our Team",
    "Terms of Service",
    "Privacy Policy",
  ],
};

export default function Footer({}: Props) {
  return (
    <div className="w-full relative pb-[10rem] py-[5rem] bg-zinc-100/50">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={FooterImg}
          alt="footer-img"
          className="w-full h-full object-cover object-center brightness-[0.3]"
        />
      </div>
      <div className="grid w-10/12 text-zinc-50 mx-auto grid-cols-3 relative gap-4">
        <div className="flex flex-col gap-4">
          {/* title */}
          <h3 className="font-semibold text-xl">Expedition</h3>
          {/* links */}
          <div className="flex flex-col gap-1 font-medium">
            {footerLinks.expedition.map((link, index) => (
              <div
                key={index}
                className="font-medium"
                // href={`/expedition/${link.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <a>{link}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* title */}
          <h3 className="font-semibold text-xl">Trekking</h3>
          {/* links */}
          <div className="flex flex-col gap-1 font-medium">
            {footerLinks.trekking.map((link, index) => (
              <div
                key={index}
                className="font-medium"
                // href={`/trekking/${link.replace(/\s+/g, "-").toLowerCase()}`}
              >
                <a>{link}</a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {/* title */}
          <h3 className="font-semibold text-xl">Useful Links</h3>
          {/* links */}
          <div className="flex flex-col gap-1 font-medium">
            {footerLinks.useful.map((link, index) => (
              <div
                key={index}
                className="font-medium"
                // href={`/useful-links/${link
                //   .replace(/\s+/g, "-")
                //   .toLowerCase()}`}
              >
                <a>{link}</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10 text-white border-t-[1px] py-4 text-[13px] border-zinc-400/25">
        <div className="w-10/12 mx-auto flex justify-between items-center">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem, similique.
          </p>

          <span>
            Designed and developed by{" "}
            <span className="font-bold underline cursor-pointer">webX</span>
          </span>
        </div>
      </div>
    </div>
  );
}
