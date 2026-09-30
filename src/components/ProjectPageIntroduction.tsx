import type { ComponentType } from 'react';
import type { Project } from './ProjectModel';
import { ProjectIdentity } from './ProjectIdentity';
import { CompanyLogo } from './CompanyLogo';
import { ProjectImage } from './ProjectContent';

import './ProjectPageIntroduction.css';

export type ProjectPageMedia =
  | { type: 'images'; images: { src: string; alt: string }[] }
  | { type: 'youtube'; videoId: string; title: string };

export type ProjectPageContent = {
  introduction: ComponentType;
  media?: ProjectPageMedia;
  sections?: { id: string; title: string; content: ComponentType; tags?: string[] }[];
};

type ProjectPageIntroductionProps = {
  project: Project;
  content: ProjectPageContent;
};

export function ProjectPageIntroduction({ project, content }: ProjectPageIntroductionProps) {
  const Introduction = content.introduction;

  return (
    <section className="project-page-introduction">
      <header className="project-page-introduction-heading">
        <div className="project-page-introduction-heading-copy">
          <ProjectIdentity project={project} />
          <div className="project-page-introduction-meta">
            <span>{project.role}</span>
            <span aria-hidden="true">•</span>
            <span>{project.dates}</span>
          </div>
        </div>
        <CompanyLogo company={project.company} />
      </header>

      {content.media?.type === 'images' && (
        <div className="project-page-media project-page-media-images">
          {content.media.images.map((image) => (
            <ProjectImage key={image.src} src={image.src} alt={image.alt} />
          ))}
        </div>
      )}

      {content.media?.type === 'youtube' && (
        <div className="project-page-media project-page-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${content.media.videoId}`}
            title={content.media.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}

      <article className="project-page-introduction-copy">
        <Introduction />
      </article>
    </section>
  );
}
