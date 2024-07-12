"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

// Components
import ThemeButton from "./ThemeButton";
import MobileNavMenu from "./MobileNavMenu";

const NAV_LINKS = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Resume",
    href: "/resume",
  },
];

export default function NavBar() {
  return (
    <div className="sticky top-2 z-[1000] mx-auto bg-transparent backdrop-blur-lg dark:backdrop-blur-md border border-zinc-100/10 dark:border-zinc-50/10">
      <div className="flex justify-between  items-center max-w-6xl mx-auto rounded-xl h-16 px-8 shadow-[0_0px_10px_1px_rgba(0,0,0,0.1)] ">
        <Link href="/" className="">
          EZ dev.
        </Link>

        <div className="hidden md:flex justify-between items-center">
          <div className="">
            {NAV_LINKS.map((el, idx) => (
              <Link className="mx-4 hover:underline" href={el.href} key={idx}>
                {el.name}
              </Link>
            ))}
          </div>

          <ThemeButton />
        </div>
        <div className="sm:block md:hidden">
          <MobileNavMenu links={NAV_LINKS} />
        </div>
      </div>
    </div>
  );
}
