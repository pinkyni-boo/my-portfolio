import type { CSSProperties } from "react";
import type { PortfolioContent, ProjectCardViewModel } from "../types/portfolio";

interface ProjectCardProps {
  project: ProjectCardViewModel;
  content: PortfolioContent;
  delay: number;
}

export function ProjectCard({ project, content, delay }: ProjectCardProps) {
  const cardClassName = `project-card project-card--featured project-card--${project.visualSize}`;

  return (
    <article
      className={cardClassName}
      data-reveal
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      <div className="project-card-top">
        <span className="project-badge">{project.badge}</span>
        <span className="project-period">{project.period}</span>
      </div>

      <div className="project-copy">
        <p className="project-role">{project.role}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-impact">{project.impact}</p>
      </div>

      <ul className="project-highlight-list">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-footer">
        <ul className="project-tag-list">
          {project.stack.map((tag) => (
            <li key={`${project.id}-${tag}`}>{tag}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.repoUrl ? (
            <a
              className="project-link project-link-primary"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {content.ui.viewCode}
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              className="project-link project-link-secondary"
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              {content.ui.liveDemo}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
