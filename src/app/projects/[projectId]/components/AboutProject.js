import React from "react";
import Bagde from "../../../../components/Bagde";
import Link from "next/link";

export default function AboutProject({ data }) {
  return (
    <div className="mt-20">
      <div className="grid sm:grid-cols-1  md:grid-cols-2  gap-8">
        <div className="pb-6">
          {/* Project Details */}
          <h3 className="font-bold text-xl pb-3 ">Project Details</h3>

          {/* Tools */}
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <p className="text-md font-semibold">Tools : </p>
              <span className="flex flex-wrap gap-2">
                {data.tools.map((el) => (
                  <Bagde>{el}</Bagde>
                ))}
              </span>
            </div>
            {/* Features */}
            <div className="space-x-1 space-y-2">
              <p className="text-md font-semibold">Feature : </p>
              {data.feature.map((el) => (
                <Bagde>{el}</Bagde>
              ))}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="">
          <h3 className="font-bold text-xl pb-3">Links</h3>
          <span className="flex flex-col  space-y-2">
            {data.tag == "Web" ? (
              <>
                <Link
                  href={data.likns[0]}
                  className="text-md text-sky-500 underline font-semibold"
                >
                  Online
                </Link>

                <Link
                  href={data.likns[1]}
                  className="text-md text-sky-500 underline font-semibold"
                >
                  GitHub
                </Link>
              </>
            ) : (
              <Link
                href={data.likns[0]}
                className="text-md text-sky-500 underline font-semibold"
              >
                GitHub
              </Link>
            )}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="mt-10">
        <p className="">{data.fullDescription}</p>
      </div>

      {/* Date */}
      <div className="flex items-center gap-2 text-muted-foreground mt-10">
        <p className="text-md  font-semibold">Date : </p>
        <p className="text-sm">2022</p>
      </div>
    </div>
  );
}
