import { ProjectSection } from '../components/ProjectSection';
import { personalProjects, professionalProjects } from '../data';

export default function HomePage() {
  return (
    <>
      <title>Michael Levesque - Senior Software Engineer</title>
      {professionalProjects.length > 0 && (
        <section className="projects-header" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Professional Projects</h2>
        </section>
      )}
      {professionalProjects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
      {personalProjects.length > 0 && (
        <section className="projects-header" aria-labelledby="personal-projects-heading">
          <h2 id="personal-projects-heading">Personal Projects</h2>
        </section>
      )}
      {personalProjects.map((project) => (
        <ProjectSection key={project.id} project={project} />
      ))}
    </>
  );
}