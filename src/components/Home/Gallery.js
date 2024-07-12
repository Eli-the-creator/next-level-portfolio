import React from "react";

export default function Gallery() {
  return (
    <div className="w-full h-fit md:mt-20 mt-10 mb-30">
      {/* Image grid here  two columns two rows */}
      <div className="flex flex-col md:grid grid-cols-5 grid-rows-2 gap-4">
        <div className="w-full h-full aspect-square col-span-3 row-span-1 bg-neutral-200 rounded-xl">
          a
        </div>
        <div className="w-full h-full aspect-square col-span-2 row-span-1 bg-neutral-200 rounded-xl">
          a
        </div>
        <div className="w-full h-full aspect-square col-span-2 row-span-1 bg-neutral-200 rounded-xl">
          a
        </div>
        <div className="w-full h-full aspect-square col-span-3 row-span-1 bg-neutral-200 rounded-xl">
          a
        </div>
      </div>
    </div>
  );
}
