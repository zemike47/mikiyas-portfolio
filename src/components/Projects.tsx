import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Streamly",
    type: "Cloud-Native Video-Sharing Platform",
    description:
      "A cloud-native video-sharing platform engineered around scalable compute, caching, private media delivery, automated deployments, and CDN distribution.",
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    highlights: [
      "51.22 requests/sec under 100 concurrent virtual users",
      "0% HTTP failures with 334 ms p95 latency",
      "26.4% p95 latency reduction with Redis API caching",
      "83% faster backend deployments with CI/CD",
    ],
    features: [
      "Redis API caching",
      "S3 + CloudFront private video delivery",
      "Application Load Balancer",
      "EC2 Auto Scaling",
      "GitHub Actions + ECR",
      "AWS OIDC",
    ],
    github: "https://github.com/zemike47",
  },
  {
    name: "AASTU Clinic & Care",
    type: "Full-Stack Clinic Management Platform",
    description:
      "A role-based clinic platform designed around a state-machine workflow connecting patient appointments, nurse assessment, doctor consultation, prescriptions, and medicine dispensing.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "AWS",
    ],
    highlights: [
      "5 role-based workflows across the clinic lifecycle",
      "JWT authentication and role-based authorization",
      "State-machine appointment lifecycle",
      "Automated security testing",
    ],
    features: [
      "Protected API endpoints",
      "Nurse → doctor workflow",
      "Prescription management",
      "Medicine dispensing",
      "Dockerized backend",
      "ECR + EC2 + RDS",
      "GitHub Actions + AWS OIDC",
    ],
    github: "https://github.com/zemike47",
  },
];

function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="border-t border-white/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <SectionHeading number="03" label="Selected Work" />

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
