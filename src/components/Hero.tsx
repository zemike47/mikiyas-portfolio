import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-eyebrow", {
          opacity: 0,
          y: 20,
          duration: 0.6,
        })
        .from(
          ".hero-line",
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          "-=0.35"
        )
        .from(
          ".hero-actions",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ".hero-meta-item",
          {
            opacity: 0,
            y: 15,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.25"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between">
        <div>
          <p className="hero-eyebrow mb-7 font-mono text-xs uppercase tracking-[0.25em] text-lime-300">
            Software Engineer
          </p>

          <h1 className="overflow-hidden text-6xl font-semibold leading-[0.88] tracking-[-0.07em] sm:text-8xl lg:text-[9.5rem]">
            <span className="hero-line block">Building</span>

            <span className="hero-line block text-neutral-600">
              systems that
            </span>

            <span className="hero-line block">scale.</span>
          </h1>

          <p className="hero-description mt-10 max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
            Software Engineer building backend systems, cloud infrastructure,
            and full-stack applications with a focus on scalability,
            reliability, and practical problem solving.
          </p>

          <div className="hero-actions mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-4 bg-lime-300 px-5 py-3.5 font-mono text-xs font-medium text-black transition-transform duration-200 hover:-translate-y-1"
            >
              View my work
              <span className="transition-transform duration-200 group-hover:translate-y-1">
                ↓
              </span>
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
        </div>

        <div className="mt-24 grid max-w-3xl grid-cols-1 border-t border-white/10 pt-5 sm:grid-cols-3">
          <HeroMeta number="01" label="Backend Engineering" />
          <HeroMeta number="02" label="Cloud Infrastructure" />
          <HeroMeta number="03" label="Problem Solving" />
        </div>
      </div>
    </section>
  );
}

type HeroMetaProps = {
  number: string;
  label: string;
};

function HeroMeta({ number, label }: HeroMetaProps) {
  return (
    <div className="hero-meta-item flex items-center gap-3 py-2">
      <span className="font-mono text-[10px] text-lime-300">{number}</span>

      <span className="font-mono text-[10px] uppercase tracking-wide text-neutral-600">
        {label}
      </span>
    </div>
  );
}

export default Hero;
