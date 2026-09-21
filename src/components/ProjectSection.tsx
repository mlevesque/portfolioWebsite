import './ProjectSection.css';
import { useEffect, useState } from 'react';
import microsoftLogo from '../assets/microsoft.svg';
import amazonLogo from '../assets/amazon.svg';
import gsngamesLogo from '../assets/gsngames.svg';
import zyngaLogo from '../assets/zynga.svg';

import teamsLogo from '../assets/teams.svg';

export const Company = {
  None: 'None',
  Microsoft: 'Microsoft',
  Amazon: 'Amazon',
  GSNGames: 'GSNGames',
  Zynga: 'Zynga',
} as const;

export const ProjectID = {
  Teams: 'teams',
  AmazonSellerCentral: 'amazon-seller-central',
  WheelOfFortune: 'wheel-of-fortune',
  Chefville: 'chefville',
} as const;

export type ProjectID = (typeof ProjectID)[keyof typeof ProjectID];
export type Company = (typeof Company)[keyof typeof Company];

const companyLogos: Partial<Record<Company, string>> = {
  [Company.Microsoft]: microsoftLogo,
  [Company.Amazon]: amazonLogo,
  [Company.GSNGames]: gsngamesLogo,
  [Company.Zynga]: zyngaLogo,
};

const projectLogos: Partial<Record<ProjectID, string>> = {
  [ProjectID.Teams]: teamsLogo,
};

export interface Project {
    id: string;
    title: string;
    company: Company;
    role: string;
    dates: string;
    images?: string[];
    summary: string;
    technologies: string[];
};

export function ProjectSection({ project }: { project: Project }) {
  const projectImages = project.images?.slice(0, 3) ?? [];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [selectedImage]);

  return (
    <section className="project-section">
      <div className="project-heading">
        <div className="project-heading-content">
          <div className="project-title-row">
            {projectLogos[project.id as ProjectID] && (
              <img
                className="project-logo"
                src={projectLogos[project.id as ProjectID]}
                alt=""
                aria-hidden="true"
              />
            )}
            <h2 className="project-title">{project.title}</h2>
          </div>
          <span className="project-company">
            {companyLogos[project.company] && (
              <img
                className="company-logo"
                src={companyLogos[project.company]}
                alt=""
                aria-hidden="true"
              />
            )}
          </span>
          <div className="project-meta">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.dates}</span>
          </div>
        </div>
      </div>

      {projectImages.length > 0 && (
        <div className={`project-images project-images-${projectImages.length}`}>
          {projectImages.map((image, index) => (
            <button
              key={image}
              className="project-image-button"
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Open ${project.title} example ${index + 1}`}
            >
              <img src={image} alt={`${project.title} example ${index + 1}`} />
            </button>
          ))}
        </div>
      )}

      <p className="project-summary">{project.summary}</p>

      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="technology">
            {tech}
          </span>
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded ${project.title} image`}
          onClick={() => setSelectedImage(null)}
        >
          <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              className="image-lightbox-close"
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close expanded image"
            >
              <span aria-hidden="true">×</span>
            </button>
            <img src={selectedImage} alt={`${project.title} enlarged`} />
          </div>
        </div>
      )}
    </section>
  );
}