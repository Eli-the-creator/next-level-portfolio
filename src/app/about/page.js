import React from "react";
import CallToAction from "../../components/Home/CallToAction";

const CALL_TO_ACTION_CONTENT = [
  {
    title: "Projects",
    description: "I'm experienced software engineer. I love building things.",
    url: "/projects",
  },
  {
    title: "Email me",
    description: "I'm experienced software engineer. I love building things.",
    url: "mailto:neverlookbackeli@gmail.com",
  },
  {
    title: "Resume",
    description: "I'm experienced software engineer. I love building things.",
    url: "/resume",
  },
];

const SUCCESS_VALUE_CONTENT = [
  "Always On Time!",
  "Quality First",
  "Team Strength",
  "Communication Is Key",
  "Act Ahead",
  "Initiative Welcomed",
  "Flexibility At Work",
  "Honesty Matters",
  "Ethics First",
  "Client First",
  "Bring the Value",
  "Brainstorming",
  "Ideas Are Gold",
  "Stay Cool Under Pressure",
  "Calm At Work",
];

export default function About() {
  return (
    <div className="w-full h-fit mb-40">
      <div className="mt-20">
        <div className="flex flex-col space-y-4">
          <p className="font-semibold text-xl text-muted-foreground uppercase text-zinc-400 tracking-widest">
            ABOUT ME
          </p>
          <h2 className="text-5xl">My name is Eliasz</h2>
        </div>
        <div className="mt-16">
          <p className="pb-8">
            I am a front-end developer with 3 years of experience working with
            React, React Native, Next.js, JavaScript, and TypeScript. My
            professional journey began with a love for creating user-friendly
            and intuitive interfaces and developing web applications as a
            freelancer during my school years.
          </p>

          <p className="pb-8">
            Over the years, I have closely collaborated with UX/UI designers and
            product managers, which has allowed me to gain a deeper
            understanding of the importance of user experience and business
            goals. I have participated in various projects, ranging from
            creating small prototypes to developing full-scale commercial
            applications. My involvement in designing and developing interfaces
            has always been based on a thorough analysis of user needs and
            business requirements. I strive to ensure that every element of the
            interface is not only visually appealing but also functionally
            justified.
          </p>

          <p className="pb-8">
            One of the key aspects of my work is understanding the business, the
            product, the team, the solutions we develop, and most importantly,
            the users for whom it is all done. My experience allows me to find a
            balance between technological capabilities and user expectations for
            the product.
          </p>
          <p className="pb-8">
            My commitment to professional development does not stop at what I
            have already achieved. I constantly study new technologies and
            approaches to stay current with industry trends and offer innovative
            solutions.
          </p>
          <p className="">
            I believe that the success of any project depends on effective
            teamwork, and I am always ready to support my colleagues by sharing
            knowledge and experience. Together, we can achieve the set business
            goals and create a product that will not only be in demand in the
            market but also inspire users.
          </p>
        </div>
      </div>
      <div className="mt-20  max-w-3xl ">
        <h3 className="font-semibold text-xl text-muted-foreground text-center uppercase text-zinc-400 tracking-widest">
          Key to Success
        </h3>
        <div className="pt-10 flex flex-wrap justify-center gap-4 px-4">
          {SUCCESS_VALUE_CONTENT.map((el, idx) => (
            <span
              key={idx}
              className="shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300 px-3 py-2 border border-zinc-200 rounded-md "
            >
              <p className="text-lg  font-medium leading-loose">{el}</p>
            </span>
          ))}
        </div>
      </div>

      <div className="mt-32 ">
        <CallToAction propsContent={CALL_TO_ACTION_CONTENT} />
      </div>
    </div>
  );
}
