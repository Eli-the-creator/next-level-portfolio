import Link from "next/link";

const DEFAULT_CONTENT = [
  {
    title: "More about me",
    description: "I'm experienced software engineer. I love building things.",
    url: "/about",
  },
  {
    title: "Email me",
    description: "I'm experienced software engineer. I love building things.",
    url: "mailto:eliasz.dev0@gmail.com",
  },
  {
    title: "Resume",
    description: "I'm experienced software engineer. I love building things.",
    url: "/resume",
  },
];

export default function CallToAction({ propsContent }) {
  const CONTENT = propsContent || DEFAULT_CONTENT;

  return (
    <div className="w-full h-fit mt-32 mb-36">
      <h2 className="text-3xl text-center leading-loose">What next?</h2>
      <div className="flex md:flex-row flex-col justify-center items-center mt-2">
        {CONTENT.map((el, idx) => (
          <Link
            href={el.url}
            className="p-4 md:border group/text-hover border-zinc-400  first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md  border-l-0 first:border-l"
            key={idx}
          >
            <div className="space-y-4 p-6 group/text-hover hover:scale-110 transition-all duration-300">
              <p className="text-lg">{el.title} &rarr;</p>
              <p className="text-sm">{el.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
