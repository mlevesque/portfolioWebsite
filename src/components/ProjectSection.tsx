import './ProjectSection.css';
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
    summary: string;
    technologies: string[];
};

export function ProjectSection({ project }: { project: Project }) {
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

      <p className="project-summary">{project.summary}</p>

      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="technology">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}