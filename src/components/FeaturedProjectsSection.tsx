import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import type { PortfolioContent, ProjectCardViewModel } from "../types/portfolio";

interface FeaturedProjectsSectionProps {
  projects: readonly ProjectCardViewModel[];
  content: PortfolioContent;
}

export function FeaturedProjectsSection({
  projects,
  content,
}: FeaturedProjectsSectionProps) {
  return (
    <section className="section section-tight" id="featured-projects">
      <SectionHeading
        eyebrow={content.projects.eyebrow}
        title={content.projects.title}
        description={content.projects.description}
      />

      <div className="featured-grid featured-grid-editorial">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            content={content}
            delay={index * 90}
          />
        ))}
      </div>
    </section>
  );
}
