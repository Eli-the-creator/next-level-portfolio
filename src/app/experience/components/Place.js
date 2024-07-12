import Image from "next/image";

export default function Place({
  image = "https://via.placeholder.com/750x400.png?text=What+Next+?",
  alt = "Project Photo alt text",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quae. ",
}) {
  return (
    <div className="w-full h-fit mt-20">
      <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-4">
        <div className="w-full md:w-1/2 aspect-video rounded-lg relative">
          <Image
            className="rounded-sm object-cover"
            src={image}
            alt={alt}
            width={320}
            height={200}
          />
          <div className="absolute -top-1 right-12 bg-teal-500 text-zinc-50 text-xs font-bold px-2 py-1 rounded-full">
            Remote
          </div>
        </div>
        <p className="w-full md:w-1/2  text-md">{description}</p>
      </div>
    </div>
  );
}
