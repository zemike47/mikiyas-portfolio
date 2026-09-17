import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "./SectionHeading";

const certifications = [
  {
    year: "2024",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
  },
  {
    year: "2024",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
];

function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".certification-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        x: 30,
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
      id="certifications"
      className="border-t border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <SectionHeading number="06" label="Certifications" />

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="certification-item border border-neutral-800 p-6 transition-colors duration-300 hover:border-neutral-600"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-[10px] text-lime-300">
                  {certification.year}
                </span>

                <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-700">
                  AWS
                </span>
              </div>

              <h3 className="mt-12 max-w-sm text-xl font-medium leading-tight tracking-tight text-white">
                {certification.name}
              </h3>

              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                {certification.issuer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
