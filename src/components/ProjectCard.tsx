type Project = {
  name: string;
  type: string;
  description: string;
  technologies: string[];
  highlights: string[];
  features: string[];
  github?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="project-card group border-t border-white/10 pt-8">
      <div className="grid gap-10 lg:grid-cols-[120px_1fr] lg:gap-12">
        <div>
          <span className="font-mono text-xs text-lime-300">0{index + 1}</span>
        </div>

        <div>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                {project.type}
              </p>

              <h3 className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
                {project.name}
              </h3>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 border border-neutral-800 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-neutral-400 transition-colors hover:border-lime-300 hover:text-lime-300"
              >
                GitHub
                <span>↗</span>
              </a>
            )}
          </div>

          <p className="mt-7 max-w-3xl text-base leading-8 text-neutral-500 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="font-mono text-[10px] uppercase tracking-wide text-neutral-600"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-12 grid gap-10 border-t border-white/10 pt-7 md:grid-cols-2">
            <div>
              <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                Engineering impact
              </h4>

              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-6 text-neutral-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lime-300" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
                Architecture
              </h4>

              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm leading-6 text-neutral-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
