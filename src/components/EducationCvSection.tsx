import type { CSSProperties } from "react";
import { SectionHeading } from "./SectionHeading";
import type {
  CvSpotlightViewModel,
  EducationItem,
  PortfolioContent,
} from "../types/portfolio";

interface EducationCvSectionProps {
  education: readonly EducationItem[];
  cv: CvSpotlightViewModel;
  content: PortfolioContent;
}

export function EducationCvSection({
  education,
  cv,
  content,
}: EducationCvSectionProps) {
  return (
    <section className="section" id="cv-spotlight">
      <SectionHeading
        eyebrow={content.education.eyebrow}
        title={content.education.title}
        description={content.education.description}
      />

      <div className="education-cv-grid">
        <div className="education-list">
          {education.map((item, index) => (
            <article
              key={`${item.school}-${item.period}`}
              className="education-card"
              data-reveal
              style={{ "--delay": `${index * 80}ms` } as CSSProperties}
            >
              <span className="panel-kicker">{item.period}</span>
              <h3>{item.school}</h3>
              <p className="education-program">{item.program}</p>
              <ul className="detail-list detail-list-soft">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <article
          className="cv-spotlight-card"
          data-reveal
          style={{ "--delay": "120ms" } as CSSProperties}
        >
          <div className="cv-paper">
            <span className="panel-kicker">CV Spotlight</span>
            <h3>{cv.headline}</h3>
            <p>{cv.summary}</p>
            <p className="cv-note">{cv.note}</p>
          </div>

          <div className="cv-actions">
            <a
              className="button button-primary"
              href={cv.fileUrl}
              target="_blank"
              rel="noreferrer"
            >
              {content.ui.viewCv}
            </a>
            <a className="button button-secondary" href={cv.fileUrl} download={cv.fileName}>
              {content.ui.downloadCv}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
