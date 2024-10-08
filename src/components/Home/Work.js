"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CONTENT = {
  title: "Work",
  description:
    "My story is about where I started and where I have been, the places that shaped me into who I am now, and to which I am grateful for the experiences they have given me.",

  workPlace: [
    {
      company: "Hatch House Digital",
      description: "Middle Front-end Engeneer",
      dateStart: "2024",
      dateEnd: "2023",
    },
    {
      company: "IT Rods",
      description: "Junior+ Front-end Engeneer",
      dateStart: "2023",
      dateEnd: "2022",
    },
    {
      company: "Freelance",
      description: "Junior Front-end Engeneer",
      dateStart: "2021",
      dateEnd: "2020",
    },
  ],
};

export default function Work() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const hoverBGcolor =
    resolvedTheme === "dark"
      ? "hover:bg-slate-800"
      : "hover:shadow-[0px_0px_12px_0px_rgba(12,12,12,0.3)]";

  const shadowColor =
    resolvedTheme === "dark" ? "shadow-white/10" : " shadow-black/10";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-fit mt-20 p-1">
      <h2 className="text-3xl leading-loose">{CONTENT.title}.</h2>
      <p className="">
        {CONTENT.description} <br />
        <Link href={"/experience"} className="text-blue-400 underline">
          See more about my experience
        </Link>
      </p>
      <div
        className={cn(
          "flex flex-col m-4 mt-8 rounded-xl shadow-[0_0_9px_4px]`",
          shadowColor
        )}
      >
        {CONTENT.workPlace.map((el, idx) => (
          <div
            key={idx}
            className={cn(
              "flex justify-between w-full h-fit border dark:border-zinc-300/30 first:rounded-t-xl border-b-0 last:border-b last:rounded-b-xl p-6  transition-all duration-300",
              hoverBGcolor
            )}
          >
            <div className="">
              <h3 className="text-md font-bold tracking-wide">{el.company}</h3>
              <p className="text-sm text-muted-foreground ">{el.description}</p>
            </div>
            <p className="text-sm muted-foreground text-zinc-400 ">
              {el.dateStart} - {el.dateEnd}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
