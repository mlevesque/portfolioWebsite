import { ContentBox, ContentBoxRow } from '../components/ProjectContent';
import { FeaturedWorkGrid } from '../components/FeaturedWorkGrid';
import { ProjectSection } from '../components/ProjectSection';
import { highlightTopSkills, highlightOtherSkills, personalProjects, professionalProjects, featuredWork } from '../data';
import Introduction from '../content/introduction.mdx';
import './home.css';

export default function HomePage() {
  return (
    <>
      <title>Michael Levesque - Senior Software Engineer</title>
      <ContentBoxRow className="home-introduction" aria-label="Introduction">
        <ContentBox className="home-introduction-copy" textColor="#000000">
          <Introduction />
        </ContentBox>
        <ContentBox className="home-technical-skills">
          <h2>Technical Skills</h2>
          <ul className="home-skill-list" aria-label="Top skills">
            {highlightTopSkills.map((skill) => (
              <li className="home-skill-tag home-skill-top-tag" key={skill}>{skill}</li>
            ))}
          </ul>
          <ul className="home-skill-list" aria-label="Other skills">
            {highlightOtherSkills.map((skill) => (
              <li className="home-skill-tag" key={skill}>{skill}</li>
            ))}
          </ul>
        </ContentBox>
      </ContentBoxRow>

      {featuredWork.length > 0 && (
        <>
          <section className="projects-header" aria-labelledby="featured-work-heading">
            <h2 id="featured-work-heading">Featured Work</h2>
          </section>
          <FeaturedWorkGrid features={featuredWork} />
        </>
      )}

      

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