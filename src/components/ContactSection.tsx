import type { CSSProperties } from "react";
import { SectionHeading } from "./SectionHeading";
import type { PortfolioContent, ProfileViewModel } from "../types/portfolio";

interface ContactSectionProps {
  profile: ProfileViewModel;
  content: PortfolioContent;
}

export function ContactSection({ profile, content }: ContactSectionProps) {
  const githubLink = profile.contactLinks.find((link) => link.label === "GitHub");
  const linkedinLink = profile.contactLinks.find((link) => link.label === "LinkedIn");
  const emailLink = profile.contactLinks.find((link) => link.label === "Email");

  return (
    <section className="section contact-section" id="lien-he">
      <div className="section-layout section-layout-contact">
        <div>
          <SectionHeading
            eyebrow={content.contact.eyebrow}
            title={content.contact.title}
            description={content.contact.description}
          />

          <div
            className="contact-actions"
            data-reveal
            style={{ "--delay": "120ms" } as CSSProperties}
          >
            {githubLink ? (
              <a
                className="button button-primary"
                href={githubLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {content.ui.github}
              </a>
            ) : null}
            {linkedinLink ? (
              <a
                className="button button-secondary"
                href={linkedinLink.href}
                target="_blank"
                rel="noreferrer"
              >
                {content.ui.linkedin}
              </a>
            ) : null}
            {emailLink ? (
              <a className="button button-secondary" href={emailLink.href}>
                {content.ui.email}
              </a>
            ) : null}
          </div>
        </div>

        <div
          className="contact-card contact-card-luxury"
          data-reveal
          style={{ "--delay": "200ms" } as CSSProperties}
        >
          {profile.contactLinks.map((link) => {
            const target = link.external ? "_blank" : undefined;
            const rel = link.external ? "noreferrer" : undefined;

            return (
              <a
                key={link.label}
                className="contact-link-row"
                href={link.href}
                target={target}
                rel={rel}
              >
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            );
          })}

          <div className="contact-static-row">
            <span>Địa điểm</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
