import React from "react";

type Props = {};

export default function HomeCto({}: Props) {
  return (
    <div className="w-11/12 mx-auto py-[10rem]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase font-bold text-[5vw] leading-none">
          STAY IN TOUCH
        </h1>
        <p>
          Stay In Touch Receive notifications on new posts and photos right in
          your inbox.
        </p>

        <form action="" className="flex flex-col justify-center items-center gap-5 mt-5">
          <div className="flex justify-center items-center gap-5">
            <input
              type="text"
              className="w-[20vw] px-4 bg-zinc-100 border h-[3rem] outline-1"
              placeholder="Full name"
            />
            <input
              type="text"
              className="w-[20vw] px-4 bg-zinc-100 border h-[3rem] outline-1"
              placeholder="Email address"
            />
          </div>

          <button className="mt-7">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
