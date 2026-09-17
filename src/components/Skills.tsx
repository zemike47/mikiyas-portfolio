import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "./SectionHeading";
import { portfolio } from "../data/portfolio";

function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".skill-group", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 35,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const groups = [
    {
      title: "Programming",
      items: portfolio.skills.programming,
    },
    {
      title: "Frameworks",
      items: portfolio.skills.frameworks,
    },
    {
      title: "Cloud & DevOps",
      items: portfolio.skills.cloud,
    },
    {
      title: "Tools & Systems",
      items: portfolio.skills.tools,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="border-t border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <SectionHeading number="02" label="Technical Skills" />

        <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-wider text-neutral-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-neutral-800 px-3 py-2 font-mono text-[10px] text-neutral-500 transition-colors duration-200 hover:border-lime-300 hover:text-lime-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
