import { Link, useParams } from 'react-router';
import { useEffect } from 'react';
import { Company, type Company as CompanyName, type Project } from '../models/ProjectModel';
import { ProjectArrow } from '../components/ProjectArrow';
import { ProjectPageIntroduction } from '../components/ProjectPageIntroduction';
import { professionalProjects, personalProjects } from '../data';
import { projectDetails } from '../content/projectDetails';

import './ProjectDetails.css';

const allProjects: Project[] = [...professionalProjects, ...personalProjects];

const companyDisplayNames: Record<CompanyName, string> = {
  [Company.None]: 'company',
  [Company.Microsoft]: 'Microsoft',
  [Company.Amazon]: 'Amazon',
  [Company.GSNGames]: 'GSN Games',
  [Company.Zynga]: 'Zynga',
};

function ProjectDisclaimer({ company }: { company: CompanyName }) {
  return (
    <aside className="project-disclaimer">
      <p>
        The contents on this page do not contain any {companyDisplayNames[company]} internal
        documentation or code. My code samples, demos, and diagrams are my own work and do not contain
        any proprietary information from {companyDisplayNames[company]}.
      </p>
    </aside>
  );
}

export function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = allProjects.find((item) => item.id === projectId);
  const pageContent = project ? projectDetails[project.id] : undefined;

  useEffect(() => {
    document.title = project
      ? `Michael Levesque - ${project.title}`
      : 'Michael Levesque - Project Not Found';
  }, [project]);

  if (!project) {
    return (
      <>
        <title>Michael Levesque - Project Not Found</title>
      <main className="project-details project-details-not-found">
        <h1>Project not found</h1>
        <Link to="/">Back to projects</Link>
      </main>
      </>
    );
  }

  return (
    <>
    <title>{`Michael Levesque - ${project.title}`}</title>
    <main className="project-details">
      <Link className="project-details-back" to="/">
        <ProjectArrow direction="left" />
        Back to projects
      </Link>
      {pageContent ? (
        <>
          <ProjectPageIntroduction project={project} content={pageContent} />
          {project.showCompanyDisclaimer && (
            <ProjectDisclaimer company={project.company} />
          )}
          {pageContent.sections && (
            <>
              {pageContent.sections.length > 1 && (
                <nav className="project-toc" aria-label="Project sections">
                  <h2>On this page</h2>
                  <ol>
                    {pageContent.sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`}>{section.title}</a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <div className="project-content-sections">
                {pageContent.sections.map(({ id, title, content: Section, tags }) => (
                  <section className="project-content-section" id={id} key={id}>
                    <header className="project-content-section-header">
                      <h2 className="project-content-section-title">{title}</h2>
                      {tags && tags.length > 0 && (
                        <ul className="technologies project-content-section-tags" aria-label={`${title} tags`}>
                          {tags.map((tag) => (
                            <li className="technology" key={tag}>{tag}</li>
                          ))}
                        </ul>
                      )}
                    </header>
                    <Section />
                  </section>
                ))}
              </div>
            </>
          )}
        </>
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
    </>
  );
}

export default ProjectDetails;
