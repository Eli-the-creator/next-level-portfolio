import Place from "./components/Place";
import CallToAction from "@/components/Home/CallToAction";

const CONTENT = [
  {
    image: "/work/itrods.png",
    alt: "IT Rods",
    description:
      "After graduating from school, I joined a company that developed websites using React, working on a more professional level than freelancing. It was there that I was first introduced to business processes.",
  },
  {
    image: "/work/hatchhouse_digital_cover.png",
    alt: "Work Photo hatchhouse digital cover",
    description:
      "After moving to Ireland, I continued working as a programmer at Hatch House Digital. In this company, I participated in the development of WEB and MOBILE applications for clients in various fields such as fitness, e-commerce, and mobile applications for psychotherapy.",
  },
];

export default function Experience() {
  return (
    <div className="w-full h-fit mb-40">
      <div className="mt-20">
        <div className="flex flex-col space-y-4">
          <h3 className="font-semibold text-xl text-muted-foreground uppercase text-zinc-400 tracking-widest">
            Experience
          </h3>
          <p className="">
            Each of us has our unique story of how we became who we are and
            arrived where we are today. My professional journey began during my
            school years when I took on freelance projects to create websites
            and set up WordPress for my clients.
          </p>
        </div>

        {CONTENT.map((el) => (
          <Place key={el.id} {...el} />
        ))}

        <div className="mt-10">
          <p className="">
            My development was not limited to web development: I joined the
            mobile development team working with React-Native and learned to
            create mobile applications for iOS and Android in practice. One of
            the significant projects was the creation of a health monitoring app
            that helped users track their physical activities and health metrics
            in real-time.
          </p>

          <p className="pt-8">
            This experience allowed me to gain a deeper understanding of user
            needs and learn to work closely with a team of designers and product
            managers to achieve the best results.
          </p>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}
