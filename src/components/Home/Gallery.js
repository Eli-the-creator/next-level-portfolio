import Image from "next/image";
import React from "react";

export default function Gallery() {
  return (
    <div className="w-full h-fit md:mt-20 mt-10">
      <div className="flex flex-col md:grid md:grid-cols-6 md:grid-rows-1 gap-2">
        <div className="w-fit h-fit aspect-square col-span-3 row-span-1 rounded-xl">
          <Image
            width={420}
            height={320}
            className="rounded-sm object-cover"
            src="/main-page/justme_1.webp"
            alt="Photo with me cute face"
          />
        </div>

        <div className="w-fit h-fit aspect-square col-span-3 row-span-1 rounded-xl">
          <Image
            width={380}
            height={320}
            className="rounded-sm object-cover"
            src="/main-page/mehiking_1.webp"
            alt="Funny image with cool fonts"
          />
        </div>

        <div className="w-fit  aspect-square col-span-3 row-span-1 rounded-xl">
          <Image
            width={520}
            height={120}
            className="rounded-sm"
            src="/main-page/meatwork_1.webp"
            alt="Funny image with cool fonts"
          />
        </div>

        <div className="hidden md:block w-fit h-fit col-span-3 row-span-1 rounded-xl">
          <Image
            width={520}
            height={320}
            className="rounded-sm object-cover"
            src="/main-page/I-don’t-realy-like-do-a-photo_1.webp"
            alt="Funny image with cool fonts"
          />
        </div>
      </div>
    </div>
  );
}
