"use client";

import Link from "next/link";
import React from "react";

const CONTENT = [
  {
    name: "Work",
    url: "/projects",
  },
  {
    name: "Resume",
    url: "/resume",
  },
  {
    name: "GitHub",
    url: "https://www.linkedin.com/in/eliaszakrzewski/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/eliaszakrzewski/",
  },
];

export default function Footer() {
  return (
    <div className="w-full h-fit border-t border-zinc-300">
      <div className="max-w-3xl mx-auto flex justify-between items-center pt-2 pb-2">
        <div className="text-xs text-center p-1">
          <span>
            Made with ❤️ by <span className="font-bold">Eliasz</span>
          </span>
        </div>
        <div className="space-x-6">
          {CONTENT.map((el, idx) => (
            <Link className="hover:underline text-sm" href={el.url} key={idx}>
              {el.name}
            </Link>
          ))}
          <button
            onClick={() => window.open("mailto:neverlookbackeli@gmail.com")}
            className="py-1 px-5 border border-zinc-700 bg-indigo-300 text-sm rounded-full hover:scale-105 active:scale-90 hover:bg-indigo-400 transition-all duration-300"
          >
            Email me &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
