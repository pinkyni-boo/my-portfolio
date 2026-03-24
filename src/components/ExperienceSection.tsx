import type { CSSProperties } from "react";
import { SectionHeading } from "./SectionHeading";
import type { ExperienceItem, PortfolioContent } from "../types/portfolio";

interface ExperienceSectionProps {
  experience: readonly ExperienceItem[];
  content: PortfolioContent;
}

export function ExperienceSection({
  experience,
  content,
}: ExperienceSectionProps) {
  return (
    <section className="section" id="experience">
      <SectionHeading
        eyebrow={content.experience.eyebrow}
        title={content.experience.title}
        description={content.experience.description}
      />

      <div className="experience-timeline">
        {experience.map((item, index) => (
          <article
            key={`${item.project}-${item.period}`}
            className="timeline-card"
            data-reveal
            style={{ "--delay": `${index * 90}ms` } as CSSProperties}
          >
            <div className="timeline-rail">
              <span></span>
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <p className="timeline-period">{item.period}</p>
                <span className="timeline-project">{item.project}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="timeline-summary">{item.summary}</p>

              <ul className="timeline-highlight-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="timeline-footer">
                <ul className="project-tag-list">
                  {item.stack.map((tag) => (
                    <li key={`${item.project}-${tag}`}>{tag}</li>
                  ))}
                </ul>

                <div className="timeline-links">
                  {item.repoUrl ? (
                    <a href={item.repoUrl} target="_blank" rel="noreferrer">
                      Xem repo
                    </a>
                  ) : null}
                  {item.demoUrl ? (
                    <a href={item.demoUrl} target="_blank" rel="noreferrer">
                      Xem demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
