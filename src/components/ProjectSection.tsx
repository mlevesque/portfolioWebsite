import './ProjectSection.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { hasProjectDetails } from '../content/projectDetails';
import { ProjectArrow } from './ProjectArrow';
import { ProjectIdentity } from './ProjectIdentity';
import { CompanyLogo } from './CompanyLogo';
import type { Project } from '../models/ProjectModel';

function renderSummary(summary: string) {
  return summary.split(/(<b>[\s\S]*?<\/b>)/g).map((part, index) => {
    const boldText = part.match(/^<b>([\s\S]*)<\/b>$/);

    return boldText ? <strong key={index}>{boldText[1]}</strong> : part;
  });
}

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
          <ProjectIdentity project={project} linkTo={`/projects/${project.id}`} />
          <span className="project-company">
            <CompanyLogo company={project.company} />
          </span>
          <div className="project-meta">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.dates}</span>
          </div>
        </div>
      </div>

      {projectImages.length > 0 && (
        <div
          className={`project-images project-images-${projectImages.length} project-images-${project.imageLayout ?? 'landscape'}`}
        >
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

      <p className="project-summary">{renderSummary(project.summary)}</p>

      {hasProjectDetails(project.id) && (
        <Link className="project-details-link" to={`/projects/${project.id}`}>
          View project details
          <ProjectArrow />
        </Link>
      )}

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