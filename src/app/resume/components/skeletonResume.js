import React from "react";

export default function SkeletonResume({}) {
  return (
    <div className="mt-20 w-full">
      <div role="status" class="animate-pulse flex flex-col gap-2 items-center">
        <p class="h-4 bg-gray-300 rounded-full w-full mb-2.5"></p>
        <p class="h-4 bg-gray-300 rounded-full w-1/2 mb-2.5"></p>
        <p class="h-4 bg-gray-300 rounded-full w-1/2 mb-2.5"></p>
        <p class="h-4 bg-gray-300 rounded-full w-2/3 mb-2.5"></p>
      </div>
    </div>
  );
}
