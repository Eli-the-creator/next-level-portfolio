import { DownloadIcon, NotionLogoIcon } from "@radix-ui/react-icons";
import ResumeComponents from "./components/resumeComponents";
import SkeletonResume from "./components/skeletonResume";
import { Suspense } from "react";

export default function Resume() {
  return (
    <div className="w-full h-screen mt-20">
      <div className="flex flex-col space-y-4 px-2">
        <p className="font-semibold text-xl text-muted-foreground uppercase text-zinc-400 tracking-widest">
          RESUME
        </p>
        <p className="text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          expedita quos accusamus?
        </p>

        <div className="flex gap-4">
          <button className="bg-teal-400 hover:bg-teal-300 flex justify-center text-sm items-center gap-2 w-fit px-6 py-2 rounded-full text-teal-900 border hover:scale-105 active:scale-95 transition-all duration-300 border-teal-900 font-semibold">
            Download PDF{" "}
            <DownloadIcon className="w-[1.3rem] h-[1.3rem] text-teal-900" />
          </button>
          <button className="bg-teal-400 hover:bg-teal-300 flex justify-center text-sm  items-center gap-2 w-fit px-6 py-2 rounded-full text-teal-900 border hover:scale-105 active:scale-95 transition-all duration-300 border-teal-900 font-semibold">
            Notion Resume
            <NotionLogoIcon className="w-[1.3rem] h-[1.3rem] text-teal-900" />
          </button>
        </div>
      </div>

      <div className=" mt-20 pt-10 w-full h-fit border-t text-center">
        <h3 className="text-xl text-center">Online Resume</h3>
        <Suspense fallback={<SkeletonResume />}>
          <ResumeComponents />
        </Suspense>
      </div>
      <div className="mt-20 w-full h-fit"></div>
    </div>
  );
}
