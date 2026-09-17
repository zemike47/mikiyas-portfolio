import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "./SectionHeading";

function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 45,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="border-t border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <SectionHeading number="01" label="About" />

        <div className="max-w-4xl">
          <h2 className="about-reveal text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            I build software with{" "}
            <span className="text-neutral-600">engineering depth.</span>
          </h2>

          <div className="mt-12 max-w-3xl space-y-6 text-base leading-8 text-neutral-500 sm:text-lg">
            <p className="about-reveal">
              I’m a Software Engineer with a background in software engineering,
              cloud computing, and competitive programming.
            </p>

            <p className="about-reveal">
              I enjoy building systems that go beyond basic CRUD — from
              cloud-native platforms running on AWS to workflow-driven
              applications with authentication, authorization, caching,
              automated deployments, and resilient infrastructure.
            </p>

            <p className="about-reveal">
              My current focus is backend engineering, distributed systems,
              cloud infrastructure, and solving challenging problems with data
              structures and algorithms.
            </p>
          </div>

          <div className="about-reveal mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <p className="font-mono text-3xl text-white">450+</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                Problems solved
              </p>
            </div>

            <div>
              <p className="font-mono text-3xl text-white">20+</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                Learners mentored
              </p>
            </div>

            <div>
              <p className="font-mono text-3xl text-white">AWS</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-neutral-600">
                Cloud certified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
