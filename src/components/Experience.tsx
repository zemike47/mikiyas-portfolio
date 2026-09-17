import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "./SectionHeading";

const experience = [
  {
    period: "2025 — Present",
    role: "Volunteer Mentor & Country Lead",
    company: "ALX Africa × AWS",
    description:
      "Mentored learners in an AWS cloud computing program while leading the Morocco Squad and coordinating technical support across a multicultural learning community.",
    achievements: [
      "Mentored 20+ learners within a 900+ learner program.",
      "Led the Morocco Squad and coordinated 3 mentors.",
      "Provided technical guidance on AWS concepts and certification readiness.",
      "Collaborated with students, mentors, and administrators across Kenya, Morocco, Nigeria, Ghana, South Africa, and other African countries.",
    ],
  },
  {
    period: "2025",
    role: "Software Engineer",
    company: "Ambalay Maps",
    description:
      "Worked on YeLijoch Mahiber, a digital platform connecting youth with farmers and translating real-world agricultural collaboration needs into practical software features.",
    achievements: [
      "Integrated 20+ RESTful APIs with frontend interfaces.",
      "Collaborated with designers to translate UI/UX designs into functional features.",
      "Developed and integrated user authentication features.",
      "Worked across frontend interfaces and end-to-end application workflows.",
    ],
  },
];

function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".experience-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 45,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="border-t border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <SectionHeading number="04" label="Experience" />

        <div className="space-y-20">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="experience-item border-t border-white/10 pt-7"
            >
              <div className="grid gap-8 lg:grid-cols-[150px_1fr] lg:gap-12">
                <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                  {item.period}
                </p>

                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                    <h3 className="text-2xl font-medium tracking-tight text-white">
                      {item.role}
                    </h3>

                    <span className="font-mono text-xs text-lime-300">
                      {item.company}
                    </span>
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-500">
                    {item.description}
                  </p>

                  <ul className="mt-8 max-w-3xl space-y-4">
                    {item.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex gap-4 text-sm leading-7 text-neutral-400"
                      >
                        <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-lime-300" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
