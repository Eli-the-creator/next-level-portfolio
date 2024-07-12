import Link from "next/link";
import Bagde from "../Bagde";

const CONTENT = {
  title: "About",
  description: "I'm experienced software engineer. I love building things.",
};
export default function About() {
  return (
    <div className="">
      <h2 className="text-3xl leading-loose">About.</h2>
      <div className="mt-2 space-y-6">
        <p className="">
          24 year old software engineer with 3 years of experience working with{" "}
          <Bagde>React</Bagde> , <Bagde>Next-JS</Bagde> ,{" "}
          <Bagde>React Native (EXPO)</Bagde>, <Bagde>JavaScript</Bagde> and{" "}
          <Bagde>TypeScript</Bagde> and{" "}
          <Link className="underline text-blue-500" href={"/projects"}>
            more more more ...
          </Link>{" "}
          . My professional journey began with a love for creating user-friendly
          and intuitive interfaces and developing web applications as a
          freelancer during my school years 6 years ago.{" "}
          <span className="text-muted-foreground/40 font-bold ">
            OMG i&apos;m so old
          </span>
        </p>
        <p className="">
          I am currently working as a developer and building a happy family with
          the love of my life, who is a UX/UI designer. Together, we a digital
          family of creators.
        </p>
        <p className="">
          When I step away from my computer, I enjoy spending quality time with
          family and friends. I love outdoor activities, park walks, and sports.
          In my free time, I immerse myself in reading books on personal
          development and professional growth to stay updated with the latest
          trends and innovations in technology.
        </p>
      </div>
    </div>
  );
}
