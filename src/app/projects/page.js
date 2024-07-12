import CallToAction from "../../components/Home/CallToAction";
import Link from "next/link";
import projectData from "../../data/projectData.json";
import Bagde from "../../components/Bagde";
import Image from "next/image";

const CALL_TO_ACTION_CONTENT = [
  {
    title: "About",
    description: "I'm experienced software engineer. I love building things.",
    url: "/about",
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

export default function Project() {
  const renderData = projectData.projectData.map((el) => {
    return {
      id: el.id,
      name: el.name,
      description: el.description,
      preview: el.preview,
    };
  });

  return (
    <div className="w-full h-fit">
      <div className="mt-20">
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-xl text-muted-foreground uppercase text-zinc-400 tracking-widest">
            Projects
          </h3>
          <p className="">
            Welcome to our project page, where we showcase innovative
            applications built using our preferred technology stack:{" "}
            <Bagde>React</Bagde> , <Bagde>Next-JS</Bagde> ,{" "}
            <Bagde>React Native (EXPO)</Bagde>, <Bagde>JavaScript</Bagde> ,{" "}
            <Bagde>TypeScript</Bagde>, <Bagde>Express-JS</Bagde>,{" "}
            <Bagde>Node-JS</Bagde>, <Bagde>MongoDB</Bagde>,{" "}
            <Bagde>Prisma</Bagde>, <Bagde>GraphQL</Bagde>, <Bagde>Redux</Bagde>,
            and many many many more... My projects are crafted with a focus on
            solving real-world problems and delivering exceptional user
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-20">
          {renderData.map((el, idx) => (
            <Link key={idx} href={`/projects/${el.id}`}>
              <div
                key={idx}
                className="w-full aspect-square rounded-lg p-4 border bg-zinc-100 hover:scale-95 transition-all duration-300"
              >
                <Image
                  className="object-cover rounded-lg"
                  width={500}
                  height={500}
                  src={el.preview}
                  alt={el.name}
                />
                <div className="p-2">
                  <h2 className="text-lg font-semibold">{el.name}</h2>
                  <p className="font-normal text-zinc-400">{el.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 mb-32">
          <CallToAction propsContent={CALL_TO_ACTION_CONTENT} />
        </div>
      </div>
    </div>
  );
}
