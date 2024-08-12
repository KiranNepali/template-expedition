import React from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import HomeBanner from "./HomeBanner";
import HomeExpedition from "./HomeExpedition";
import HomeFaq from "./HomeFaq";
import HomeCto from "./HomeCto";

type Props = {};

export default function HomePageMain({}: Props) {
  return (
    <>
      <Hero />
      <div className="w-10/12 mx-auto">
        <HomeAbout />
        <HomeServices />
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
