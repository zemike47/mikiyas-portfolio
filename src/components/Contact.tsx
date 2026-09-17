import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "./SectionHeading";

function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 35,
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
      id="contact"
      className="border-t border-white/10 px-6 py-32 sm:px-10 sm:py-44 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <SectionHeading number="07" label="Contact" />

        <div>
          <p className="contact-reveal font-mono text-xs uppercase tracking-[0.2em] text-lime-300">
            Have a problem worth solving?
          </p>

          <h2 className="contact-reveal mt-6 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Let&apos;s build something{" "}
            <span className="text-neutral-600">useful.</span>
          </h2>

          <p className="contact-reveal mt-9 max-w-2xl text-base leading-8 text-neutral-500 sm:text-lg">
            I&apos;m interested in software engineering opportunities, backend
            systems, cloud infrastructure, and challenging technical problems.
          </p>

          <div className="contact-reveal mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:mikiyasalemayehu35@gmail.com"
              className="group inline-flex items-center gap-4 bg-lime-300 px-5 py-3.5 font-mono text-xs font-medium text-black transition-transform duration-200 hover:-translate-y-1"
            >
              Get in touch
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/mikiyasalemayehu/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-neutral-800 px-5 py-3.5 font-mono text-xs text-neutral-300 transition-colors duration-200 hover:border-neutral-600 hover:text-white"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/zemike47"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-neutral-800 px-5 py-3.5 font-mono text-xs text-neutral-300 transition-colors duration-200 hover:border-neutral-600 hover:text-white"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>

          <p className="contact-reveal mt-8 font-mono text-xs text-neutral-700">
            mikiyasalemayehu35@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
