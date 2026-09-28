import { Link, useParams } from 'react-router-dom';
import { ProjectSection, type Project } from '../components/ProjectSection';
import { ProjectArrow } from '../components/ProjectArrow';
import { professionalProjects, personalProjects } from '../data';
import { projectDetails } from '../content/projectDetails';

import './ProjectDetails.css';

const allProjects: Project[] = [...professionalProjects, ...personalProjects];

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = allProjects.find((item) => item.id === projectId);
  const detailSections = project ? projectDetails[project.id] : undefined;

  if (!project) {
    return (
      <main className="project-details project-details-not-found">
        <title>Michael Levesque - Project Not Found</title>
        <h1>Project not found</h1>
        <Link to="/">Back to projects</Link>
      </main>
    );
  }

  return (
    <main className="project-details">
      <title>Michael Levesque - {project.title}</title>
      <Link className="project-details-back" to="/">
        <ProjectArrow direction="left" />
        Back to projects
      </Link>
      <ProjectSection project={project} />
      {detailSections ? (
        <div className="project-content-sections">
          {detailSections.map((Section, index) => (
            <section className="project-content-section" key={`${project.id}-section-${index}`}>
              <Section />
            </section>
          ))}
        </div>
      ) : (
        <article className="project-details-content">
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <h2>Technologies</h2>
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      )}
    </main>
  );
}
