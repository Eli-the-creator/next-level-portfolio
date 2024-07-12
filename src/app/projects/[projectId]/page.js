"use client";
import { usePathname } from "next/navigation";
import CallToAction from "../../../components/Home/CallToAction";
import AboutProject from "./components/AboutProject";

import projectData from "../../../data/projectData.json";
import { Carousel } from "./components/Carousel";

const CALL_TO_ACTION_CONTENT = [
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

export default function ProjectPage() {
  const pathName = usePathname();

  const projectId = pathName.split("/").at(pathName.split("/").length - 1);

  const renderData = projectData.projectData.find((el) => el.id == projectId);

  return (
    <div className="w-full h-fit mt-20 mb-36">
      <div className="flex flex-col space-y-4 text-center pb-12">
        <p className="font-semibold text-xl text-muted-foreground uppercase text-zinc-400 tracking-widest">
          {renderData.name}
        </p>
        <p className="text-md">{renderData.description}</p>
      </div>

      {/* Project Image */}
      {/* <div className="w-full h-96 bg-zinc-200 rounded-xl">a</div> */}
      <Carousel images={renderData.screenshots} tag={renderData.tag} />

      {/* About project */}
      <AboutProject data={renderData} />

      <CallToAction propsContent={CALL_TO_ACTION_CONTENT} />
    </div>
  );
}
