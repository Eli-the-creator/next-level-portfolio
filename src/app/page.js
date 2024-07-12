"use client";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Gallery from "@/components/Home/Gallery";
import Work from "@/components/Home/Work";
import Link from "next/link";
import CallToAction from "@/components/Home/CallToAction";
import Bagde from "@/components/Bagde";

const TECH_STACK = [
  "React",
  "NextJS",
  "React Native (EXPO)",
  "JavaScript",
  "TypeScript",
  "Redux",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "GraphQL",
  "Redux",
  "Redux Toolkit",
  "React Query",
  "React Hook Form",
  "TailwindCSS",
  "Storybook",
  "React Testing Library",
  "JamStack",
  "Jest",
  "Cypress",
  "Sanity",
  "Mux Video",
  "Figma",
  "Jira",
  "Git",
  "Git Flow",
  "Netlify",
  "Vercel",
  "Cloudflare",
];

export default function Home() {
  return (
    <main className="flex min-h-fit flex-col items-center justify-between mt-40 mb-20">
      <Hero />
      <About />
      <Gallery />
      <Work />
      <div className="mt-20 flex gap-2 flex-wrap px-6">
        {TECH_STACK.map((el, idx) => (
          <Bagde key={idx}>{el}</Bagde>
        ))}
      </div>
      <CallToAction />
    </main>
  );
}
