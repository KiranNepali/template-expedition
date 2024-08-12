import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="fixed top-0 z-[50] left-0 w-full text-white flex justify-center items-center   h-[5rem]">
      <div className="flex justify-between w-10/12 mx-auto">
        {/* logo  */}

        <h1 className="font-bold text-xl">LOGO</h1>

        <div className="flex heading justify-center items-center gap-10">
          <Link href="" className="font-bold tracking-wider text-lg">Home</Link>
          <Link href="" className="font-bold tracking-wider text-lg">Expedition</Link>
          <Link href="" className="font-bold tracking-wider text-lg">Company</Link>
          <Link href="" className="font-bold tracking-wider text-lg">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
