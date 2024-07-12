import React from "react";

const CONTENT = {
  name: "Eliasz Zakrzewski",
  description: "I'm software engineer. I love building things.",
};

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-fit mb-40">
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-xl text-muted-foreground text-zinc-400 tracking-widest">
          {CONTENT.name.toUpperCase()}
        </p>
        <h2 className="text-5xl">{CONTENT.description}</h2>
      </div>

      <div className="flex border w-fit mt-12 border-zinc-300 dark:border-zinc-300/30 rounded-full py-3 px-5 justify-center items-center gap-x-3">
        <div className="flex justify-center items-center shadow-green-500/30 shadow-[0_0_2px_1px] rounded-full border border-green-500/60 p-[2px]">
          <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse duration-600" />
        </div>

        <p className=" text-sm">Available to work</p>
      </div>
    </div>
  );
}
