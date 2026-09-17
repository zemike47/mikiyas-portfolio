import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "./SectionHeading";

const education = [
  {
    period: "2021 — 2025",
    degree: "B.Sc. in Software Engineering",
    institution: "Addis Ababa Science and Technology University",
    location: "Addis Ababa, Ethiopia",
  },
  {
    period: "2024",
    degree: "AWS Cloud Computing Program",
    institution: "ALX Africa × Amazon Web Services",
    location: "Remote",
  },
  {
    period: "2021 — 2022",
    degree: "Competitive Programming & Coding Academy",
    institution: "A2SV — Backed by Google",
    location: "Addis Ababa, Ethiopia",
    detail: "450+ problems solved across LeetCode and Codeforces.",
  },
];

function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".education-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 35,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="border-t border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <SectionHeading number="05" label="Education" />

        <div className="space-y-14">
          {education.map((item) => (
            <article
              key={`${item.institution}-${item.degree}`}
              className="education-item grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-[150px_1fr] sm:gap-10"
            >
              <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                {item.period}
              </p>

              <div>
                <h3 className="text-xl font-medium tracking-tight text-white">
                  {item.degree}
                </h3>

                <p className="mt-3 text-sm text-neutral-400">
                  {item.institution}
                </p>

                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                  {item.location}
                </p>

                {item.detail && (
                  <p className="mt-5 text-sm leading-7 text-neutral-500">
                    {item.detail}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
